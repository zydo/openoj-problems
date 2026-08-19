## 3355 — Zero Array Transformation I

- New id / title / slug: 3355 / Clearing an Array with Window Decrements / `clearing-an-array-with-window-decrements`
- Old → new API: `isZeroArray` → `canClear` (go `canClear`, rust `can_clear`, ts `canClear`); parameters `nums`, `queries` kept
- Core algorithm / difficulty: difference array over window endpoints, prefix sweep compares coverage against each value / H2 (unchanged)
- Statement rewritten from spec: yes ("queries" reframed as windows; subset-per-window rule and skip-freedom stated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[0,2,1] [[0,1],[1,2]]` → true (overlapping windows), `[1,2,2] [[0,1],[2,2]]` → false (a position under-covered), `[1,1] [[0,1],[0,1],[0,1]]` → true (surplus coverage, subsets may skip)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- The bank holds no 3356/3357 siblings, so the "I" suffix was dropped
  without kinship concerns. `2772_zero-array-with-fixed-windows` already
  occupies the "zero array" phrase in problems-adapt, which the new
  title deliberately avoids.
- Hidden cases 9/10 looked contradictory at a glance ([5] with four
  [0,0] windows) but differ — case 9 has five windows. No source defect.
