## 0658 — Find K Closest Elements

- New id / title / slug: 658 / Nearest Sorted Window /
  `nearest-sorted-window`
- Old → new API: `findClosestElements` → `nearestWindow` (go
  `nearestWindow`, rust `nearest_window`, ts `nearestWindow`)
- Core algorithm / difficulty: binary search over fixed-length window starts /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - a mixed-sign window around an interior target; equal distances resolved
    toward duplicate smaller values
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Public expectations were recomputed by sorting all values under the stated
  distance and value tie-break, selecting `k`, then restoring ascending order.
