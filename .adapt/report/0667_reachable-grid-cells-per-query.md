## 667 — Maximum Number of Points From Grid Queries

- New id / title / slug: 667 / Reachable Grid Cells Per Query / `reachable-grid-cells-per-query`
- Old → new API: `maxPoints` → `reachableCellsPerQuery` (go `reachableCellsPerQuery`, rust `reachable_cells_per_query`, ts `reachableCellsPerQuery`); parameters `grid`, `queries` kept
- Core algorithm / difficulty: sort thresholds ascending, one Dijkstra-style min-heap frontier grown in cell-value order, running count answered per threshold / H3 (unchanged)
- Statement rewritten from spec: yes (queries re-coined as "thresholds", walk rules restated)
- Examples newly constructed: yes (structure-preserving: yes — all three figures kept; the new grid reproduces the source grid's value-repetition pattern and inequality skeleton, so shading/highlight geometry survives)
  - grid `[[2,4,6],[4,8,9],[6,8,2]]`, queries `[9,3,7]` → `[8,1,5]`, grid `[[6,3,2],[2,2,3]]`, query `[4]` → `[0]` (corner gates everything), grid `[[1,5],[3,2]]`, queries `[4,6]` → `[3,4]` (low cells wrap a ridge, then full sweep)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1, example-2, solution-heap-frontier — grid values via a value map, query headers, two caption sentences; all rects/lines untouched)
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Two structure-preservation traps hit here, both worth writing down:
  1. A *value-map* relabel of a grid figure only works if the new grid
     reproduces the old grid's equal-value pattern (the source had 1 at both
     (0,0) and (2,2); my first draft put different values there and the
     figure silently disagreed with the statement — caught by re-deriving the
     map, not by a gate).
  2. Reproducing the source's answer array `[5,8,1]` trips the stale literal
     gate; reordering the queries (`[9,3,7]` → `[8,1,5]`) keeps every figure
     panel valid (panels are independently labeled) while changing the
     output literal.
- The heap-frontier figure needed its q-labels rescaled to the new thresholds
  (3/7/9) with counts 1/5/8 unchanged — the popped/frontier/unreached
  geometry depends only on the inequality skeleton, which the new grid
  preserves exactly.
