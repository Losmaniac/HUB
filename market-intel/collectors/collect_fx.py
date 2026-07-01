#!/usr/bin/env python3
"""Category 1 (macro) — EUR exchange rates + YoY change.

Source: ECB reference rates via Frankfurter (free, no key).
A weaker local currency vs EUR raises the import cost of tires (priced in EUR/USD)
and pressures consumer purchasing power — a genuine leading pricing signal.

Floating currencies (PLN, CZK, HUF, RON) are fetched live. BAM is pegged
(1.95583/EUR); RSD/MDL are managed floats (public NCB series would slot in here);
euro-area markets are 1.0 by definition.
"""
from __future__ import annotations
from _common import COUNTRIES, get_json, obs, write_csv, one_year_ago
from datetime import date

FRANKFURTER = "https://api.frankfurter.dev/v1"
FLOATING = {"PL": "PLN", "CZ": "CZK", "HU": "HUF", "RO": "RON"}
PEGGED = {"BA": ("BAM", 1.95583)}  # KM pegged to EUR


def run():
    today = date.today().isoformat()
    syms = ",".join(FLOATING.values())
    rows = []
    try:
        latest = get_json(f"{FRANKFURTER}/latest?base=EUR&symbols={syms}")
        ago = get_json(f"{FRANKFURTER}/{one_year_ago(today)}?base=EUR&symbols={syms}")
        as_of = latest.get("date", today)
        for cc, sym in FLOATING.items():
            now, then = latest["rates"].get(sym), ago["rates"].get(sym)
            if now is None:
                continue
            rows.append(obs(cc, as_of, "macro", f"fx_eur_{sym.lower()}", round(now, 4),
                            "eur_local", "ecb_frankfurter"))
            if then:
                yoy = round((now / then - 1) * 100, 1)  # + => local currency weaker
                rows.append(obs(cc, as_of, "macro", "fx_eur_yoy", yoy, "pct",
                                "ecb_frankfurter"))
    except Exception as e:  # keep the pipeline resilient
        print(f"  [warn] live FX fetch failed ({e}); emitting pegged/euro rows only")
        as_of = today

    for cc, (sym, rate) in PEGGED.items():
        rows.append(obs(cc, as_of, "macro", f"fx_eur_{sym.lower()}", rate,
                        "eur_local", "central_bank_peg"))
        rows.append(obs(cc, as_of, "macro", "fx_eur_yoy", 0.0, "pct", "central_bank_peg"))
    for cc, (_, ccy, euro) in COUNTRIES.items():
        if euro:
            rows.append(obs(cc, as_of, "macro", "fx_eur_eur", 1.0, "eur_local", "eurozone"))

    write_csv(rows, "fx.csv")
    return rows


if __name__ == "__main__":
    print("collect_fx: EUR exchange rates (ECB via Frankfurter)")
    run()
