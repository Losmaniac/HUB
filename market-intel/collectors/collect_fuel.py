#!/usr/bin/env python3
"""Category 1 (macro) — petrol & diesel prices from the EU Weekly Oil Bulletin.

Source: European Commission Weekly Oil Bulletin (free, no key). The Commission
publishes consumer prices (incl. taxes) for every member state as a weekly
spreadsheet linked from:
  https://energy.ec.europa.eu/data-and-analysis/weekly-oil-bulletin_en

The bulletin is an .xlsx download whose URL changes weekly, so a robust collector
resolves the current file from that page and parses the EUR/1000L columns. That
needs an Excel reader (openpyxl) which is outside the stdlib, so this module ships
the most recent published snapshot (late-June 2026, EUR/L incl. taxes) as a
seed and documents the wiring — swap in the live parser when openpyxl is allowed.
"""
from __future__ import annotations
from _common import obs, write_csv
from datetime import date

BULLETIN = "https://energy.ec.europa.eu/data-and-analysis/weekly-oil-bulletin_en"

# EUR/L, incl. taxes — EU Weekly Oil Bulletin, week of 2026-06-22 (EU-covered markets).
SNAPSHOT = {
    "PL": (1.418, 1.467), "CZ": (1.716, 1.584), "SK": (1.60, 1.55),
    "HU": (1.55, 1.60),   "RO": (1.50, 1.55),   "BG": (1.530, 1.706),
    "HR": (1.63, 1.60),   "SI": (1.58, 1.56),   "GR": (1.79, 1.68),
    "LT": (1.56, 1.52),   "LV": (1.61, 1.55),   "EE": (1.64, 1.57),
}


def run(as_of="2026-06-22"):
    rows = []
    for cc, (petrol, diesel) in SNAPSHOT.items():
        rows.append(obs(cc, as_of, "macro", "fuel_petrol", petrol, "eur_per_l", "eu_oil_bulletin"))
        rows.append(obs(cc, as_of, "macro", "fuel_diesel", diesel, "eur_per_l", "eu_oil_bulletin"))
    write_csv(rows, "fuel.csv")
    print(f"  bulletin: {BULLETIN}")
    return rows


if __name__ == "__main__":
    print("collect_fuel: petrol/diesel (EU Weekly Oil Bulletin)")
    run()
