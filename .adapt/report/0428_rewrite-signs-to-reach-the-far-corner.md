## 428 — Minimum Cost to Make at Least One Valid Path in a Grid

- New id / title / slug: 428 / Rewrite Signs to Reach the Far Corner / `rewrite-signs-to-reach-the-far-corner`
- Old → new API: `minCost` → `minRewrites` (go `minRewrites`, rust `min_rewrites`, ts `minRewrites`); parameter `grid` kept; sign values 1-4 keep their directions (data encoding, per decision 5)
- Core algorithm / difficulty: 0-1 BFS over cells, free edge along the sign and paid edges elsewhere / H3 (unchanged)
- Statement rewritten from spec: yes (path-following framed as a walk that each cell prescribes; modifications as rewrites paid per cell)
- Examples newly constructed: yes (structure-preserving: n/a — see figures)
  - `4x3 [[3,4,4],[3,4,4],[3,4,4],[3,4,2]]` → 2 (free ride down column 0, two right turns), `3x3 [[1,1,3],[4,2,3],[1,4,2]]` → 0 (signs already guide), `2x2 [[2,3],[3,1]]` → 1 (start points off-grid)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: mixed — the three example figures were dropped (their walk overlays place arrows by hand around the polyline, no recoverable layout rule, and `adapt_figures.py` has no renderer for this family); `solution-sign-grid.svg` was regenerated (it is a deterministic glyph grid: 56 px cells from (90,60), arrow character per sign, rewritten cells tinted with the original arrow in blue)
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 21/21 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Figure policy applied per-figure rather than per-bundle: the sign-grid
  family's *solution* figure is a pure function of the data and was
  re-emitted; the *example* figures are hand-tuned (per-cell arrow offsets
  "from the walk") and went the drop route for phase 2 to judge.
- The sign→direction mapping (1 right, 2 left, 3 down, 4 up) is input
  encoding, not naming, so it stayed identical; only its presentation was
  rewritten.
- Expecteds cross-checked with an independent Dijkstra
  (`.localonly/wave-e-01/pub_1368.py`).
