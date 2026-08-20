## 34 — Convert Sorted List to Binary Search Tree

- New id / title / slug: 34 / Balanced Tree From Sorted List / `balanced-tree-from-sorted-list`
- Old → new API: `sortedListToBST` → `balancedTreeFromSortedList` (go camelCase, rust `balanced_tree_from_sorted_list`, ts camelCase); parameter `head` kept
- Core algorithm / difficulty: two variants — `fast_slow` midpoint walk, `inorder_sim` linear simulation / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — same five-node list and identical tree shape)
  - `[-7,-2,4,8,13]` → `[4,-2,13,-7,null,8]`; `[]` → `[]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (both variants renamed in all 7)
- Figures: **labels updated** — both figures: list node values, tree node values, midpoint/cut annotations, recursion narrative. The even-tie-break structure (second middle roots the right subtree) is preserved by construction.
- Gates: check ✓ verify ✓ (7/7 languages x 2 variants, 13/13 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- The compatibility gate caught my expected-value script, not the bundle:
  the judge's `binary_tree` serialization trims trailing `null`s, my
  throwaway level-order builder did not (`[... 8, null]` vs `[... 8]`).
  Every later tree-returning bundle must trim trailing nulls when computing
  expected values. 0105 got this right only by accident (no trailing-null
  level).
- Multi-variant bundles: kept variant ids `fast_slow` / `inorder_sim` and
  kept the `## Fast/slow` / `## Inorder simulation` section headings
  verbatim so the Solutions-tab token matcher still resolves them.
