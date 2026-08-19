## 2316 — Count Unreachable Pairs of Nodes in an Undirected Graph

- New id / title / slug: 2316 / Unreachable Node Pairs / `unreachable-node-pairs`
- Old → new API: `countPairs` → `countUnreachablePairs` (go `countUnreachablePairs`, rust `count_unreachable_pairs`, ts `countUnreachablePairs`); parameters `n`, `edges` kept
- Core algorithm / difficulty: union-find (by size, iterative path compression), answer `C(n,2) − Σ C(s,2)` over component sizes, 64-bit result / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes for example 2; example 1 redrawn)
  - `n=4, [[0,1],[1,2],[2,3],[3,0]] → 0` (one cycle component covers everything — replaces the source's triangle, which admits no other labeling), `n=7, [[0,1],[0,5],[1,6],[5,6],[2,4]] → 14` (components 4+2+1 as in the figure, new node ids)
- Constraints: domain unchanged (1–10⁵ nodes, ≤ 2·10⁵ edges, no loops or repeats), presentation rewritten
- Skeletons regenerated: all 7
- Figures: example-2 label-edited (node ids relabeled, same sizes so caption arithmetic stands); example-1 redrawn as a 4-cycle — a 3-node triangle has no non-identical relabeling, so the figure was rebuilt in the house style rather than dropped
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 13/13 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- When a figure's example is forced by symmetry (a triangle on
  {0,1,2} is the *only* triangle on 3 nodes), no relabeling exists —
  either redraw around a different-but-equal-shape example or drop.
  Redrawing a 4-node cycle was ~20 lines of SVG; dropped figures are
  only better when the drawing is complex.
- Kept the source figure-2 caption arithmetic `21 − 6 − 1 = 14` because
  my new example deliberately preserves the component-size multiset
  {4, 2, 1}; captions are only gated through the statement's alt text,
  which was rewritten.
