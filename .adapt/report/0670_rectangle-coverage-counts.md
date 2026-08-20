## 670 — Increment Submatrices by One

- New id / title / slug: 670 / Rectangle Coverage Counts / `rectangle-coverage-counts`
- Old → new API: `rangeAddQueries` → `rectangleCoverage` (go `rectangleCoverage`, rust `rectangle_coverage`, ts `rectangleCoverage`); parameters `n`, `queries` kept
- Core algorithm / difficulty: per-row 1-D difference marks (+1 at c1, −1 at c2+1), one prefix-sum reconstruction / H2 (unchanged)
- Statement rewritten from spec: yes (operation reframed as coverage counting — the two readings are stated as one)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped, see below)
  - `n=3`, `[[0,0,1,2],[1,0,2,1]]` → `[[1,1,1],[2,2,1],[1,1,0]]` (row band ∩ column band), `n=4`, three rectangles whose shared 2x2 reaches 3, `n=3`, degenerate single-cell rectangles stacking to 2 and 1
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — all three (`example-1`, `example-2`, `solution-difference-array`) draw the source's exact query set: shaded rectangles, panel captions, and the diff-grid cell colors are geometry encoding `[1,1,2,2]`/`[0,0,1,1]` on n=3 (and `[0,0,1,1]` on the only 2x2 shape possible). Any different query changes the drawing, not a label. No renderer family covers this. Candidates for the phase-2 redraw list.
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- A query-only problem (no value labels at all) leaves a figure with nothing
  to relabel: the rectangle coordinates *are* the geometry. Drop is the only
  honest move; 2493-style isomorphic relabeling has no analogue here because
  the coordinates index the drawing itself.
- The stale gate collected zero literals from this source — every bracketed
  array in its text blocks is a two-symbol alphabet (0/1 or 1/2) — so the
  freshness burden sat entirely on the prose and query sets.
