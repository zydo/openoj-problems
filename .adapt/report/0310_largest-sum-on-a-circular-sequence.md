## 310 — Maximum Sum Circular Subarray

- New id / title / slug: 310 / Largest Sum on a Circular Sequence /
  `largest-sum-on-a-circular-sequence`
- Old → new API: `maxSubarraySumCircular` → `largestCircularSegmentSum`
  (Rust `max_subarray_sum_circular` → `largest_circular_segment_sum`)
- Core algorithm / difficulty: simultaneous maximum/minimum Kadane passes / H3
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes
  - ordinary, boundary-crossing and all-negative optima are represented
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 17/17 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Brute-force enumeration of every circular start and length independently
  confirms public answers `8`, `10` and `-3`.
- All hidden cases are byte-for-byte unchanged.
