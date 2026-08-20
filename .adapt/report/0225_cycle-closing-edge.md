## 225 — Redundant Connection

- New id / title / slug: 225 / Cycle-Closing Edge / `cycle-closing-edge`
- Old → new API: `findRedundantConnection` → `cycleClosingEdge` (go
  `cycleClosingEdge`, rust `cycle_closing_edge`, ts `cycleClosingEdge`);
  parameter `edges` kept (conventional)
- Core algorithm / difficulty: union-find scan in input order, first edge whose
  endpoints already share a root / H2 (unchanged). Second variant: reachability
  DFS over the accepted prefix
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes, for the kept
  figure)
  - `[[2,4],[4,5],[3,5],[1,2],[2,3]]` → `[2,3]` (four-cycle plus a pendant —
    matches the drawn shape), `[[1,2],[2,3],[1,3],[3,4],[4,5]]` → `[1,3]`
    (three candidates, the tie-break is not the last element of the array),
    `[[1,3],[2,3],[1,4],[1,2]]` → `[1,2]` (smallest shape)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — the source's `example-2.svg` (four-cycle plus
  pendant) is kept as `example-1.svg` with the node labels, the highlighted
  edge label and the caption rewritten for the new example. The source's
  triangle figure was **dropped**: a triangle on three labelled nodes has only
  one possible edge set, so any "new" example for it would be a permutation of
  the source's, which the examples rule forbids
- Gates: check ✓ verify ✓ (7/7 languages × 2 variants, 15/15 cases)
  sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Variant ids `union_find` / `dfs` and their `solutions.md` headings are
  unchanged, as required by the Solutions-tab matcher.
- Relabelling a graph figure is the cheap analogue of the "same shape, new
  values" rule: the drawn topology (four-cycle + pendant, pendant sharing a
  vertex with the highlighted edge) fixes which relabelings are legal, and the
  input order then has to put the highlighted pair last among the cycle's pairs.
- Hidden case data contains pairs with `ai > bi` (`[3,1]`, `[2,1]`), which the
  stated constraint `ai < bi` does not allow. That is pre-existing and hidden
  cases are frozen, so it was left alone; the constraint text keeps the source's
  domain.
