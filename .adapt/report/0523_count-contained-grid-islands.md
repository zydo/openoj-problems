## 523 — Count Sub Islands

- New id / title / slug: 523 / Count Contained Grid Islands / `count-contained-grid-islands`
- Old → new API: `countSubIslands` → `countContainedGridIslands` (go `countContainedGridIslands`, rust `count_contained_grid_islands`, ts `countContainedGridIslands`); parameters `grid1`, `grid2` kept (conventional, family-consistent with 0200's `grid`)
- Core algorithm / difficulty: stack flood fill per `grid2` island with a per-cell `grid1`-land test, `is_sub` → `is_contained` flag / H2 (unchanged)
- Statement rewritten from spec: yes — "sub-island" becomes "contained", defined by coverage from a single `grid1` island; island definition rephrased (edge-to-edge land cells)
- Examples newly constructed: yes (structure-preserving: yes — both 5×5 like the figures)
  - A → 3 (three contained islands: the five-cell upper-left, the four-cell lower-left, and a lone cell; the cell at (2,4) fails), B → 2 (a sparser pair of grids)
- Constraints: domain unchanged (m, n ≤ 500, binary), presentation rewritten ("two grids share the same dimensions" instead of length-equation lines)
- Skeletons regenerated: all 7
- Figures: regenerated — the three SVGs (example-1, example-2, solution-sub-island-check) keep their coordinates; cell fills, X marks, legend wording, and captions were rewritten to the new grids by a scratch script that also re-derives containment independently and diffs every fill against the expected color (50/50 cells, zero mismatches, all three figures)
- Family: `islands` — 0200 `count-grid-islands`, 0305 `count-grid-islands-land-updates`, 0827 `largest-island-after-one-flip`; title follows the "… Grid Islands" family pattern
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The figures encode data in fill colors, so "label edit" was not enough;
  a scratch regenerator under `.localonly/wave-b-01/pub_1905.py` rebuilds
  fills/X-marks/captions from the new matrices. Worth generalizing if
  more matrix-family figures show up in later waves.
- Second overlap failure of the wave, different mechanism: identical
  `![Example 1 grids](figures/example-1.svg)` alt text before `### Example 2`
  forms shared shingles across the figure path — renamed alts break it.
  Same for `m == grid1.length == grid2.length` constraint runs.
- Hand-counting connectivity cost one iteration: (3,1)-(4,1) were
  vertically adjacent in my first draft, merging two intended islands;
  the reference answer disagreed with my explanation and settled it.
