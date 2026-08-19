## 2751 — Robot Collisions

- New id / title / slug: 2751 / Line Collision Survivors / `line-collision-survivors`
- Old → new API: `survivedRobotsHealths` → `survivorHealths` (go `survivorHealths`, rust `survivor_healths`, ts `survivorHealths`); parameters `positions`, `healths`, `directions` kept (conventional)
- Core algorithm / difficulty: sort by position, stack sweep of right-movers, left-movers duel the stack top / H3 (unchanged)
- Statement rewritten from spec: yes — "robots colliding on a line" restated around health duels; output described as survivors' healths in input order
- Examples newly constructed: yes (structure-preserving: yes)
  - `[9,7,5,3,1]/[4,12,8,16,6]/"RRRRR" → [4,12,8,16,6]` (no meeting), `[4,8,3,9]/[7,7,11,5]/"RLRL" → [10]` (equal trade then a win, both collisions at position 6), `[2,3,7,8]/[6,6,9,9]/"RLRL" → []` (two ties)
  - Same directions strings, same sorted-index order, same alive/dead pattern as the drawn examples, so all four figures needed label edits only
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1..3 + solution-stack-duels; healths, positions, outcome annotations, stack snapshot values)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The example figures space circles evenly by sorted order, not proportionally
  to position values, so "structure" here is (n, directions, sorted-index
  order, alive/dead pattern); positions and healths are text labels.
- `check.py --tree problems-adapt --skip-runtime` still reports 8 failures in
  `0736_interpret-scoped-expression` (starters not generator output) — a
  pre-existing bundle outside this chunk, untouched here.
