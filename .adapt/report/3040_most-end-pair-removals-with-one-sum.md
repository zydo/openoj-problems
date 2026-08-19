## 3040 — Maximum Number of Operations With the Same Score II

- New id / title / slug: 3040 / Most End-Pair Removals With One Sum / `most-end-pair-removals-with-one-sum`
- Old → new API: `maxOperations` → `mostEndPairRemovals` (go `mostEndPairRemovals`, rust `most_end_pair_removals`, ts `mostEndPairRemovals`); parameter `nums` kept
- Core algorithm / difficulty: interval DP `dp[l][r]` run once per candidate tally (3 candidates) / H3 (unchanged)
- Statement rewritten from spec: yes ("operation/score" reframed as removals with a tally)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[5,2,3,1,6,4]` → 3 (full clear; chosen so every cell of the dp table for tally 7 equals the source figure's table for score 5 — figure needed only label edits); `[4,3,7,2,5]` → 2 (left pair then right pair, leftover element); `[9,1,2,3,4,5]` → 1 (no tally repeats)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — header (tally 7, new array) and the three transition annotations (5+2=7, 3+4=7, 1+6=7); all cell values, shading, arrows, and the highlighted chain dp[0][5]→dp[2][5]→dp[3][4] are byte-identical geometry
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Keeping this figure was a search problem, not a draw: the example array was
  picked by requiring the full dp table of the new array (tally 7) to equal
  the old one (score 5) cell-for-cell, so the highlighted chain and every cell
  number stay valid. The generator asserts the table equality before writing
  cases, so a future edit that breaks the figure fails loudly.
- Constraint pattern worth remembering: a length-5 array caps the answer at 2
  (each removal eats 2 elements), which is why E2's "at most 2" needs no
  deeper argument.
- LeetCode's 3038 ("... Same Score I") is not in this bank; the "II" suffix
  was dropped with no family to preserve.
