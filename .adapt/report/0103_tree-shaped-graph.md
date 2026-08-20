## 103 — Graph Valid Tree

- New id / title / slug: 103 / Tree-Shaped Graph / `tree-shaped-graph`
- Old → new API: `validTree` → `isTreeShaped` (go `isTreeShaped`, rust `is_tree_shaped`, ts `isTreeShaped`); parameters `n`, `edges` kept
- Core algorithm / difficulty: n-1 edge-count shortcut, then Union-Find loop detection with path halving / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `n=6, edges=[[5,4],[4,0],[0,1],[1,2],[0,3]] → true`,
    `n=3, edges=[[0,1],[1,2],[0,2]] → false` (loop closes),
    `n=4, edges=[[0,1],[2,3]] → false` (two pieces, too few edges)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`example-1.svg`, `example-2.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Both figures were dropped, and the reason is worth recording: a graph figure's
  *edges* are the data, and the edges are drawn as line geometry. Any example
  that reuses the picture must have the source's exact edge set; permuting labels
  is precisely the "permuted, not new" example ADAPT.md rejects. This is the
  "geometry encodes the data" case — the same class as tree shapes, one step
  worse than grids, because even the labels are forced (node ids are canonical
  `0..n-1`, so there is nothing to relabel to).
- The source constraints listed `ai != bi` and then "no self-loops" (the same
  fact twice); the rewritten constraints state it once. Domain unchanged.
- Solution comments said "hence a valid tree" — old-title terminology — now
  "hence tree-shaped", in all seven languages.
- check.py's static tier always scans the whole tree, so with several waves
  running at once it reports other agents' in-flight bundles; filter on your own
  key before believing a failure is yours.
