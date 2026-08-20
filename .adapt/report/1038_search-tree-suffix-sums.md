## 1038 — Binary Search Tree to Greater Sum Tree

- New id / title / slug: 1038 / Search Tree Suffix Sums / `search-tree-suffix-sums`
- Old → new API: `bstToGst` → `searchTreeSuffixSums` (go `searchTreeSuffixSums`, rust `search_tree_suffix_sums`, ts `searchTreeSuffixSums`); parameter `root` kept
- Core algorithm / difficulty: reverse in-order with a running total / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[10,4,20,1,7,15,30,null,null,null,8,null,null,null,35]` — same nine-node shape as the source example (deep nodes are right children), so the solution figure kept its geometry and needed only value/arrow/caption edits; visit ranks #1–#9 are unchanged
  - `[2,null,5]` → `[7,null,5]` (right chain of two), `[40,20,null,10,None]` → `[40,60,null,70]` (left chain, largest key at the root)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`solution-gst-values.svg` renamed `solution-suffix-values.svg`: 9 node values, 9 running-total labels, caption's visit order; ranks untouched)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- 0538 (the identical LeetCode twin) is not in this bank, so 1038 had no
  sibling naming to reconcile.
- Trap worth recording: the deep nodes in the source's example array are RIGHT
  children of their parents (level-order indices 10 and 14). My first attempt
  picked values that made them valid only as left children, silently producing
  a non-BST and nonsense sums — the reference-solution script caught it. Always
  re-derive the parent/child relations from the level-order array before
  choosing values for a structure-preserving tree example.
- Renamed the solution figure file (`gst` = greater-sum-tree) even though the
  stale gate would not have flagged it — old-terminology fragments in filenames
  outlive their meaning.
