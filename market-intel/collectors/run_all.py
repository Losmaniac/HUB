#!/usr/bin/env python3
"""Orchestrator — runs every free collector and merges output into one tidy CSV.

    python3 run_all.py

Writes each collector's CSV plus a merged data/out/observations.csv matching the
`observations` table in ../data/schema.sql. Keyed collectors run too but skip
cleanly when their API key env var is absent, so this always completes.
"""
from __future__ import annotations
import csv, os
from _common import OUT_DIR, FIELDS
import collect_fx, collect_eurostat, collect_fuel
import collect_weather, collect_mobility, collect_wikipedia

# Every collector below uses a free, no-key public source.
COLLECTORS = [
    ("FX rates (ECB/Frankfurter)", collect_fx.run),
    ("HICP inflation (Eurostat)",  collect_eurostat.run),
    ("Fuel prices (EU Oil Bulletin)", collect_fuel.run),
    ("Weather forecast + anomaly (Open-Meteo)", collect_weather.run),
    ("Mobility: tourism + air pax (Eurostat)", collect_mobility.run),
    ("Brand attention / SoV (Wikimedia)", collect_wikipedia.run),
]


def main():
    all_rows = []
    for label, fn in COLLECTORS:
        print(f"\n▶ {label}")
        try:
            all_rows.extend(fn() or [])
        except Exception as e:
            print(f"  [error] {label}: {e}")

    os.makedirs(OUT_DIR, exist_ok=True)
    merged = os.path.join(OUT_DIR, "observations.csv")
    with open(merged, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(all_rows)
    print(f"\n✓ merged {len(all_rows)} observations -> {os.path.relpath(merged)}")


if __name__ == "__main__":
    main()
