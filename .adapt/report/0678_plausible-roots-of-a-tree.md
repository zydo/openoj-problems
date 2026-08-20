## 678 — Count Number of Possible Root Nodes

- New id / title / slug: 678 / Plausible Roots of a Tree / `plausible-roots-of-a-tree`
- Old → new API: `rootCount` → `plausibleRoots` (go `plausibleRoots`, rust `plausible_roots`, ts `plausibleRoots`); parameters `edges`, `guesses`, `k` kept
- Core algorithm / difficulty: rerooting — parent map from one DFS, count for root 0, then each edge crossing moves the count by ±1 via guess-set lookups / H3 (unchanged)
- Statement rewritten from spec: yes (Alice/Bob framing dropped; guesses defined directly as directed pairs over real edges)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - star `[[0,2],[1,2],[2,3]]` with 3 guesses, `k=2` → `2` (per-root counts 1,1,2,3), chain `[[0,1],[1,2]]` with both guesses naming the middle node, `k=1` → `2`, same chain with `k=0` → `3`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — both figures draw the tree *plus the guess arrows*; the arrows are the example's data, so a new guess set needs geometry edits (arrow endpoints/directions), not label edits, and no renderer exists for the tree-plus-arrows family. A relabel-only edit would keep the example isomorphic to the source's, which reads as permuted rather than constructed.
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Brute force roots the tree at every node with its own BFS and counts
  matches against the guess set — independent of the rerooting logic.
- Decision worth flagging for phase two: a tree-with-annotation-edges
  renderer would let these figures survive as label edits (node texts +
  `u→v` annotations); today only `container-lines` and `kadane-walk` exist.
