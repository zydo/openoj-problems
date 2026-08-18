## 0105 — Construct Binary Tree from Preorder and Inorder Traversal

- New id / title / slug: 105 / Rebuild Tree From Two Traversals / `rebuild-tree-from-two-traversals`
- Old → new API: `buildTree` → `rebuildTreeFromTwoTraversals` (go same camelCase, rust `rebuild_tree_from_two_traversals`, ts camelCase); parameters `preorder`, `inorder` kept
- Core algorithm / difficulty: divide and conquer, inorder index map + shared preorder cursor / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — same five-node shape, same inorder-split layout: one left node, three right)
  - `preorder = [5,1,9,7,12]`, `inorder = [1,5,7,9,12]` → `[5,1,9,null,null,7,12]`; `([6],[6])` → `[6]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — both figures (tree node values, both array rows, split annotations, cursor narrative). The example was chosen to keep the inorder root at position 1 and the right range three wide, so bracket/range geometry and the "position 1" caption stay true.
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- "preorder"/"inorder" stay: they are generic CS traversal names, not
  LeetCode's wording, and renaming them would obscure the spec.
- Tree rebuild output (`binary_tree` return codec) verified by array
  serialization in the expected-value script.
