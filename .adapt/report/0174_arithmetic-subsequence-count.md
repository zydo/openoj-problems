## 174 — Arithmetic Slices II - Subsequence

- New id / title / slug: 174 / Arithmetic Subsequence Count / `arithmetic-subsequence-count`
- Old → new API: `numberOfArithmeticSlices` → `countArithmeticSubsequences`
  (go `countArithmeticSubsequences`, rust `count_arithmetic_subsequences`, ts `countArithmeticSubsequences`)
- Core algorithm / difficulty: DP per ending index, hash map keyed by common difference / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,2,3,5,7] → 4` (skipped-element subsequences), `[4,4,4,4] → 5` (gap 0, duplicates), `[0,-2,-4,1,3] → 1` (negative values, negative gap)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- Part I (0413, contiguous) is not adapted yet; the title keeps the generic
  term "Arithmetic" so a later kin can be named "Arithmetic Run Count" or
  similar and the family stays visible.
- Comments in `solution.*` said "slice of length >= 3"; renamed to
  "progression" alongside the API (Go's own `slice` type makes leaving the
  old word doubly confusing there).
- `adapt_gates.py` needs `--source <key>` until the fragment is merged into
  the ledger; the pilot fragments in `.adapt/incoming/` are not consulted.
