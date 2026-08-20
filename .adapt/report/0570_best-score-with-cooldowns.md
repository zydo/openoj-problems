## 570 — Solving Questions With Brainpower

- New id / title / slug: 570 / Best Score With Cooldowns / `best-score-with-cooldowns`
- Old → new API: `mostPoints` → `bestScore` (go `bestScore`, rust `best_score`, ts `bestScore`); parameter `questions` kept; the scenario word `brainpower` → `cooldown` throughout (statement, guide, solutions, figure)
- Core algorithm / difficulty: backward DP, dp[i] = max(dp[i+1], points + dp[i + cooldown + 1]) with zero sentinel / H2 (unchanged)
- Statement rewritten from spec: yes — the solve/skip rules given as a two-branch list with a fresh inline demo
- Examples newly constructed: yes (structure-preserving: **yes** for the solution figure — 4 questions, solve-jump still from i = 0 to i = 3, dp row same shape)
  - `[[6,2],[5,3],[5,4],[4,5]] → 10`, `[[2,1],[4,2],[6,3],[8,4],[10,5]] → 14` (later, richer questions reward skipping), `[[7,3]] → 7`
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (≤ 10⁵ questions, values 1..10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — `solution-backward-dp.svg` cell values, dp row, arc annotation, and caption all swapped to the new data; geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Scenario terminology renames reach *inside* the solutions: four languages
  unpack a local named `brainpower`, which the cooldown rename replaces
  (word-boundary perl pass). The compatibility gate is untouched by this —
  it stages the source's own locals. go/cpp/rust already said "lockout".
- The dp-walk figure constrained the example tightly: brainpower[0] = 2 to
  keep the arc from cell 0 to cell 3, dp[1] = dp[2] to keep the symmetric
  skip arrows honest. Choosing the example against the figure kept the edit
  to text nodes and two numbers in the arc/caption.
