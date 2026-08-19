## 3165 — Maximum Sum of Subsequence With Non-adjacent Elements

- New id / title / slug: 3165 / Non-Adjacent Sum Under Point Updates / `non-adjacent-sum-under-point-updates`
- Old → new API: `maximumSumSubsequence` → `nonAdjacentSum` (go `nonAdjacentSum`, rust `non_adjacent_sum`, ts `nonAdjacentSum`); parameters `nums`, `queries` kept
- Core algorithm / difficulty: segment tree whose nodes carry 2×2 boundary-picked matrices, point update + root max per query / H4 (unchanged)
- Statement rewritten from spec: yes (queries framed as in-order point updates; "house robber" never named)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,6,2,7]` with two updates → 19, `[-4,-6]` one update → 0 (empty selection), `[5,1,5]` three updates on one position → 30
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Expected values computed by the source reference and cross-checked against an independent `take/skip` brute force before being trusted (my hand total for example 3 was wrong; the script was right).
