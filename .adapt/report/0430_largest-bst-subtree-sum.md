## 430 — Maximum Sum BST in Binary Tree

- New id / title / slug: 430 / Largest BST Subtree Sum / `largest-bst-subtree-sum`
- Old → new API: `maxSumBST` → `largestBstSubtreeSum` (go `largestBstSubtreeSum`, rust `largest_bst_subtree_sum`, ts `largestBstSubtreeSum`); parameter `root` kept
- Core algorithm / difficulty: post-order DFS returning (is_bst, min, max, sum) per subtree / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same tree shapes, new keys)
  - `[8,10,9,7,10,4,12,null,null,null,null,null,null,11,15]` → 51, `[7,5,null,2,4]` → 4, `[-6,-1,-8]` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1, example-2, solution-bst-subtree — all three drew the old example data; geometry untouched, values and captions edited)
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- All three figures shared example-1's (or example-2's) tree, so structure-preserving
  examples (same shapes, new keys) turned every figure into a label edit; the
  uniqueness-checked edit script is `.localonly/e02/fig_1373.py`.
- First overlap run failed at 15% — the *figure alt texts* were near-verbatim
  translations. Alt text counts as prose for the shingle gate; writing them
  fresh brought overlap to 0%.
- The BST definition bullet list was recast as prose rules in the house voice;
  the source's example values were re-derived by the staged reference solution.
