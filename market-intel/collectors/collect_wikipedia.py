#!/usr/bin/env python3
"""Category 7 (competitive) — free, no-key replacement for SimilarWeb / Semrush / Ahrefs.

Paid web-traffic/SEO tools have no free API. The freely available public attention
proxy is the Wikimedia Pageviews API (free, keyless): monthly article pageviews are
a decent stand-in for brand interest / share of voice, alongside Google Trends.

We pull last-month pageviews for each tire brand's English Wikipedia article and
compute a Michelin share of voice across the premium basket. Signal is aggregate
(country="EU"), not per-market — that granularity comes from Google Trends.

Note: the Wikimedia API rate-limits shared IPs (HTTP 429); the collector retries
and skips cleanly, so it never breaks the pipeline. Runs fine from a normal IP / CI.
"""
from __future__ import annotations
from _common import get_json, obs, write_csv
from datetime import date

API = ("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/"
       "en.wikipedia/all-access/all-agents/{article}/monthly/{start}/{end}")
UA = "michelin-mi/1.0 (market-intelligence; contact via repo)"

BRANDS = {
    "michelin": "Michelin",
    "continental": "Continental_AG",
    "goodyear": "Goodyear_Tire_and_Rubber_Company",
    "bridgestone": "Bridgestone",
}


def _last_full_month():
    first_this = date.today().replace(day=1)
    end_prev = first_this
    start_prev = (first_this.replace(year=first_this.year - (first_this.month == 1),
                                     month=12 if first_this.month == 1 else first_this.month - 1))
    return start_prev.strftime("%Y%m01"), end_prev.strftime("%Y%m01")


def run():
    start, end = _last_full_month()
    as_of = date.today().isoformat()
    views, rows = {}, []
    for key, article in BRANDS.items():
        try:
            js = get_json(API.format(article=article, start=start, end=end), ua=UA)
            v = js["items"][-1]["views"] if js.get("items") else None
            if v is not None:
                views[key] = v
                rows.append(obs("EU", as_of, "competitive", f"wiki_pageviews_{key}",
                                v, "count", "wikimedia"))
        except Exception as e:
            print(f"  [warn] {article}: {e}")

    total = sum(views.values())
    if total and "michelin" in views:
        share = round(views["michelin"] / total * 100, 1)
        rows.append(obs("EU", as_of, "competitive", "michelin_attention_sov",
                        share, "pct", "wikimedia"))
        print(f"  Michelin attention share of voice: {share}% (of {len(views)} brands)")
    else:
        print("  no pageview data (likely rate-limited on this IP) — skipped cleanly")

    write_csv(rows, "wikipedia.csv")
    return rows


if __name__ == "__main__":
    print("collect_wikipedia: brand attention / SoV (Wikimedia Pageviews, free)")
    run()
