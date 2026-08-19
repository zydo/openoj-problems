## 0576 — Out of Boundary Paths

- New id / title / slug: 576 / Grid Exit Walk Count / `grid-exit-walk-count`
- Old → new API: `findPaths` → `countExitWalks` (go `countExitWalks`, rust
  `count_exit_walks`, ts `countExitWalks`)
- Core algorithm / difficulty: layer-by-layer grid path counting / H3
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no)
  - a start on the long edge of a 2 by 3 grid; the middle of a single-column
    grid
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Both source figures explicitly enumerate the old grids' exit walks. The new
  examples use different dimensions and starts, so retaining either drawing
  would misrepresent the data; both are deferred to the selective redraw pass.
- Public expectations were recomputed from the layered recurrence.
