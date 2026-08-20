## 415 — Matrix Block Sum

- New id / title / slug: 415 / Grid Neighborhood Sums / `grid-neighborhood-sums`
- Old → new API: `matrixBlockSum` → `gridNeighborhoodSums` (go `gridNeighborhoodSums`, rust `grid_neighborhood_sums`, ts `gridNeighborhoodSums`); parameter `mat` → `grid` (kept `k`)
- Core algorithm / difficulty: 2-D prefix-sum table, clipped square window as four lookups / H2 (unchanged)
- Statement rewritten from spec: yes ("block sum" reframed as summing each cell's radius-k neighborhood, truncated at the borders)
- Examples newly constructed: yes (structure-preserving: yes, the solution figure)
  - `[[12,3,7],[5,20,1],[9,4,15]], k=1` (square, borders clip) — also the figure's grid; `[[2,6,1,4],[8,3,5,7]], k=2` (wide, ends miss one column); `[[7,2],[1,9],[6,4],[3,8]], k=1` (tall, row-pair sums)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `solution-block-sum.svg` renamed to `solution-neighborhood-query.svg` (old name carried "block sum"); 3×3 grid geometry, blue window frame, and dashed strip kept, all nine cell values replaced, highlight moved to the actual query center (1,0), caption rewritten with the new numbers (window 53, total 76, strip 23)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The source figure highlighted cell (1,1) while its caption discussed the
  query at (1,0); the highlight was moved to (1,0) so the adapted figure is
  self-consistent. Pure fill/attribute edit, geometry untouched.
- Parameter rename `mat` → `grid` is safe: no source solution declares a
  local named `grid` (the word appears only inside comments).
