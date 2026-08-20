## 313 — Binary Tree Cameras

- New id / title / slug: 313 / Minimum Tree Monitors /
  `minimum-tree-monitors`
- Old → new API: `minCameraCover` → `minimumTreeMonitors` (Rust
  `min_camera_cover` → `minimum_tree_monitors`)
- Core algorithm / difficulty: three-state postorder greedy / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes
  - asymmetric four-node trees cover both one- and two-monitor optima
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (all three encode the source example shapes)
- Gates: check ✓; verify ✓ (7/7 solutions, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exhaustive evaluation of every monitor subset independently confirms public
  answers `2` and `1`.
- All hidden cases are byte-for-byte unchanged.
