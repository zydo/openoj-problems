## 1425 — Constrained Subsequence Sum

- New id / title / slug: 1425 / Bounded Gap Subsequence Sum / `bounded-gap-subsequence-sum`
- Old → new API: `constrainedSubsetSum` → `boundedGapSubsequenceSum` (go `boundedGapSubsequenceSum`, rust `bounded_gap_subsequence_sum`, ts `boundedGapSubsequenceSum`); parameters `nums`, `k` kept
- Core algorithm / difficulty: DP over pick-end positions with a monotonic deque for the window max / H3 (unchanged)
- Statement rewritten from spec: yes — the rule is stated as "never jump further than k indices between chosen positions" with skipped elements explicitly free, replacing the source's subsequence-definition boilerplate
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[8,3,-9,4,15], k=2 → 30` (bridging required), `[4,-6,9], k=3 → 13` (k ≥ n, skip freely), `[-4,-7,-2], k=1 → -2` (all negative); no overlap with hidden cases
- Constraints: domain unchanged, presentation kept as source already used `10^5` / `10^4`
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Source example 2's `[-1,-2,-3]` is an identifying literal for the stale gate
  (the minus sign counts as a character), so all-negative examples need fresh
  values too, not just fresh order.
