## 432 — Balance a Binary Search Tree

- New id / title / slug: 432 / Rebalance a BST / `rebalance-a-bst`
- Old → new API: `balanceBST` → `rebalanceBst` (go `rebalanceBst`, rust `rebalance_bst`, ts `rebalanceBst`); parameter `root` kept
- Core algorithm / difficulty: in-order flatten to sorted values, midpoint recursive rebuild / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same spine/balanced shapes, new values)
  - right chain `[3,null,6,null,9,null,12,null,null]` → `[6,3,9,null,null,null,12]`, already-balanced `[5,3,8]`, left chain `[12,10,null,8,null,6]` → `[8,6,10,null,null,null,12]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1, example-2, solution-rebalance — value and caption edits only)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **Tree codec gotcha:** the harness parses `tree_node` inputs with a BFS queue
  (null entries consume no child slots), not `2i+1/2i+2` indexing. My first
  generator used index arithmetic and silently produced a different tree from
  the same spine array. Public expected values must be computed through the
  queue codec (mirrored from `runner/leetcode_types.py`). 1373 was unaffected
  only because its nulls sit exactly at leaf-child positions where the two
  readings coincide — worth remembering for any bundle with internal nulls.
- Output comparison is `exact` against the reference's deterministic midpoint
  build even though the statement (source and adaptation alike) promises any
  balanced tree is accepted; semantics kept as-is per decision 5.
