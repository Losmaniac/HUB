#!/usr/bin/env python3
"""Keyed-source collectors (weather, mobility, web/SEO intelligence).

These sources require an API key. Each collector reads its key from an environment
variable and SKIPS CLEANLY when the key is absent, so the free pipeline always runs.
Endpoints are documented inline; drop the key in and the request is ready to wire.

  Category 4  weather      OPENWEATHER_KEY   api.openweathermap.org/data/2.5
               history      METEOSTAT_KEY     meteostat.p.rapidapi.com
  Category 5  mobility     TOMTOM_KEY        api.tomtom.com/traffic
  Category 7  web traffic  SIMILARWEB_KEY    api.similarweb.com/v1
               SEO / SoV    SEMRUSH_KEY       api.semrush.com
               backlinks    AHREFS_KEY        api.ahrefs.com/v3
"""
from __future__ import annotations
import os
from _common import write_csv

# capital cities used for weather sampling (lat, lon)
CAPITALS = {
    "PL": (52.23, 21.01), "CZ": (50.08, 14.44), "SK": (48.15, 17.11),
    "HU": (47.50, 19.04), "RO": (44.43, 26.10), "BG": (42.70, 23.32),
    "HR": (45.81, 15.98), "SI": (46.06, 14.51), "GR": (37.98, 23.73),
    "BA": (43.86, 18.41), "RS": (44.79, 20.45), "MD": (47.01, 28.86),
    "LT": (54.69, 25.28), "LV": (56.95, 24.11), "EE": (59.44, 24.75),
}

KEYED = {
    "OPENWEATHER_KEY": ("weather", "OpenWeather"),
    "METEOSTAT_KEY":   ("weather", "Meteostat"),
    "TOMTOM_KEY":      ("mobility", "TomTom Traffic Index"),
    "SIMILARWEB_KEY":  ("competitive", "SimilarWeb"),
    "SEMRUSH_KEY":     ("competitive", "Semrush"),
    "AHREFS_KEY":      ("competitive", "Ahrefs"),
}


def run():
    rows = []  # real rows would be appended once keys/parsers are wired
    missing = []
    for env, (cat, name) in KEYED.items():
        if os.environ.get(env):
            print(f"  [{cat}] {name}: key present — wire the request/parse here")
            # e.g. for OpenWeather:
            #   lat, lon = CAPITALS[cc]
            #   get_json(f"https://api.openweathermap.org/data/2.5/forecast"
            #            f"?lat={lat}&lon={lon}&appid={os.environ[env]}&units=metric")
        else:
            missing.append(name)
    if missing:
        print(f"  skipped (no API key): {', '.join(missing)}")
    write_csv(rows, "keyed.csv")
    return rows


if __name__ == "__main__":
    print("collect_keyed_stubs: weather / mobility / web-SEO (require keys)")
    run()
