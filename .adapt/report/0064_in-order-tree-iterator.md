## 64 — Binary Search Tree Iterator

- New id / title / slug: 64 / In-Order Tree Iterator / `in-order-tree-iterator`
- Old → new API: class `BSTIterator` → `InOrderTreeIterator`; `next`/`hasNext` kept (universal iterator vocabulary); parameter `root` kept
- Core algorithm / difficulty: left-spine stack, one root-to-node path held at a time / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - full seven-node tree `[12,5,20,2,9,15,25]` drained with interleaved `hasNext`; left-leaning chain `[40,30,null,20,null,10]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- The source statement explained the tree format with `-1` markers while its
  cases.json actually carries `null`. My rewrite states the `null` convention,
  matching the wire format the judge really parses — the public examples and
  case data now agree. Worth a sweep across other tree bundles at review.
- The source solutions.md claimed the *solution* rebuilds the tree from the
  level-order array; in fact the harness decodes it and hands over a
  `TreeNode`. My guide states the decoded-node reality, and the hint about
  queue-based rebuilding was dropped with it.
