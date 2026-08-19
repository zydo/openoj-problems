## 1335 — Minimum Difficulty of a Job Schedule

- New id / title / slug: 1335 / Cheapest Split of Work into Rounds / `cheapest-split-of-work-into-rounds`
- Old → new API: `minDifficulty` → `minEffort` (go `minEffort`, rust `min_effort`, ts `minEffort`); `jobDifficulty` → `weights`; `d` kept
- Core algorithm / difficulty: partition DP, prefix states + running block maximum / H3 (unchanged)
- Statement rewritten from spec: yes (jobs/days → work items/rounds, difficulty → cost)
- Examples newly constructed: yes (structure-preserving: yes — figure kept its 5+1 pill layout)
  - `[7,4,3,2,2,5] d=2` → 12 (7 and 5 pin the two rounds), `[7,2,9] d=4` → -1 (three items, four rounds), `[4,4,4] d=3` → 12 (one per round)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — pill values, totals line, and per-round captions; panel layout untouched
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Example 1 was chosen so the optimum is achieved by the figure's drawn
  5+1 split while every other split ties (the 7 and the 5 dominate
  regardless of cut position) — the statement says so explicitly.
- Source literals `[9,9,9]` and `[1,1,1]` sit below the stale gate's
  two-character threshold; only `[6,5,4,3,2,1]` needed avoiding.
- Brute-force cross-check enumerated every cut combination
  (`.localonly/wave-e-01/pub_1335.py`).
