## 3108 — Minimum Cost Walk in Weighted Graph

- New id / title / slug: 3108 / Minimum AND of a Walk /
  `minimum-and-of-a-walk`
- Old → new API: `minimumCost` → `minWalkCost` (go `minWalkCost`, rust
  `min_walk_cost`, ts `minWalkCost`); parameters `n`, `edges`, `query`
  kept
- Core algorithm / difficulty: union-find grouping plus a per-component
  AND accumulator; queries answer by root comparison / H3 (unchanged)
- Statement rewritten from spec: yes (cost definition, walk definition,
  and query contract all reworded from the spec)
- Examples newly constructed: yes (structure-preserving: **yes** — both
  figures kept by label edit)
  - `n=5, edges=[[0,1,9],[1,3,12],[1,2,10]], query=[[0,3],[3,4]]` →
    `[8,-1]`: same graph shape and queries as the source example, new
    weights make the reuse walk `9 & 10 & 10 & 12 = 8`
  - `n=3, edges=[[0,2,11],[0,1,13],[1,2,5],[1,2,2]], query=[[1,2]]` →
    `[0]`: same triangle with a doubled side; `2 & 5 & 2 = 0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both SVGs — comment, weight labels, query
  results, caption; geometry untouched)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a
  (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- First overlap run failed at 13%: the figure **alt texts** had echoed
  the source's sentence shapes ("... crosses the two parallel ... edges
  of weights ... AND ... AND ... = 0"). Alt text is prose to the gate —
  fenced blocks are stripped but image lines are not. Rewriting both
  alt texts (and the cost definition, which shared
  "the bitwise and of the weights of") brought overlap to 0 shared
  non-background shingles.
- Figure regeneration was unnecessary: both drawings encode the graph
  topology, not the weights, so the structure-preserving rule applied
  exactly — text-node edits only, verified by re-reading the SVGs.
- SVG comments carry the example data (`edges = [[0,1,9],...]`); they
  were updated alongside the labels so no stale literal survives in
  the figures.
