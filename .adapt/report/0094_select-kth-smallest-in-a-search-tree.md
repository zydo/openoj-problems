## 94 — Kth Smallest Element in a BST

- New id / title / slug: 94 / Select Kth Smallest In A Search Tree / `select-kth-smallest-in-a-search-tree`
- Old → new API: `kthSmallest` → `selectKthSmallest` (go `selectKthSmallest`, rust `select_kth_smallest`, ts `selectKthSmallest`); parameters `root`, `k` kept
- Core algorithm / difficulty: inorder walk with an early stop, iterative and recursive / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both figures keep the source tree shapes and highlight positions, values fresh)
  - `[8,3,11,null,6], k=1 → 3`, `[9,5,12,3,7,null,null,1], k=3 → 5`, `[2,null,4,null,6,null,8], k=2 → 4` (right chain, no figure)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `example-2.svg` — tree nodes and the inorder strips)
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 14/14 language-variants, 17/17 cases each)

### Notes

- Title keeps kinship with `0084_select-kth-largest` (Select Kth Largest).
- Multi-solution bundle: variant ids `inorder_iterative` / `inorder_recursive`
  untouched. The section headings are written "Iterative/Recursive Inorder …"
  (one word) so both variant tokens appear verbatim in the heading; the
  source's "In-Order" spelled it two words.
- The two variants were run against all three new examples and agreed before
  the public cases were written.
