## 0979 — Distribute Coins in Binary Tree

- New id / title / slug: 979 / Equalize Tree Coins / `equalize-tree-coins`
- Old → new API: `distributeCoins` → `equalizeCoins` (go `equalizeCoins`, rust `equalize_coins`, ts `equalizeCoins`); parameter `root` kept (conventional)
- Core algorithm / difficulty: post-order DFS returning each subtree's coin surplus, summing |surplus| per edge / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no — see figures)
  - `[1,2,0]` → 2 (one coin up, one coin down)
  - `[2,0,3,0,0]` → 7 (a pile that has to travel two edges)
  - `[0,1,3,null,null,1,0]` → 2 (an already-settled subtree costs nothing)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `example-1.svg` and `example-2.svg` dropped; `solution-coin-flow.svg` relabelled
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The two example figures draw coins as *physical circles* — three stacked
  discs on a node — so the count is geometry, not a label. The only 3-node
  trees that fit those drawings unchanged are the source's own two examples,
  so both figures were dropped for phase two rather than half-redrawn.
- `solution-coin-flow.svg` survived: it is a 3-node tree whose values and flow
  annotations are text, so retargeting it to `[1,2,0]` meant editing three
  labels, reversing one arrow (swap the line's endpoints — the marker is
  `marker-end`), and rewriting the caption.
- No parameter renames, so nothing to grep for the collision trap.
