# Michelin × Inter Cars — CEE/SEE Aftermarket Market-Intelligence System

Automated, **public-data-only** market-intelligence for the Inter Cars account across
15 markets:

> Poland · Czechia · Slovakia · Hungary · Romania · Bulgaria · Croatia · Slovenia ·
> Greece · Bosnia & Herzegovina · Serbia · Moldova · Lithuania · Latvia · Estonia

The system predicts **tire demand, premiumization, campaign effectiveness, competitive
movements and market opportunity 3–6 months before they surface in sell-in / sell-out
figures** — using leading indicators only.

> **No internal data.** This system never uses Michelin sell-in, Inter Cars sell-out,
> margin, revenue, internal stock or CRM data. Every input is publicly sourced.

---

## What ships in this repo

| Path | Purpose |
|------|---------|
| [`../market-intel.html`](../market-intel.html) | Interactive dashboard — ranking, 8 indices, early-warning board, threat map, premium ranking, recommended actions. Opens in any browser; live EUR FX layer. |
| `collectors/` | Runnable Python collectors (stdlib-only) that pull the **free / no-key** sources into the storage schema. |
| `data/schema.sql` | Storage schema — one tidy `observations` table + reporting views. |
| `data/sources.csv` | Machine-readable source registry (category → source → cadence → key required). |
| `../.github/workflows/market-intel.yml` | Scheduled GitHub Actions pipeline that runs collectors and commits refreshed data. |

---

## Architecture

```
                 ┌─────────────────────── COLLECTION (scheduled) ───────────────────────┐
  Public sources │  Eurostat · ECB · IMF · EU Oil Bulletin · ACEA · EAFO · Google Trends │
  (free + keyed) │  OpenWeather · Meteostat · TomTom · SimilarWeb · Semrush · Ahrefs     │
                 └───────────────┬──────────────────────────────────────────────────────┘
                                 │  collectors/*.py  (one collector per source family)
                                 ▼
                     ┌─────────────────────────┐
                     │  observations (tidy)     │   country, date, category, metric,
                     │  data/schema.sql         │   value, unit, source, ingested_at
                     └───────────┬─────────────┘
                                 │  transforms → normalised 0–100 inputs
                                 ▼
             ┌──────────────────────────────────────────────────────────┐
             │  ANALYTICS: 8 composite indices + early-warning rules      │
             │  (weighting favours LEADING over LAGGING indicators)       │
             └───────────┬──────────────────────────────────────────────┘
                         ▼
        Daily · Weekly · Monthly · Quarterly dashboards + alerts + country ranking
```

The dashboard is self-contained (analytics run in-browser off a seeded snapshot plus a
live FX call), so it works on GitHub Pages with zero backend. The `collectors/` +
Actions pipeline is what turns the seeded snapshot into a nightly-refreshed dataset.

---

## The 10 data categories → sources

| # | Category | Metrics (examples) | Primary public sources | Cadence | API key |
|---|----------|--------------------|------------------------|---------|:---:|
| 1 | Macroeconomic | GDP fc, CPI, consumer & business confidence, industrial production, retail sales, fuel & diesel price, interest rate, EUR FX | Eurostat, ECB, OECD, IMF WEO, national central banks, **EU Weekly Oil Bulletin**, Trading Economics | Daily–Monthly | **No** |
| 2 | Automotive market | PC / LCV / truck / bus regs, EV/PHEV/HEV/SUV/premium/Chinese-OEM regs; parc, avg age, cars/1000 | ACEA, JATO, EAFO, national reg authorities | Monthly / Annual | Mixed |
| 3 | Tire-demand search | winter/summer/all-season/tire-change + brand + competitor terms | Google Trends | Weekly | **No** |
| 4 | Weather | avg temp, anomaly, snowfall fc, snow depth, first frost, snow days, rainfall, heatwave days | **Open-Meteo** (forecast + ERA5 archive) | Daily | **No** |
| 5 | Mobility | congestion, commute time, VKT, freight & truck traffic, border crossings, tourism, airport pax | **Eurostat** (tourism, air pax, freight); TomTom optional for congestion | Weekly / Monthly | **No** for the free stack |
| 6 | EV transition | BEV/PHEV share, charging stations (+growth), EV stock, Tesla & Chinese-EV regs | EAFO, ACEA | Monthly | **No** |
| 7 | Competitive intel | brand search share; brand attention / SoV; web traffic, keyword rank | **Google Trends + Wikimedia Pageviews** (SimilarWeb/Semrush/Ahrefs optional) | Weekly | **No** for the free stack |
| 8 | Pricing intel | prices for key sizes (205/55R16, 225/45R17, 225/40R18, 235/55R19) across 9 brands; ASP, discount depth, promo freq, gap vs Michelin | Oponeo, eMAG, Alza, Pneuboss, local e-tailers | Weekly | No (scrape) |
| 9 | Regulatory | winter-tire law, EV incentives, fleet tax, Chinese-tire tariffs, labeling, environmental | European Commission, national ministries, ACEA | Event-driven | **No** |

