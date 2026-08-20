## 532 — Painting a Grid With Three Different Colors

- New id / title / slug: 532 / Count Proper Grid Colorings / `count-proper-grid-colorings`
- Old → new API: `colorTheGrid` → `countProperGridColorings` (go `countProperGridColorings`, rust `count_proper_grid_colorings`, ts `countProperGridColorings`); parameters `m`, `n` kept (conventional)
- Core algorithm / difficulty: column-state DP over ≤48 legal column colorings with a row-wise-differ compatibility table / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes, within a forced corner (structure-preserving: yes)
  - `(1,1) → 3`, `(1,2) → 6` — the hidden set covers every other small `(m,n)` pair, so these two are the only eye-followable inputs left; the interesting example is new: `(4,4) → 7812` (source used `(5,5) → 580986`)
- Constraints: domain unchanged (`m <= 5`, `n <= 1000`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: kept unchanged (2 of 2 — the 1x1 and 1x2 drawings carry no example-specific labels; my first two examples keep exactly those grids)
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 18/18 cases) check ✓ (per-bundle static)

### Notes

- Overlap gate failure on first run: I had carried the source's image *alt
  text* over verbatim when copying the figure lines. Alt text is prose to the
  shingle scan (and `figures/example-N.svg` path tokens glue neighboring
  words into shared shingles). Rewriting both alt lines dropped the shared
  ratio from 18% to 0% — when reusing a figure, always write a fresh alt
  text, never the source's.
- When the hidden cases saturate all small inputs, corner examples matching
  the source's are unavoidable; the differentiator is the third example and
  all the prose.
