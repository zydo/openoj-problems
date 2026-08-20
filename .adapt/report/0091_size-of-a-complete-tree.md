## 91 — Count Complete Tree Nodes

- New id / title / slug: 91 / Size Of A Complete Tree / `size-of-a-complete-tree`
- Old → new API: `countNodes` → `treeSize` (go `treeSize`, rust `tree_size`, ts `treeSize`); parameter `root` kept
- Core algorithm / difficulty: spine-depth probes, perfect subtree closed form, one ragged child recurses / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same 6-node shape, fresh values)
  - `[7,4,9,2,8,5] → 6`, `[4,2,6,1,3,5,7] → 7` (perfect, closed-form branch), `[] → 0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`)
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 17/17 cases)

### Notes

- "Complete binary tree" is kept — it is the standard data-structures term and
  names the input guarantee, not LeetCode's wording. The *title* is new
  ("size" is the usual word for a node count), while the definition inside the
  statement is re-expressed ("filled level by level, left to right").
- The sub-`O(n)` requirement is functional (a plain traversal passes the judge
  but misses the point), so it stays in the description.