**Every implemented collector uses a free, no-key public source** — ECB/Frankfurter,
Eurostat, EU Oil Bulletin, **Open-Meteo**, **Wikimedia Pageviews**. No API keys or
secrets are required anywhere in the pipeline. Google Trends, EAFO and ACEA press
releases are also free and wired as documented pointers.

*Optional paid upgrades* (not required — the free stack already covers the category):
TomTom for a true congestion index; SimilarWeb / Semrush / Ahrefs for exact web-traffic
and SEO figures.

---

## Storage schema

Everything lands in a single long/tidy table so any metric is queried the same way and
new metrics need no migration:

```sql
observations(country, date, category, metric, value, unit, source, ingested_at)
```

See [`data/schema.sql`](data/schema.sql) for the DDL and reporting views
(`latest_by_metric`, `country_metric_yoy`). Collectors also emit CSVs to
`data/out/` so the pipeline works even without a database.

---

## The 8 composite indices

All indices are 0–100, computed from normalised leading indicators. Formulas are shown
on the dashboard's **Leading Indicators** tab and implemented identically in
`market-intel.html` (`indices()`):

| Index | What it predicts | Leading inputs |
|-------|------------------|----------------|
| **Tire Demand Index (TDI)** | Replacement-tire demand | winter/summer search momentum, tire-change search, parc replacement pressure, VKT, winter severity |
| **Premiumization Index (PZI)** | Premium-mix upside | premium & SUV reg mix, consumer confidence, ASP trend, GDP, Michelin search share |
| **EV Opportunity Index (EVI)** | EV-fitment tire demand | BEV+PHEV share, EV reg growth, incentive strength |
| **Winter Severity Index (WSI)** | Winter/all-season pull | temp anomaly, snow days, snowfall vs avg, winter-tire law |
| **Competitive Pressure Index (CPI)** | Rival intensity *(risk)* | competitor search, combined competitor share, discount depth |
| **Chinese Brand Threat Index (CBTI)** | Budget-tier threat *(risk)* | Chinese-brand search, Chinese-OEM share, price gap vs Michelin, tariff cover |
| **Market Growth Score (MGS)** | Volume trajectory | registrations, GDP, retail sales, industrial production |
| **Country Opportunity Score (COS)** | Overall attractiveness | `0.22·TDI + 0.20·PZI + 0.18·MGS + 0.15·EVI + 0.15·WSI + 0.10·(100−CBTI)` |

Markets are re-ranked monthly by COS.

---

## Early-warning system

Fixed thresholds per the brief; each firing links a market to a first action:

- Winter-tire searches **+>30%**
- Snowfall forecast **> seasonal average**
- Michelin search **−>20%**
- Competitor search **+>20%**
- Chinese-tire search **+>25%**
- Fuel prices **+>10%**
- EV registrations **+>20%**
- Premium-vehicle registrations **−>15%**

---

## Running the collectors

Free sources need only Python 3.9+ (standard library — no pip install required):

```bash
cd market-intel/collectors
python3 collect_fx.py        # ECB/Frankfurter EUR rates + YoY   → data/out/fx.csv
python3 collect_eurostat.py  # HICP inflation (Eurostat)         → data/out/eurostat.csv
python3 collect_fuel.py      # EU Weekly Oil Bulletin            → data/out/fuel.csv
python3 collect_weather.py   # temp/snow forecast + anomaly (Open-Meteo) → data/out/weather.csv
python3 collect_mobility.py  # tourism + air pax (Eurostat)      → data/out/mobility.csv
python3 collect_wikipedia.py # brand attention / SoV (Wikimedia) → data/out/wikipedia.csv
python3 run_all.py           # runs every collector, merges      → data/out/observations.csv
```

No API keys or secrets are needed — every collector uses a free public source. See
`collectors/README.md`.

---

## Leading over lagging

Index weights deliberately favour **leading** indicators (search momentum, weather
anomalies, registration mix, EV growth, confidence) over **lagging** ones (parc size,
historical volumes). That is what lets the composite scores move *before* sell-in /
sell-out — the entire point of the system.
