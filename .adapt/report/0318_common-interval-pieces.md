## 318 — Interval List Intersections

- New id / title / slug: 318 / Common Interval Pieces / `common-interval-pieces`
- Old → new API: `intervalIntersection` → `commonIntervalPieces` (go
  `commonIntervalPieces`, rust `common_interval_pieces`, ts
  `commonIntervalPieces`); parameters `firstList` → `rangesA`, `secondList` →
  `rangesB`
- Core algorithm / difficulty: two-pointer merge sweep over two sorted disjoint
  interval lists / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[0,4],[7,12],[16,20]]` × `[[2,7],[9,10],[13,17],[19,22]]` → five pieces
    including the degenerate `[7,7]`; `[[3,8]]` × `[]` → `[]`; `[[1,2],[6,9]]`
    × `[[3,5],[10,14]]` → `[]` (both non-empty, still no overlap — a shape the
    source did not show)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — both `example-1.svg` and `solution-interval-lanes.svg` map
  interval endpoints onto x-coordinates (`x = 40 + 20 * value`), so the example
  data is the geometry; no renderer exists for the family
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- Candidate parameter names were grepped against every source solution first:
  the source locals are `result`, `i`, `j`, `lo`, `hi`, so `rangesA` / `rangesB`
  cannot collide once the ledger's api map is applied by the compatibility gate.
- The source's constraint block spelled the disjointness twice, once per list,
  in subscript notation (`endi < start(i+1)`). The rewrite states it once as a
  property of "one collection" — same numeric domain, half the ink.
- The two dropped figures are the same drawing at two scales; a phase-two
  redraw would want one renderer covering both (`interval-lanes`), since the
  layout is a pure linear map from endpoint to x.
