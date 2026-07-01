-- Michelin x Inter Cars — CEE/SEE Market Intelligence
-- Storage schema. One tidy/long observation table so every metric — macro,
-- registrations, search, weather, mobility, pricing, regulatory — is stored and
-- queried the same way, and new metrics never require a migration.
--
-- Dialect: portable SQL (tested against SQLite; works on Postgres with minor
-- type tweaks). Collectors also emit the same shape as CSV to data/out/.

CREATE TABLE IF NOT EXISTS observations (
    country      TEXT    NOT NULL,          -- ISO-2 (PL, CZ, SK, HU, RO, BG, HR, SI, GR, BA, RS, MD, LT, LV, EE)
    date         TEXT    NOT NULL,          -- ISO-8601 (YYYY-MM-DD); week/month use the period start
    category     TEXT    NOT NULL,          -- macro | automotive | search | weather | mobility | ev | competitive | pricing | regulatory
    metric       TEXT    NOT NULL,          -- e.g. gdp_growth_fc, cpi, fuel_petrol, car_reg_yoy, trends_winter_tires
    value        REAL,                      -- numeric value (NULL allowed for qualitative regulatory events)
    unit         TEXT,                      -- pct | index | eur_per_l | eur_local | count | days | celsius | text
    source       TEXT    NOT NULL,          -- eurostat | ecb | imf | eu_oil_bulletin | acea | eafo | google_trends | ...
    ingested_at  TEXT    NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (country, date, category, metric, source)
);

CREATE INDEX IF NOT EXISTS ix_obs_metric  ON observations (metric, country, date);
CREATE INDEX IF NOT EXISTS ix_obs_country ON observations (country, date);
CREATE INDEX IF NOT EXISTS ix_obs_cat     ON observations (category, date);

-- Qualitative regulatory timeline (winter-tire law changes, EV incentives,
-- Chinese-tire tariffs, labeling, environmental rules). Feeds category 9.
CREATE TABLE IF NOT EXISTS regulatory_events (
    country      TEXT NOT NULL,
    date         TEXT NOT NULL,
    topic        TEXT NOT NULL,             -- winter_tire | ev_incentive | fleet_tax | china_tariff | labeling | environmental
    change       TEXT NOT NULL,             -- human-readable description of the change
    impact       TEXT,                      -- expected direction for tire demand / mix
    source       TEXT NOT NULL,
    ingested_at  TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Latest value per country/metric (drives the dashboard snapshot).
CREATE VIEW IF NOT EXISTS latest_by_metric AS
SELECT o.country, o.category, o.metric, o.value, o.unit, o.source, o.date
FROM observations o
JOIN (
    SELECT country, metric, MAX(date) AS mx
    FROM observations GROUP BY country, metric
) m ON m.country = o.country AND m.metric = o.metric AND m.mx = o.date;

-- Year-on-year change per country/metric — the core "leading" transform used by
-- the early-warning rules (winter searches +>30%, fuel +>10%, EV regs +>20%, ...).
CREATE VIEW IF NOT EXISTS country_metric_yoy AS
SELECT cur.country, cur.metric, cur.date AS cur_date, cur.value AS cur_value,
       prv.value AS prev_value,
       ROUND((cur.value / NULLIF(prv.value, 0) - 1) * 100.0, 1) AS yoy_pct
FROM observations cur
JOIN observations prv
  ON prv.country = cur.country
 AND prv.metric  = cur.metric
 AND prv.date    = date(cur.date, '-1 year');
