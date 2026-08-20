## 314 — K Closest Points to Origin

- New id / title / slug: 314 / Select Nearest Points /
  `select-nearest-points`
- Old → new API: `kClosest` → `selectNearestPoints` (Rust `k_closest` →
  `select_nearest_points`)
- Core algorithm / difficulty: sort by squared Euclidean distance / H2
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes
  - one- and three-point selections use distinct squared distances
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (the coordinate plot encodes source-example data)
- Gates: check ✓; verify ✓ (7/7 solutions, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Independent squared-distance sorting confirms public selections
  `[[-1, 2]]` and `[[2, 2], [1, -4], [0, 5]]`.
- All hidden cases are byte-for-byte unchanged.
