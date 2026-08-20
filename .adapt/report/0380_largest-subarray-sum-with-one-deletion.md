## 380 — Maximum Subarray Sum with One Deletion

- New id / title / slug: 380 / Largest Subarray Sum with One Deletion / `largest-subarray-sum-with-one-deletion`
- Old → new API: `maximumSum` → `largestSumWithDeletion` (go `largestSumWithDeletion`, rust `largest_sum_with_deletion`, ts `largestSumWithDeletion`); parameter `arr` kept
- Core algorithm / difficulty: two-state Kadane (no-deletion / one-deletion rolling maxima) / H3 (unchanged)
- Statement rewritten from spec: yes ("delete" reframed as crossing out at most one element of a chosen stretch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,-6,3,4]` → 9 (crossing-out used); `[-2,7,-1,3]` → 10 (crossing-out unused — plain `[7,3]` wins); `[-4,-2,-7]` → -2 (all negative, one-element stretch may not be emptied)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Title keeps the 0053 family phrase "Largest Subarray Sum"; only "Maximum"
  became "Largest", so the sibling stays recognizable next to
  `0023_largest-subarray-sum`.
- Example 2 doubles as the observation that a deletion at a stretch's edge is
  never optimal (just shorten the stretch), which the solutions.md trace uses.
