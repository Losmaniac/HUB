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

## Keyed sources

`collect_keyed_stubs.py` covers the sources that need an API key. It reads each key from
an environment variable and **skips cleanly if absent**, so the free pipeline never
breaks:

| Env var | Source | Category |
|---------|--------|----------|
| `OPENWEATHER_KEY` | OpenWeather | 4 · weather |
| `METEOSTAT_KEY` | Meteostat | 4 · weather history |
| `TOMTOM_KEY` | TomTom Traffic Index | 5 · mobility |
| `SIMILARWEB_KEY` | SimilarWeb | 7 · web traffic |
| `SEMRUSH_KEY` | Semrush | 7 · SEO / SoV |
| `AHREFS_KEY` | Ahrefs | 7 · backlinks |

Set them as GitHub Actions secrets to activate in CI (see
`../../.github/workflows/market-intel.yml`).

## Environments behind a proxy

`_common.py` honours `HTTP(S)_PROXY` and trusts a CA bundle from `SSL_CERT_FILE`,
`REQUESTS_CA_BUNDLE`, `CURL_CA_BUNDLE`, or `/root/.ccr/ca-bundle.crt` — so the same code
runs locally, in a sandbox, and in CI with no changes.
