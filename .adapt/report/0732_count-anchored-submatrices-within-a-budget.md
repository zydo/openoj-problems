## 732 — Count Submatrices with Top-Left Element and Sum Less Than k

- New id / title / slug: 732 / Count Anchored Submatrices Within a Budget / `count-anchored-submatrices-within-a-budget`
- Old → new API: `countSubmatrices` → `countAnchored` (go `countAnchored`, rust `count_anchored`, ts `countAnchored`); parameters `grid`, `k` kept
- Core algorithm / difficulty: running column sums with an early row break / H2 (unchanged)
- Statement rewritten from spec: yes ("submatrices that contain the top-left element" reframed as anchored rectangles under a budget)
- Examples newly constructed: yes (structure-preserving: yes, both figures)
  - `[[2,5,1],[4,3,2]], k=12` → 4 (same 2x3 shape and same qualifying panel set 1x1/1x2/1x3/2x1); `[[3,1,4],[2,6,1],[5,0,2]], k=15` → 6 (same 3x3 shape, same qualifying 1x1..3x1 panels); `[[6,1],[1,1]], k=8` → 3 (no figure — whole-grid miss by one)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — both SVGs: all cell values, k, per-panel sums, header comments, and captions; grid geometry, panel layout, and blue highlights untouched (the qualifying panel sets were preserved by construction)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after rewriting both captions)
- Sandbox: function kind, deferred to batch run

### Notes

- Second overlap lesson of the wave, sharpened: caption templates like
  "of sizes 1x1, 1x2, 1x3 and 2x1, with sums ..." are 7-word matches with the
  digits stripped, and the shingle window even runs across a caption's
  `](figures/example-N.svg)` tail into the next `### Example` heading and the
  following caption's opening words. Captions need their own sentence shapes,
  not just new numbers.
- Example values were chosen by requiring the new grid to reproduce the exact
  qualifying-panel set of the old one (verified before editing: qualifying
  lists printed by the generator), so both figures kept their highlight
  geometry.
