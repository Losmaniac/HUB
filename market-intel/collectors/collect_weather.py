#!/usr/bin/env python3
"""Category 4 (weather) — free, no-key replacement for OpenWeather / Meteostat.

Source: Open-Meteo (open-meteo.com) — free, keyless.
  * Forecast API : next-7-day mean/min temperature, snowfall, precipitation.
  * Archive API  : ERA5 reanalysis for the same window one year earlier,
                   used to derive a temperature anomaly.

Feeds the Winter Severity Index inputs directly: temperature anomaly, snow days,
snowfall vs prior year. (In summer these are legitimately ~0 — the signal turns
on from autumn.)
"""
from __future__ import annotations
from _common import CAPITALS, get_json, obs, write_csv, one_year_ago
from datetime import date, timedelta

FORECAST = "https://api.open-meteo.com/v1/forecast"
ARCHIVE = "https://archive-api.open-meteo.com/v1/archive"
DAILY = "temperature_2m_mean,temperature_2m_min,snowfall_sum,precipitation_sum"


def _mean(xs):
    xs = [x for x in xs if x is not None]
    return round(sum(xs) / len(xs), 1) if xs else None


def run():
    today = date.today()
    rows = []
    for cc, (lat, lon) in CAPITALS.items():
        try:
            fc = get_json(f"{FORECAST}?latitude={lat}&longitude={lon}"
                          f"&daily={DAILY}&forecast_days=7&timezone=auto")["daily"]
        except Exception as e:
            print(f"  [warn] {cc} forecast failed: {e}")
            continue

        as_of = today.isoformat()
        temp_mean = _mean(fc["temperature_2m_mean"])
        snow_sum = round(sum(s or 0 for s in fc["snowfall_sum"]), 1)
        snow_days = sum(1 for s in fc["snowfall_sum"] if (s or 0) > 0)
        min_temp = min((t for t in fc["temperature_2m_min"] if t is not None), default=None)
        rain_sum = round(sum(p or 0 for p in fc["precipitation_sum"]), 1)

        rows += [
            obs(cc, as_of, "weather", "temp_mean_fc7", temp_mean, "celsius", "open_meteo"),
            obs(cc, as_of, "weather", "temp_min_fc7", min_temp, "celsius", "open_meteo"),
            obs(cc, as_of, "weather", "snowfall_fc7", snow_sum, "cm", "open_meteo"),
            obs(cc, as_of, "weather", "snow_days_fc7", snow_days, "days", "open_meteo"),
            obs(cc, as_of, "weather", "precip_fc7", rain_sum, "mm", "open_meteo"),
        ]

        # temperature anomaly vs the same window one year ago (ERA5 archive)
        try:
            start = one_year_ago(today.isoformat())
            end = (date.fromisoformat(start) + timedelta(days=6)).isoformat()
            arc = get_json(f"{ARCHIVE}?latitude={lat}&longitude={lon}"
                           f"&start_date={start}&end_date={end}"
                           f"&daily=temperature_2m_mean,snowfall_sum&timezone=auto")["daily"]
            base_temp = _mean(arc["temperature_2m_mean"])
            if base_temp is not None and temp_mean is not None:
                rows.append(obs(cc, as_of, "weather", "temp_anomaly_yoy",
                                round(temp_mean - base_temp, 1), "celsius", "open_meteo"))
            base_snow = round(sum(s or 0 for s in arc["snowfall_sum"]), 1)
            if base_snow > 0:
                pct = round((snow_sum / base_snow - 1) * 100, 0)
                rows.append(obs(cc, as_of, "weather", "snowfall_vs_yoy", pct, "pct", "open_meteo"))
        except Exception as e:
            print(f"  [warn] {cc} archive/anomaly failed: {e}")

    write_csv(rows, "weather.csv")
    return rows


if __name__ == "__main__":
    print("collect_weather: temperature/snow forecast + anomaly (Open-Meteo, free)")
    run()
