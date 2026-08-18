## 0543 — Diameter of Binary Tree

- New id / title / slug: 543 / Widest Tree Path / `widest-tree-path`
- Old → new API: `diameterOfBinaryTree` → `widestTreePath` (go `widestTreePath`, rust `widest_tree_path`, ts `widestTreePath`); parameter `root` kept (conventional)
- Core algorithm / difficulty: single post-order DFS returning subtree height while tracking the max left+right sum / H2 (unchanged)
- Statement rewritten from spec: yes — the diameter is introduced as the longest path between any two nodes, with its highest node as the "turning node"
- Examples newly constructed: yes (structure-preserving: yes)
  - `[8,6,9,0,7]` → 3 (turn at the root; twin paths 0,6,8,9 and 7,6,8,9), `[0,-5]` → 1 (one edge, negative value), `[6]` → 0 (lone node)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `example-1.svg` keeps the drawn shape and the highlighted path (same edges), values 1,2,3,4,5 → 8,6,9,0,7, caption "path [4,2,1,3]" → "path [0,6,8,9]"
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The figure survived as a pure label edit because the new example
  preserves the drawn tree shape exactly, so the highlighted diameter
  edges are unchanged — only the node values and the caption moved.
- The reference's `height` counts **nodes** (a leaf returns 1), so
  `left + right` is the edge length of the through path. The source guide
  described that height as edge-based, which does not match the code; the
  rewritten guide states the node-count convention explicitly (the code
  itself is untouched per protocol).
- Deserialization for computing public expecteds follows the level-order
  codec (nulls for absent children), same as the runner.
