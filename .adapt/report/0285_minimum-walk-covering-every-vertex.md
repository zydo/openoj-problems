## 285 — Shortest Path Visiting All Nodes

- New id / title / slug: 285 / Minimum Walk Covering Every Vertex /
  `minimum-walk-covering-every-vertex`
- Old → new API: `shortestPathLength` → `minimumCoveringWalkLength` (Go and
  TypeScript `minimumCoveringWalkLength`, Rust `shortest_path_length` →
  `minimum_covering_walk_length`)
- Core algorithm / difficulty: multi-source breadth-first search over current
  vertex and visited mask / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no)
  - fresh networks cover a branching tree requiring a revisit and a complete
    network admitting a simple spanning walk
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped because both source SVGs encode the replaced topology and
  highlighted walks
- Gates: check ✓; verify ✓ (7/7 solutions, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Independent multi-source mask BFS confirms public lengths `5` and `3`.
- The 14 hidden cases are data-identical to the source corpus.
