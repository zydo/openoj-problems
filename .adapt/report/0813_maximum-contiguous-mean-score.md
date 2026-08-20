## 0813 — Largest Sum of Averages

- New id / title / slug: 813 / Maximum Contiguous Mean Score /
  `maximum-contiguous-mean-score`
- Old → new API: `largestSumOfAverages` → `maximumContiguousMeanScore` (Go
  and TypeScript `maximumContiguousMeanScore`, Rust
  `largest_sum_of_averages` → `maximum_contiguous_mean_score`)
- Core algorithm / difficulty: prefix sums with suffix partition dynamic
  programming / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh arrays exercise a fractional three-group optimum and an integral
    two-group optimum
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 19/19 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exact-rational dynamic programming independently confirms public scores
  `62/3` and `16`.
- The 17 hidden cases are data-identical to the source corpus.
