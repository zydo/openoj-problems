## 1162 — As Far from Land as Possible

- New id / title / slug: 1162 / Greatest Distance to Land /
  `greatest-distance-to-land`
- Old → new API: `maxDistance` → `greatestDistanceToLand`
  (go `greatestDistanceToLand`, rust `greatest_distance_to_land`,
  ts `greatestDistanceToLand`); parameter `grid` kept
- Core algorithm / difficulty: multi-source BFS from all land cells /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both stay
  3 x 3 grids, one and two farthest cells)
  - `[[1,0,1],[0,0,0],[1,0,0]]` → 2 (land in three corners), `[[0,1,0],...]
    → 3 (single land cell, bottom corners farthest)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — all three SVGs redrawn for the new data by a
  renderer recovering the original layout rules (52px example cells at
  (36,26) pitch 52, land `#d9dee4` / farthest `#e8edfb` + `#4169E1` stroke,
  dashed leader + legend; solution figure 60px cells at (100,66) pitch 64
  with d=N labels). Land/water vocabulary kept (generic map terms).
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- Grid figures are fill-encoded, not label-encoded: changing which cells are
  land changes the fills, so "labels updated" was impossible. The layout,
  however, is a deterministic function of the grid (fixed pitch, fills,
  legend), so the figures were re-emitted rather than dropped —
  `scripts/adapt_figures.py` has no grid-map renderer; mine lives in
  `.localonly/wave-d-03/gen1162*.py`.
- The source solution figure had water cells labeled `1` (looks like a
  drafting slip — water is 0); the regenerated one labels them correctly.
- Example 1 has two farthest cells (1,1) and (2,2); the figure highlights
  both and the caption names both.
