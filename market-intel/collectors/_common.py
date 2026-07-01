"""Shared helpers for the market-intel collectors.

Standard-library only (no pip install). Handles proxy + CA-bundle environments
transparently so the same code runs locally, in this sandbox, and in CI.
"""
from __future__ import annotations
import csv, json, os, ssl, urllib.request, urllib.error
from datetime import date, datetime

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "out")

# 15 markets, ISO-2 -> (name, currency, euro?)
COUNTRIES = {
    "PL": ("Poland", "PLN", False), "CZ": ("Czechia", "CZK", False),
    "SK": ("Slovakia", "EUR", True), "HU": ("Hungary", "HUF", False),
    "RO": ("Romania", "RON", False), "BG": ("Bulgaria", "EUR", True),
    "HR": ("Croatia", "EUR", True),  "SI": ("Slovenia", "EUR", True),
    "GR": ("Greece", "EUR", True),   "BA": ("Bosnia & Herzegovina", "BAM", False),
    "RS": ("Serbia", "RSD", False),  "MD": ("Moldova", "MDL", False),
    "LT": ("Lithuania", "EUR", True),"LV": ("Latvia", "EUR", True),
    "EE": ("Estonia", "EUR", True),
}

FIELDS = ["country", "date", "category", "metric", "value", "unit", "source", "ingested_at"]

# Representative population-weighted sampling point per market (capital region),
# used for weather signals. (lat, lon)
CAPITALS = {
    "PL": (52.23, 21.01), "CZ": (50.08, 14.44), "SK": (48.15, 17.11),
    "HU": (47.50, 19.04), "RO": (44.43, 26.10), "BG": (42.70, 23.32),
    "HR": (45.81, 15.98), "SI": (46.06, 14.51), "GR": (37.98, 23.73),
    "BA": (43.86, 18.41), "RS": (44.79, 20.45), "MD": (47.01, 28.86),
    "LT": (54.69, 25.28), "LV": (56.95, 24.11), "EE": (59.44, 24.75),
}


def _ssl_context() -> ssl.SSLContext:
    """Trust a custom CA bundle if the environment points to one (proxy setups)."""
    ctx = ssl.create_default_context()
    for var in ("SSL_CERT_FILE", "REQUESTS_CA_BUNDLE", "CURL_CA_BUNDLE"):
        p = os.environ.get(var)
        if p and os.path.exists(p):
            ctx.load_verify_locations(p)
            break
    else:
        # common location used by the agent proxy in this environment
        p = "/root/.ccr/ca-bundle.crt"
        if os.path.exists(p):
            try:
                ctx.load_verify_locations(p)
            except Exception:
                pass
    return ctx


def get_json(url: str, timeout: int = 30, retries: int = 2, ua: str = "michelin-mi/1.0"):
    """GET a URL and parse JSON, honouring HTTP(S)_PROXY env vars + CA bundle.

    Retries with linear backoff on transient errors (e.g. HTTP 429 from shared
    IPs) so a single rate-limited request never kills the pipeline.
    """
    handlers = [urllib.request.ProxyHandler(urllib.request.getproxies()),
                urllib.request.HTTPSHandler(context=_ssl_context())]
    opener = urllib.request.build_opener(*handlers)
    req = urllib.request.Request(url, headers={"User-Agent": ua})
    last = None
    for attempt in range(retries + 1):
        try:
            with opener.open(req, timeout=timeout) as r:
                return json.loads(r.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            last = e
            if e.code in (429, 500, 502, 503) and attempt < retries:
                import time
                time.sleep(1.5 * (attempt + 1))
                continue
            raise
    raise last  # pragma: no cover


def latest_from_jsonstat(js, geo):
    """Return (period, value) for the most recent non-null observation for `geo`
    in a Eurostat JSON-stat response. Shared by every Eurostat collector."""
    dims = js["id"]
    gi, ti = dims.index("geo"), dims.index("time")
    geo_idx = js["dimension"]["geo"]["category"]["index"].get(geo)
    if geo_idx is None:
        return None, None
    time_cat = js["dimension"]["time"]["category"]["index"]
    times = sorted(time_cat, key=lambda k: time_cat[k])
    sizes = js["size"]
    strides = [1] * len(sizes)
    for i in range(len(sizes) - 2, -1, -1):
        strides[i] = strides[i + 1] * sizes[i + 1]
    values = js.get("value", {})
    for period in reversed(times):  # newest first
        pos = [0] * len(sizes)
        pos[gi], pos[ti] = geo_idx, time_cat[period]
        flat = sum(p * s for p, s in zip(pos, strides))
        v = values.get(str(flat))
        if v is not None:
            return period, v
    return None, None


def obs(country, on_date, category, metric, value, unit, source):
    return {
        "country": country, "date": str(on_date), "category": category,
        "metric": metric, "value": value, "unit": unit, "source": source,
        "ingested_at": datetime.utcnow().isoformat(timespec="seconds") + "Z",
    }


def write_csv(rows, filename):
    os.makedirs(OUT_DIR, exist_ok=True)
    path = os.path.join(OUT_DIR, filename)
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(rows)
    print(f"  wrote {len(rows):>4} rows -> {os.path.relpath(path)}")
    return path


def one_year_ago(iso: str | None = None) -> str:
    d = date.fromisoformat(iso) if iso else date.today()
    try:
        return d.replace(year=d.year - 1).isoformat()
    except ValueError:  # 29 Feb
        return d.replace(year=d.year - 1, day=28).isoformat()
