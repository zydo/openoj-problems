## 0323 — Number of Connected Components in an Undirected Graph

- New id / title / slug: 323 / Count Graph Components / `count-graph-components`
- Old → new API: `countComponents` → `countGraphComponents` (go `countGraphComponents`, rust `count_graph_components`, ts `countGraphComponents`)
- Core algorithm / difficulty: union-find with path compression, and adjacency sweep + flood — multi-solution, variants `union_find` and `dfs` kept / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `n = 7` with a triangle, one pair, and two isolated nodes → 4; `n = 6` single path → 1; `n = 4` with one edge → 3
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (per variant)
- Figures: dropped (`example-1.svg`, `example-2.svg` — the drawings' node/edge geometry *is* the example data; any structure-preserving example would have reused the source edges)
- Gates: check ✓ verify ✓ (7/7 languages × 2 variants, 17/17 cases each) compatibility ✓ stale ✓ overlap ✓

### Notes

- Graph-drawing figures are geometry-encoded by nature (which nodes the lines
  join is the data), so example figures for graph problems will essentially
  always be dropped rather than label-edited — recorded here for phase two.
