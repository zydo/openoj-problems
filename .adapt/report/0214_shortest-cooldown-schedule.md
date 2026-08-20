## 214 — Task Scheduler

- New id / title / slug: 214 / Shortest Cooldown Schedule / `shortest-cooldown-schedule`
- Old → new API: `leastInterval` → `shortestCooldownSchedule` (go
  `shortestCooldownSchedule`, rust `shortest_cooldown_schedule`, ts
  `shortestCooldownSchedule`); parameter `tasks` → `jobs`, `n` kept
- Core algorithm / difficulty: closed form from two label statistics — the
  largest count and how many labels tie it / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["C","C","C","C","D","E"], n = 2` → 10, the idle-dominated regime
  - `["P","Q","P","R","Q","S"], n = 1` → 6, the gapless regime
  - `["G","G","G","H","H","J","K"], n = 3` → 9, partly filled
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- `tasks` → `jobs` was safe to do: no source solution declares a local `jobs`.
  The Rust reference has a local `tasks_len`, which a `\btasks\b` rename leaves
  alone (the underscore is a word character), so the staged source solution
  still compiles once the api map reaches the ledger. The adapted copy's local
  was renamed to `jobs_len` for consistency.
- Each example's answer was cross-checked two ways: the closed form and an
  independent greedy simulation with a cooldown queue, which agreed on all
  three.
- The reference solutions' comments carried the old vocabulary ("plain task
  count", "Letters tying the max"); those were retermed. Code untouched.
