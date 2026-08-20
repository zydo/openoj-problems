## 445 — Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

- New id / title / slug: 445 / Longest Run With Bounded Spread / `longest-run-with-bounded-spread`
- Old → new API: `longestSubarray` → `longestRunWithBoundedSpread` (go `longestRunWithBoundedSpread`, rust `longest_run_with_bounded_spread`, ts `longestRunWithBoundedSpread`); parameters `nums`, `limit` kept
- Core algorithm / difficulty: two-pointer window with max/min monotonic deques / H3 (unchanged)
- Statement rewritten from spec: yes — "no two values differ by more than limit" stated as the pairwise rule; the extremes collapse is left to the hints
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,7,2,5], limit=5 → 4` (whole array), `[20,31,32,30,34,5,6], limit=4 → 4` (winning run in the middle), `[7,7,9,9,9,7], limit=0 → 3` (zero tolerance); no overlap with hidden cases
- Constraints: domain unchanged, presentation unchanged numbers
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Two hidden cases reuse the source Example 1 array `[8,2,4,7]` (with limits
  5 and 7), so that array is doubly off-limits: it is both a stale literal and
  a hidden input.
