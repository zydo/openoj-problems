## 286 — Rectangle Area II

- New id / title / slug: 286 / Rectangle Union Area / `rectangle-union-area`
- Old → new API: `rectangleArea` → `rectangleUnionArea` (go `rectangleUnionArea`, rust `rectangle_union_area`, ts `rectangleUnionArea`); parameter `rectangles` kept
- Core algorithm / difficulty: coordinate compression to a cell grid, flag covered cells, sum true areas modulo `10^9 + 7` / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — the new example fits the drawn `[0,3] x [0,3]` grid)
  - `[[0,1,2,3],[1,0,3,2],[2,2,3,3]]` → 8 (one shared unit square, one edge-touching neighbour)
  - `[[0,0,4,1],[1,0,2,4]]` → 7 (a crossing pair)
  - `[[0,0,1000000000,999999999]]` → 56 (modulus visible on its own)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — same axes, same grid lines, same palette and opacity; the three `<rect>` origins and sizes were recomputed for the new example through the mapping the file already documents (`x -> 66 + 57x`, `y -> 206 - 57y`), and the caption rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `return_type` stays `{"kind":"integer","bits":32}` with `comparison: "exact"`,
  which only works because the value is a residue; the statement states the
  modulus explicitly and example 3 exists to make it concrete rather than
  leaving it as a footnote.
- The example figure survives because its geometry is parameterised by a
  documented coordinate mapping in a comment. Any bundle drawing on a labelled
  grid is in the same position: pick a new example inside the drawn window and
  the figure is an arithmetic edit, not a redraw.
- The source's stale literals are `[1,0,2,3]` and `[1,0,3,1]`; `[0,0,2,2]` and
  the `10^9` square are below the gate's three-distinct-character threshold and
  are not tracked. The new rectangles avoid all of them.
