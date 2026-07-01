# Collectors

Standard-library Python collectors that pull the **free / no-key** public sources into
the storage schema (`../data/schema.sql`). Each writes a CSV to `../data/out/`.

## Run

```bash
cd market-intel/collectors
python3 run_all.py            # everything free, merged -> ../data/out/observations.csv
```

Or individually:

```bash
python3 collect_fx.py         # EUR rates + YoY (ECB via Frankfurter)   -> fx.csv
python3 collect_eurostat.py   # HICP inflation (Eurostat prc_hicp_manr) -> eurostat.csv
python3 collect_fuel.py       # petrol/diesel (EU Weekly Oil Bulletin)  -> fuel.csv
python3 collect_weather.py    # temp/snow forecast + anomaly (Open-Meteo) -> weather.csv
python3 collect_mobility.py   # tourism + air passengers (Eurostat)     -> mobility.csv
python3 collect_wikipedia.py  # brand attention / SoV (Wikimedia)       -> wikipedia.csv
```

## Output shape

Every row matches the `observations` table:

```
country,date,category,metric,value,unit,source,ingested_at
PL,2026-07-01,macro,fx_eur_pln,4.2958,eur_local,ecb_frankfurter,2026-07-01T09:00:00Z
PL,2026-07-01,macro,fx_eur_yoy,1.2,pct,ecb_frankfurter,2026-07-01T09:00:00Z
```

Load into SQLite:

```bash
sqlite3 mi.db < ../data/schema.sql
sqlite3 mi.db ".mode csv" ".import --skip 1 ../data/out/observations.csv observations"
```

## Sources

Every collector uses a **free, no-key** public source — nothing needs a secret:

| Collector | Source | Category | Key? |
|-----------|--------|----------|:---:|
| `collect_fx` | ECB reference rates (Frankfurter) | 1 · macro | No |
| `collect_eurostat` | Eurostat `prc_hicp_manr` | 1 · macro | No |
| `collect_fuel` | EU Weekly Oil Bulletin | 1 · macro | No |
| `collect_weather` | Open-Meteo (forecast + ERA5 archive) | 4 · weather | No |
| `collect_mobility` | Eurostat `tour_occ_nim`, `avia_paoc` | 5 · mobility | No |
| `collect_wikipedia` | Wikimedia Pageviews | 7 · competitive | No |

Google Trends (categories 3 & 7), EAFO (category 6) and ACEA press (category 2) are also
free and documented as pointers.

**Optional paid upgrades** (not required — the free stack already covers the category):
TomTom (true congestion index) and SimilarWeb / Semrush / Ahrefs (exact web-traffic & SEO).
No secrets are configured in the workflow; add them only if you later choose to wire an
upgrade.

The Wikimedia API rate-limits shared IPs (HTTP 429); `collect_wikipedia` retries and skips
cleanly, so the pipeline never breaks — it runs fine from a normal IP / GitHub Actions.

## Environments behind a proxy

`_common.py` honours `HTTP(S)_PROXY` and trusts a CA bundle from `SSL_CERT_FILE`,
`REQUESTS_CA_BUNDLE`, `CURL_CA_BUNDLE`, or `/root/.ccr/ca-bundle.crt` — so the same code
runs locally, in a sandbox, and in CI with no changes.
