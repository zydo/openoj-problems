## 31 — Maximal Rectangle

- New id / title / slug: 31 / Largest Ones Rectangle / `largest-ones-rectangle`
- Old → new API: `maximalRectangle` → `largestOnesRectangle` (go `largestOnesRectangle`, rust `largest_ones_rectangle`, ts `largestOnesRectangle`); parameter `matrix` kept
- Core algorithm / difficulty: per-row running skyline + monotonic stack per row / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — 4x5 grid, winning 2x3 block at rows 1-2, cols 2-4, both figures kept)
  - new 4x5 grid → 6; `[["0","1"],["1","0"]]` → 1 (no adjacent '1's); `[["1","1"],["1","1"]]` → 4 (full fill)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — `example-1.svg`: 20 cell `<text>` nodes (geometry = grid, contents = text). `solution-row-histograms.svg`: the drawn '1' cells plus the four "row k heights: […]" strings; the winning-rectangle bracket annotation ("min 2 x width 3 = 6") stays true for the new data because the new row-2 skyline `[0,1,2,3,2]` has the same min-2-over-3-columns structure — same digit counts, so alignment holds.
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- The new grid was designed around the figures, not just their size: the
  winning block had to sit at rows 1-2/cols 2-4 (both figures' highlight
  geometry) *and* row 2's skyline needed min 2 over cols 2-4 so the
  solution figure's bracket caption survives verbatim.
- Contrary to the family note in ADAPT.md ("grid contents encode the data
  structurally"), this grid family is text-node-driven — only the *grid
  dimensions* are geometry. One-column shifts in wording ("skyline" instead
  of "histogram") also let 0084 and 0085's prose agree with each other.
- Verified by construction that the maximal block is unique (a tie would
  make the highlighted figure one of several winners).
