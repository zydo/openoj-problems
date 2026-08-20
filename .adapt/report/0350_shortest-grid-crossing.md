## 350 — Shortest Path in Binary Matrix

- New id / title / slug: 350 / Shortest Grid Crossing / `shortest-grid-crossing`
- Old → new API: `shortestPathBinaryMatrix` → `shortestGridCrossing` (go `shortestGridCrossing`, rust `shortest_grid_crossing`, ts `shortestGridCrossing`); parameter `grid` kept
- Core algorithm / difficulty: BFS over open cells with the eight-way neighbourhood, early exit at the far corner / H2 (unchanged)
- Statement rewritten from spec: yes ("clear path" reframed as a crossing that walks between touching open cells)
- Examples newly constructed: yes (structure-preserving: yes — both example figures keep their drawn paths)
  - `[[0,1],[0,0]]` → 2 (figure keeps the single diagonal step; cell (1,0) opens); `[[0,0,0],[0,1,0],[1,1,0]]` → 4 (figure keeps the right-diagonal-down polyline; cell (1,0) opens); `[[0,1,1],[1,1,0],[0,0,0]]` → -1 (sealed start, no figure)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example-1.svg and example-2.svg: one cell value each, header comments, captions reworded; solution-bfs-grid.svg: cell (1,0) grey→white with distance 2 and a d=2 label added, caption rewritten; all path geometry untouched
- Gates: check ✓ (no failures for this key in the tree static run) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Structure preservation here meant opening one blocked cell per figure
  (`(1,0)`), which keeps every drawn arrow and the 4-cell route valid
  while changing the data; the solution figure needed the one BFS
  consequence of that opening — cell (1,0) at distance 2.
- Opening `(1,0)` in example 2 does not shorten the answer: the block at
  `(1,1)`/`(2,0)`/`(2,1)` still forces the long way round, so the figure's
  length-4 caption stays true.
