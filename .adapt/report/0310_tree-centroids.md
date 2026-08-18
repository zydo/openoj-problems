## 0310 — Minimum Height Trees

- New id / title / slug: 310 / Tree Centroids / `tree-centroids`
- Old → new API: `findMinHeightTrees` → `treeCentroids` (go `treeCentroids`, rust `tree_centroids`, ts `treeCentroids`); parameters `n`, `edges` kept
- Core algorithm / difficulty: simultaneous leaf peeling to the centroid(s), degree-count driven / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `n=7, path 0-…-6 → [3]` (odd path, one centroid),
    `n=6, edges [[2,0],[2,1],[2,3],[3,4],[3,5]] → [2,3]` (branching, two centroids),
    `n=2, edges [[0,1]] → [0,1]` (smallest two-centroid tree)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`example-1.svg`, `example-2.svg`, `solution-leaf-peeling.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Naming: the answer set has a standard graph-theory name — the tree's
  centroids — which predates LeetCode, so the title claims that term rather
  than inventing one (same judgement as keeping "H-Index"). The statement
  still defines the task operationally (roots minimizing rooted height) and
  introduces "centroids" as vocabulary in a parenthetical.
- All three figures dropped: each draws the example tree's edges as line
  geometry with canonical node ids, so no fresh example can reuse the drawing
  (same class as 0261; node relabeling would be a permuted example). The
  guide's peel walkthrough now runs on the new Example 2 instead.
- The source statement defined "tree" before using it; the rewritten one does
  not re-teach the definition (0261 Tree-Shaped Graph in this same chunk covers
  that decision problem) and opens with the rooting question directly.
- `n = 1` (no edges) is legal input; covered by the hidden set, and the
  `n <= 2` shortcut note in the guide explains why it returns immediately.
