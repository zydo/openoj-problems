## 175 — Delete Node in a BST

- New id / title / slug: 175 / BST Node Removal / `bst-node-removal`
- Old → new API: `deleteNode` → `removeNode` (go `removeNode`, rust `remove_node`, ts `removeNode`); parameters `root`, `key` kept
- Core algorithm / difficulty: recursive descent, successor replacement for the two-children case / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[9,5,13,3,7,null,16] key 5 → [9,7,13,3,null,null,16]` (two-children removal), same tree `key 6` → unchanged (absent key), `[] key 8 → []`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — all three SVGs kept the drawn tree shape and took
  the value map 5→9, 3→5, 6→13, 2→3, 4→7, 7→16, captions included
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- Judging is `exact` on the serialized tree, so the statement *prescribes*
  the successor rule and does not repeat the source's (false in this
  harness) claim that a predecessor-based answer is also accepted.
- The first overlap failure came from figure alt texts inheriting the
  source's sentence shape ("The BST is unchanged because it contains no node
  with value 0"). Alt text is prose like any other — write it fresh.
