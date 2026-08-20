## 778 — Maximize Subarray Sum After Removing All Occurrences of One Element

- New id / title / slug: 778 / Largest Subarray Sum After Purging a Value / `largest-subarray-sum-after-purging-a-value`
- Old → new API: `maxSubarraySum` → `largestSumAfterPurge` (go `largestSumAfterPurge`, rust `largest_sum_after_purge`, ts `largestSumAfterPurge`); parameter `nums` kept
- Core algorithm / difficulty: one Kadane-style sweep with a per-value hash map of smallest adjusted prefixes (deletion accounts), key 0 = plain prefix minimum / H4 (unchanged)
- Statement rewritten from spec: yes (purge step, non-empty guard, best-subarray-over-all-choices restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[-2,5,-4,5,-4,6]` → 16 (purging -4 welds the runs), `[7,2,9]` → 18 (nothing worth purging), `[-6,-6]` → -6 (purging would empty the array)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title keeps the kinship with 0053 (`largest-subarray-sum`, method
  `largestSubarraySum`) — both are Kadane tasks, and the shared prefix reads
  as a family.
- Expected values from `.localonly/wave-g-02/cases_3410.py`: source algorithm
  cross-checked against a brute force that tries every purge candidate and
  runs plain Kadane on the filtered array.
- Writing the statement surfaced a fact worth knowing when picking example 2:
  purging a negative value can never *lower* the best subarray sum, so
  "doing nothing is optimal" only happens when no negative exists or the
  purge is forbidden (all elements equal that value).
