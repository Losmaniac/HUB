#!/usr/bin/env python3
"""Category 1 (macro) — inflation (HICP annual rate) from Eurostat.

Source: Eurostat dissemination API, dataset prc_hicp_manr (free, no key).
Returns the latest available annual rate of change of the all-items HICP for each
of the 15 markets that Eurostat covers (non-EU markets — BA, RS, MD — are skipped
here and would be filled from national statistics offices).

The same JSON-stat parsing pattern extends to other Eurostat datasets used by the
system: sts_inpr_m (industrial production), sts_trtu_m (retail sales),
road_eqs_carage (parc age), tour_occ (tourism), avia_paoc (airport pax).
"""
from __future__ import annotations
from _common import COUNTRIES, get_json, obs, write_csv, latest_from_jsonstat

BASE = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data"
EU_GEO = [c for c in COUNTRIES if c not in ("BA", "RS", "MD")]  # Eurostat coverage


def run():
    url = (f"{BASE}/prc_hicp_manr?format=JSON&lang=EN&coicop=CP00&unit=RCH_A"
           + "".join(f"&geo={g}" for g in EU_GEO)
           + "&sinceTimePeriod=2024-01")
    rows = []
    try:
        js = get_json(url)
        for cc in EU_GEO:
            period, val = latest_from_jsonstat(js, cc)
            if val is not None:
                rows.append(obs(cc, f"{period}-01", "macro", "cpi_hicp_yoy",
                                round(val, 1), "pct", "eurostat"))
        print(f"  parsed HICP for {len(rows)} markets")
    except Exception as e:
        print(f"  [warn] Eurostat fetch/parse failed: {e}")
    write_csv(rows, "eurostat.csv")
    return rows


if __name__ == "__main__":
    print("collect_eurostat: HICP inflation (Eurostat prc_hicp_manr)")
    run()
