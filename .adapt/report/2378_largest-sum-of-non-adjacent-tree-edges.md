## 2378 — Choose Edges to Maximize Score in a Tree

- New id / title / slug: 2378 / Largest Sum of Non-Adjacent Tree Edges / `largest-sum-of-non-adjacent-tree-edges`
- Old → new API: `maxScore` → `maxNonAdjacentEdgeSum` (go `maxNonAdjacentEdgeSum`, rust `max_non_adjacent_edge_sum`, ts `maxNonAdjacentEdgeSum`)
- Core algorithm / difficulty: two-state tree DP (parent edge taken or not), positive-gain clamp for negative weights, iterative preorder / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[-1,-1],[0,4],[0,9],[1,3],[1,5]] → 14`, `[[-1,-1],[0,8],[0,-5],[0,6]] → 8` (star at the root, negative refused), `[[-1,-1],[0,3],[1,-2],[2,7],[3,4]] → 10` (chain)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — both example figures place tree nodes from the source data (geometry encodes it); no renderer for the family
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
