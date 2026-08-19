## 3026 — Maximum Good Subarray Sum

- New id / title / slug: 3026 / Best Subarray Sum With Endpoints k Apart / `best-subarray-sum-with-endpoints-k-apart`
- Old → new API: `maximumSubarraySum` → `bestSubarraySum` (go `bestSubarraySum`, rust `best_subarray_sum`, ts `bestSubarraySum`); parameters `nums`, `k` kept
- Core algorithm / difficulty: prefix sums with a value → min-prefix hash map swept by endpoint / H3 (unchanged)
- Statement rewritten from spec: yes ("good subarray" reframed as a k-apart subarray)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,1,4,1,5], k=2` → 14 (full-length subarray wins); `[-5,-2,-6,-4], k=2` → -10 (all qualifying sums negative); `[7,7,7], k=3` → 0 (none qualify)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The source bundle's public/hidden split is 3/12 (not 3/15 like most) —
  worth knowing the hidden count varies; `check.py` only requires >= 10.
- Generator enumerates the qualifying subarrays alongside the expected value,
  so the statement's "all the k-apart subarrays are ..." claims are printed,
  not remembered.
