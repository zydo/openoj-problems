## 3381 — Maximum Subarray Sum With Length Divisible by K

- New id / title / slug: 3381 / Largest Subarray Sum with Length a Multiple of K / `largest-subarray-sum-with-length-a-multiple-of-k`
- Old → new API: `maxSubarraySum` → `largestKMultipleSum` (go `largestKMultipleSum`, rust `largest_k_multiple_sum`, ts `largestKMultipleSum`); parameters `nums`, `k` kept
- Core algorithm / difficulty: prefix sums bucketed by index mod k, per-class best difference of later minus earlier-minimum / H3 (unchanged)
- Statement rewritten from spec: yes (title stays in the house "Largest Subarray Sum ..." family of 0053/1186/1191/3410; "stretch" replaces "subarray" in prose)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,-1,4,-2,5] k=2` → 6 (best stretch excludes an end), `[-2,-3,-1,-4] k=3` → -6 (all negative), `[4,-7,6] k=3` → 3 (k = n, only the full array qualifies)
  - Brute-force verified (`.localonly/wave-g-01/exp_3381.py`)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Method name follows the family convention (`largestSumWithDeletion`,
  `largestRepeatedSum`, `largestSumAfterPurge` → `largestKMultipleSum`).
