## 1008 — Construct Binary Search Tree from Preorder Traversal

- New id / title / slug: 1008 / Rebuild BST From Preorder / `rebuild-bst-from-preorder`
- Old → new API: `bstFromPreorder` → `rebuildBstFromPreorder` (go `rebuildBstFromPreorder`, rust `rebuild_bst_from_preorder`, ts `rebuildBstFromPreorder`); parameter `preorder` kept
- Core algorithm / difficulty: one forward cursor over the array with a permitted (low, high) range per call / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[20,9,4,15,26,33]` → `[20,9,26,4,15,null,33]` — same six-node shape the figures draw
  - `[3,8,5]` → `[3,null,8,5]`
  - `[2,4,6,8]` → `[2,null,4,null,6,null,8]` (sorted input degenerates to a chain)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both `example-1.svg` and `solution-bst-bounds.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title and method follow 0105 (`Rebuild Tree From Two Traversals`) so the two
  reconstruct-a-tree problems read as relatives.
- Both figures are node circles with `<text>` values, so choosing an example
  with the *same tree shape* (root, a left child with two children, a right
  child with one right child) reduced the whole figure job to swapping six
  numbers plus, in the solution figure, the five bound annotations — `(-inf,19)`,
  `(-inf,8)`, `(10,19)`, `(21,+inf)`, `(27,+inf)`. Worth looking for this before
  assuming a tree figure has to be dropped.
- Captions were rewritten too, not just the data, since they are prose.
