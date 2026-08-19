## 2458 — Height of Binary Tree After Subtree Removal Queries

- New id / title / slug: 2458 / Tree Height After Subtree Cuts / `tree-height-after-subtree-cuts`
- Old → new API: `treeQueries` → `cutHeights` (go `cutHeights`, rust `cut_heights`, ts `cutHeights`); parameters `root`, `queries` kept
- Core algorithm / difficulty: precompute per node the deepest depth outside its subtree (reversed pre-order for `depth`/`height`/`submax`, top-down distribution with sibling contributions), O(1) per query / H4 (unchanged)
- Statement rewritten from spec: yes (queries framed as isolated "cut and measure" experiments)
- Examples newly constructed: yes (structure-preserving: yes, renumbered)
  - `[5,2,7,1,null,4,6,null,null,null,null,null,3] queries [7]` → `[2]` (same 7-node shape as the drawn example, values renumbered; kept the dashed-enclosure + highlighted-remaining-path geometry), complete tree `[6,3,8,1,5,2,7,4,9] queries [3,8,1,5]` → `[2,3,2,3]` (same 9-node shape, renumbered), `[2,1] queries [1]` → `[0]` (no figure; the lone-root edge)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — node values renumbered, query/answer annotations, array comments, right-panel path text; all geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Both figures are tree-shape drawings, so the values are a permutation of
  1..n and the label edit is a pure text substitution; relabeling via a
  `(<text...>)(\d+)(</text>)` map is safe because coordinates never sit
  between `>` and `<`.
- The source example-2 annotation "queries [3, 2, 4, 8]" squashes to the
  source literal `3,2,4,8`, so the new query list had to differ as a
  character sequence, not just as a set — `[3,8,1,5]` alternates the answers
  the same way without the collision.
