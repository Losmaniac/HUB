#!/usr/bin/env python3
"""Category 5 (mobility) — free, no-key replacement for TomTom Traffic Index.

Source: Eurostat dissemination API (free, keyless). TomTom's congestion index has
no free API, so we substitute the mobility signals that ARE freely available and
are strong tire-wear / demand proxies:

  * tour_occ_nim  — nights spent at tourist accommodation (monthly)  -> tourism
  * avia_paoc     — air passenger transport (monthly)                -> airport pax

Both are leading proxies for road activity / km driven in a market. Non-EU markets
(BA, RS, MD) are not covered by Eurostat here and would use national statistics.
"""
from __future__ import annotations
from _common import COUNTRIES, get_json, obs, write_csv, latest_from_jsonstat

BASE = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data"
EU_GEO = [c for c in COUNTRIES if c not in ("BA", "RS", "MD")]

DATASETS = [
    # (dataset, extra filters, metric, unit, category)
    ("tour_occ_nim", "c_resid=TOTAL&unit=NR&nace_r2=I551-I553", "tourism_nights", "count", "mobility"),
    ("avia_paoc", "unit=PAS&tra_meas=PAS_CRD", "airport_passengers", "count", "mobility"),
]


def run():
    rows = []
    for ds, filt, metric, unit, cat in DATASETS:
        url = (f"{BASE}/{ds}?format=JSON&lang=EN&{filt}"
               + "".join(f"&geo={g}" for g in EU_GEO) + "&sinceTimePeriod=2024-01")
        try:
            js = get_json(url)
            n = 0
            for cc in EU_GEO:
                period, val = latest_from_jsonstat(js, cc)
                if val is not None:
                    rows.append(obs(cc, f"{period}-01", cat, metric, round(val), unit, "eurostat"))
                    n += 1
            print(f"  {ds}: {n} markets")
        except Exception as e:
            print(f"  [warn] {ds} failed: {e}")
    write_csv(rows, "mobility.csv")
    return rows


if __name__ == "__main__":
    print("collect_mobility: tourism + airport passengers (Eurostat, free)")
    run()
