## 452 — Cherry Pickup II

- New id / title / slug: 452 / Twin-Robot Cherry Harvest / `twin-robot-cherry-harvest`
- Old → new API: `cherryPickup` → `twinRobotHarvest` (go `twinRobotHarvest`, rust `twin_robot_harvest`, ts `twinRobotHarvest`)
- Core algorithm / difficulty: synchronized two-robot DP over the column pair / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes, for all three figures)
  - `[[4,0,2],[3,6,0],[0,5,3],[5,4,4]]` → 32 (4x3), `[[2,0,0,0,0,0,5],[0,7,0,0,0,2,0],[0,0,9,0,6,0,0],[0,0,0,4,8,0,0],[0,0,3,2,0,0,0]]` → 48 (5x7, both paths cover every non-empty cell)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: all three kept with label edits — grids are `<text>` values; the
  polylines and path shading are the structure. Both new grids were built so
  the drawn robot paths are optimal (checked against the reference DP: 32, 48)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Family: part II of the cherry pair; 0741 adapted in the same chunk as
  `0244_round-trip-cherry-harvest`, so the kinship is
  "…Cherry Harvest" on both

### Notes

- The solution figure draws a *different* robot-2 track from example-1's
  figure (ends column 1 rather than column 2), so the worked grid had to make
  both drawn pairs tied-optimal — achieved by giving cells (3,1) and (3,2)
  equal value and (3,0) a value at least as large, then confirming with the
  reference. Two figures over one example can impose two optimality
  constraints; check both before trusting a label edit.
