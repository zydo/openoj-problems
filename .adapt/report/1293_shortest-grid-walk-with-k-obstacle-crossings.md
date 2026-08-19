## 1293 — Shortest Path in a Grid with Obstacles Elimination

- New id / title / slug: 1293 / Shortest Grid Walk with k Obstacle Crossings / `shortest-grid-walk-with-k-obstacle-crossings`
- Old → new API: `shortestPath` → `shortestWalk` (go `shortestWalk`, rust `shortest_walk`, ts `shortestWalk`); parameters `grid`, `k` kept
- Core algorithm / difficulty: BFS over (row, col, remaining-crossings) states with the k ≥ m+n−2 shortcut / H3 (unchanged)
- Statement rewritten from spec: yes ("eliminate obstacles" becomes spending one of k crossings)
- Examples newly constructed: yes (structure-preserving: no — regenerated, see figures)
  - 5×4 `[[0,0,0,0],[1,1,1,0],[0,0,0,0],[0,1,1,1],[0,0,0,0]]` k=1 → 7 (staggered walls; 13 without a crossing); 3×4 two full-height walls k=1 → -1; 4×4 `[[0,1,1,0],[1,1,0,1],[0,1,1,1],[1,1,1,0]]` k=6 → 6 (k covers a monotone route)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — all three (`example-1`, `example-2`, `solution-obstacle-path`) re-emitted from the originals' coordinate rules (56/64/52 px pitches, brick pattern for 1s, polyline through cell centers). Structure preservation was impossible: a 5×3 grid whose optimal walk runs down one column crossing exactly one obstacle at (3,2) *is* the source's data — the two staggered walls force it — so example 1 moved to 5×4 with fresh walls (gaps at col 3 / col 0). Renders eyeballed via rsvg-convert + image analysis: grid shapes, obstacles, walks, X/circle markers, and captions all read back correctly
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Binary grids are the extreme case of geometry-as-data: keeping the drawn
  structure means keeping the drawn bits. When the example's *point* is a
  specific obstacle layout, size and walls must change together — a label
  edit cannot produce a new example. Regeneration from the pitch formula was
  cheap and is the honest record.
- Hand-derived no-crossing walk for example 1 was 12; the reference says 13
  (a Manhattan leg was miscounted). Script-first, again.
