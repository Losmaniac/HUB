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


def get_json(url: str, timeout: int = 30):
    """GET a URL and parse JSON, honouring HTTP(S)_PROXY env vars + CA bundle."""
    handlers = [urllib.request.ProxyHandler(urllib.request.getproxies()),
                urllib.request.HTTPSHandler(context=_ssl_context())]
    opener = urllib.request.build_opener(*handlers)
    req = urllib.request.Request(url, headers={"User-Agent": "michelin-mi/1.0"})
    with opener.open(req, timeout=timeout) as r:
        return json.loads(r.read().decode("utf-8"))


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
