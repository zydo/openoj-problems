## 3449 — Maximize the Minimum Game Score

- New id / title / slug: 3449 / Lift the Lowest Cell Score / `lift-the-lowest-cell-score`
- Old → new API: `maxScore` → `liftLowest` (go `liftLowest`, rust `lift_lowest`, ts `liftLowest`); parameters `points`, `m` kept
- Core algorithm / difficulty: binary search on the minimum score; feasibility via a left-to-right sweep that bounces across single boundaries, banking forward deposits / H4 (unchanged)
- Statement rewritten from spec: yes (marker/step/deposit vocabulary built from the mechanics: off-left start, first step forced, totals accumulate on arrival)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,5] m=3` → 5 (single bounce, totals [6,5]), `[3,8,3] m=5` → 3 (both outer cells need two deposits; the round tour alone costs six steps), `[5,2,5] m=11` → 10 (middle cell worth 2 demands five deposits; parity leaves a spare step)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The hidden set contains `n = 1` inputs (`[[5],4]`, `[[7],1]`) although the
  statement constrains `n >= 2` — harmless (the reference handles them;
  `remain >= 1` fires and no forward move is needed at the last index), and
  hidden data is untouchable anyway. Worth knowing if anyone ever re-derives
  this bundle's data.
- Independent oracle for this one is a BFS over (position, capped totals)
  states; 60 random small inputs agreed with the reference
  (`exp_3449.py`). Totals must be capped at the probe target or the state
  space explodes.
