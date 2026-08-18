## 0055 — Jump Game

- New id / title / slug: 55 / Reach The Last Cell / `reach-the-last-cell`
- Old → new API: `canJump` → `canReachEnd` (go `canReachEnd`, rust `can_reach_end`, ts `canReachEnd`); parameter `nums` → `steps`
- Core algorithm / difficulty: greedy farthest-reach sweep / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[3,1,2,0,4]` → true (a dead cell on the way, bypassed), `[3,2,1,0,1]` → false (edge stalls at a 0 one short of the end), `[0]` → true (single cell)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`solution-reach-arcs.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Why the figure was dropped.** Each arc's right endpoint sits at
  `index + nums[index]`, so the arc endpoints *are* the data; a
  structure-preserving example would need the source's exact values. This is
  the same geometry-encodes-the-data class as 0041's swap arrows, and it will
  recur for every "reach/walk" figure in the bank.
- The parameter rename `nums` → `steps` is a clarity rename (each element is
  the maximum advance, not a generic number); it propagates through the
  statement, starters, ports and the guide's worked example.
- Naming checked against siblings: chunk-3 contains `0134_jump-game`,
  `045_jump-game-ii`, `1696_jump-game-vi` etc. If the family titles are
  pre-decided centrally, "Reach The Last Cell" is the natural prime for
  "reach the end" (II is "minimum jumps", VI is "max score") — flag to the
  coordinator that this family may want consistent treatment.
- Full-tree `check.py` now exceeds two minutes (83 adapted bundles and other
  agents' in-progress work); per-bundle verification is done by grepping its
  output for the bundle key.
