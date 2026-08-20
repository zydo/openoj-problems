## 86 — Kth Smallest Subarray Sum

- New id / title / slug: 86 / Kth Least Subarray Sum / `kth-least-subarray-sum`
- Old → new API: `kthSmallestSubarraySum` → `kthLeastSubarraySum` (go `kthLeastSubarraySum`, rust `kth_least_subarray_sum`, ts `kthLeastSubarraySum`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: binary search on the answer over `[min, sum]` with a sliding-window counting predicate / H3 (unchanged)
- Statement rewritten from spec: yes — subarrays called contiguous runs, the 1-indexed rank restated as "entry at position k of the sorted list"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,1,4], k=4 → 4` (tie between two 4s), `[2,2,5], k=5 → 7`, `[4,6], k=3 → 10` (whole-array edge); brute-force verified
- Constraints: domain unchanged (n ≤ 2·10⁴, values ≤ 5·10⁴, k ≤ n(n+1)/2), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- "smallest" → "least" plus "subarray" → "run" carried through method,
  title, and exposition; the enumeration explanations list runs rather
  than bracket subarrays.
