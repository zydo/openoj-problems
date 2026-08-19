## 1191 — K-Concatenation Maximum Sum

- New id / title / slug: 1191 / Largest Subarray Sum in the Repeated Array / `largest-subarray-sum-in-the-repeated-array`
- Old → new API: `kConcatenationMaxSum` → `largestRepeatedSum` (go `largestRepeatedSum`, rust `largest_repeated_sum`, ts `largestRepeatedSum`); parameters `arr`, `k` kept
- Core algorithm / difficulty: clamped Kadane over two copies plus `best_suffix + best_prefix + (k-2)·total` when total > 0, modulo applied last / H3 (unchanged)
- Statement rewritten from spec: yes ("k-concatenation" restated as writing the array out back to back k times)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,3] k=4` → 20 (all positive, whole array); `[3,-4,6] k=3` → 16 (tail + full copy + head spans copies); `[-3,-1,-2] k=6` → 0 (empty stretch floor)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Parameter rename `arr` → `values` was considered and rejected: `values`
  is already the inner helper's parameter in the py/js/ts solutions
  (PROTOCOL step 3 trap), so `arr` stays.
- Family phrase "Largest Subarray Sum" continues from 0053 and today's 1186.
