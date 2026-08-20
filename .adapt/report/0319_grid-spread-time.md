## 319 — Rotting Oranges

- New id / title / slug: 319 / Grid Spread Time / `grid-spread-time`
- Old → new API: `orangesRotting` → `gridSpreadTime` (go `gridSpreadTime`, rust
  `grid_spread_time`, ts `gridSpreadTime`); parameter `grid` kept (conventional)
- Core algorithm / difficulty: multi-source BFS over a grid / H2 (unchanged)
- Statement rewritten from spec: yes — the produce scenario is gone; cells are
  blocked / waiting / reached, which is what the computation actually is
- Examples newly constructed: yes (structure-preserving: yes for the solution
  figure — still `3 x 3`)
  - `[[1,1,1],[1,0,1],[2,1,0]] → 5` (one source, the spread snakes around a
    blocked cell), `[[2,1,0],[1,0,1],[0,1,1]] → -1`, `[[2,0],[0,2]] → 0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** for the solution figure, renamed
  `solution-rot-bfs.svg` → `solution-spread-bfs.svg`; `example-1.svg` dropped
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- **A grid figure can survive if it draws one grid rather than a filmstrip.**
  `solution-rot-bfs.svg` draws all nine cells with their digit as a text node
  and the per-cell arrival stamp as a second text node, so re-aiming it at a
  new `3 x 3` example was a pure text edit — the only attribute touched was the
  fill of the seeded cell, which moved from the top left to the bottom left.
  `example-1.svg` instead drew five snapshots as *presence or absence of
  circles*, which is geometry, so it was dropped. Worth generalising: filmstrip
  figures die, single-frame annotated grids live.
- The source figure put its two caption lines at `y=40` and `y=58`, and the
  top row's `t=` stamps also sit at `y=58` — they overprint in the live bundle.
  The adapted figure moves the caption to `y=24`/`y=42`. Same defect class the
  0053 renderer found; a sweep of the live figures for caption collisions would
  pay.
- Comments in `solution.*` were re-termed along with the API (`fresh` →
  `pending`, `minutes` → `rounds`, orange/rotten vocabulary out) per the
  ADAPT artifact table. The protocol's "do not otherwise edit" line reads as
  forbidding this; the two should be reconciled — leaving `fresh oranges` in
  seven reference solutions would strand the old framing in the tab readers
  actually open.
