## 800 — Count Beautiful Numbers

- New id / title / slug: 800 / Digit Sum Divides Digit Product / `digit-sum-divides-digit-product`
- Old → new API: `beautifulNumbers` → `countSumDividesProduct` (go `countSumDividesProduct`, rust `count_sum_divides_product`, ts `countSumDividesProduct`); parameters `l`, `r` kept as conventional identifiers
- Core algorithm / difficulty: digit DP over (position, tight, started, digit sum, digit product), range split into two prefix counts / H4 (unchanged)
- Statement rewritten from spec: yes (the "beautiful" adjective is dropped; the rule is named by what it says)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `l=21 r=30` (equality case + zero-digit case), `l=36 r=45` (three distinct qualifiers), `l=5 r=25` (crosses the one-digit boundary)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values computed with the adapted `solution.py` and cross-checked
  against a direct per-integer check of the digit rule (all matched).
- No bracket-array literals in the source statement, so the stale-literal rule
  imposed no constraint on example values here — only the old title/slug/method
  had to stay out.
