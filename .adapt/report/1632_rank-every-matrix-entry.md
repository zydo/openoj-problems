## 1632 — Rank Transform of a Matrix

- New id / title / slug: 1632 / Rank Every Matrix Entry / `rank-every-matrix-entry`
- Old → new API: `matrixRankTransform` → `rankEntries` (go `rankEntries`, rust `rank_entries`, ts `rankEntries`); parameter `matrix` kept (conventional)
- Core algorithm / difficulty: value-grouped sweep with per-group union-find over row/column ties, rank = 1 + max(row_max, col_max) per component / H4 (unchanged)
- Statement rewritten from spec: yes — rank rules restated as three bullets (positive from 1; row/column comparisons respected exactly; ranks minimal), uniqueness noted as an input guarantee
- Examples newly constructed: yes (structure-preserving: yes — 2x2, 2x2, 4x3 keep the input→arrow→rank-grid figures)
  - `[[2,9],[4,7]] → [[1,4],[2,3]]` (four distinct ranks, no ties), `[[-4,-4],[-4,-4]] → all 1`, `[[4,25,-18],[-18,25,8],[43,31,-2],[4,25,9]] → [[2,5,1],[1,5,3],[7,6,2],[2,5,4]]` (ties fused through shared columns)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — all three input→rank pair figures re-emitted by `.localonly/wave-e-05/figs_1632.py`, ranks computed through the adapted reference solution and colors assigned per rank (a 7th color added for the new rank range); renders eyeballed, plus a direct SVG check that each rank carries exactly one fill
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate reads the source's *flat* example lists (including each
  output row like `[1,3,4]`) as literals and hunts them across every adapted
  file. My first Example 3 mirrored the source's value layout so closely
  that three of its rank rows came out byte-identical to the source's output
  rows — flagged, and fixed by restructuring the ties (moved the repeated
  group into the middle column). When adapting a problem whose *output* is a
  matrix of small integers, check the output rows against the source's
  example output rows, not just the inputs.
- Figure captions must fit the viewBox: a centered caption wider than the
  canvas clips at both ends and reads as garbled text.
