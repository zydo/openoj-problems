## 624 — Count Special Integers

- New id / title / slug: 624 / Count Integers With Distinct Digits / `count-integers-with-distinct-digits`
- Old → new API: `countSpecialNumbers` → `countDistinctDigitNumbers` (go `countDistinctDigitNumbers`, rust `count_distinct_digit_numbers`, ts `countDistinctDigitNumbers`)
- Core algorithm / difficulty: combinatorial count of shorter lengths (9·P(9,k−1)) plus digit walk over n with a used-mask / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=25 → 23`, `n=105 → 94`, `n=1210 → 801` (four-digit walk terminates on a spent digit)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
