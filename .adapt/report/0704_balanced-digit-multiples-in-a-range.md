## 704 — Number of Beautiful Integers in the Range

- New id / title / slug: 704 / Balanced-Digit Multiples in a Range / `balanced-digit-multiples-in-a-range`
- Old → new API: `numberOfBeautifulIntegers` → `countBalancedMultiples` (go `countBalancedMultiples`, rust `count_balanced_multiples`, ts `countBalancedMultiples`); parameters `low`, `high`, `k` kept (conventional)
- Core algorithm / difficulty: digit DP over f(high) − f(low−1) with (pos, tight, started, balance, mod) state / H4 (unchanged)
- Statement rewritten from spec: yes — "beautiful" → "balanced" (equal even/odd digit counts, zeros even)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `20,40,k=4 → 2` (32 and 36 among the multiples of 4), `1,30,k=1 → 11` (divisibility free), `7,7,k=7 → 0` (divisible but single odd digit)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Zero counting as an even digit is load-bearing (30 is balanced) — kept
  explicit in the statement and the guide's leading-zero discussion.
