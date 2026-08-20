## 132 — Maximum Size Subarray Sum Equals k

- New id / title / slug: 132 / Longest Subarray With Sum k / `longest-subarray-with-sum-k`
- Old → new API: `maxSubArrayLen` → `longestSubarrayWithSum` (go `longestSubarrayWithSum`, rust `longest_subarray_with_sum`, ts `longestSubarrayWithSum`)
- Core algorithm / difficulty: prefix sums + first-occurrence hash map, one sweep / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,-2,4,1,-3,5], k = 7` → 6 (whole array via the `{0:-1}` seed), `[3,-1,4], 10` → 0 (unreachable), `[4,-1,2,1,-2,6], 4` → 5 (interior stretch beating shorter ties)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- Naming mirrors the already-adapted `0080_shortest-subarray-to-target`
  (Shortest Subarray To Target) so the subarray-length family stays legible;
  the two differ in exact-vs-at-least target and sign freedom, which the
  titles now mark by "with sum k" vs "to target".
- Parameter `k` kept — the conventional letter for this task.
