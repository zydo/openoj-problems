## 300 — Reachable Nodes In Subdivided Graph

- New id / title / slug: 300 / Reachable Vertices After Edge Expansion /
  `reachable-vertices-after-edge-expansion`
- Old → new API: `reachableNodes` → `countReachableExpandedVertices` (Go and
  TypeScript `countReachableExpandedVertices`, Rust `reachable_nodes` →
  `count_reachable_expanded_vertices`)
- Core algorithm / difficulty: Dijkstra on compact weighted links plus
  endpoint-budget counting / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no)
  - fresh networks cover overlapping endpoint reach, isolated origin, and a
    zero-expansion link
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped because both source SVGs encode replaced networks
- Gates: check ✓; verify ✓ (7/7 solutions, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Explicit expansion followed by ordinary BFS independently confirms public
  counts `7`, `1`, and `2`.
- The 13 hidden cases are data-identical to the source corpus.
