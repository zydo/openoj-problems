## 392 — Dice Roll Simulation

- New id / title / slug: 392 / Count Roll Sequences With Run Caps / `count-roll-sequences-with-run-caps`
- Old → new API: `dieSimulator` → `countRollSequences` (go `countRollSequences`, rust `count_roll_sequences`, ts `countRollSequences`); parameter `rollMax` → `runCaps` (rust `roll_max` → `run_caps`); `n` kept
- Core algorithm / difficulty: DP table `dp[j][c]` over (ending face, closing run length), run-extension shift plus fresh-run entry via grand-minus-row total / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=2, runCaps=[2,1,2,1,2,1]` → 33 (three doubles forbidden, by eye); `n=3, runCaps=[3,3,3,3,3,3]` → 216 (caps never bind); `n=8, runCaps=[1,3,1,3,2,2]` → 1092872 (mixed caps paring 6^8)
- Constraints: domain unchanged (`1 <= n <= 5000`, length 6, `1 <= runCaps[i] <= 15`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- The `rollMax` → `runCaps` rename was grepped first: neither `runCaps` nor
  `run_caps` appears as an identifier in any of the seven source solutions
  (their locals are `dp`, `nxt`, `totals`, `grand`, `limit`, `j`, `c`).
- Example values from `.localonly/wave-d-05/gen1223.py`; all three inputs are
  outside both the source publics and the hidden set.
