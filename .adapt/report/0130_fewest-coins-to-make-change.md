## 130 — Coin Change

- New id / title / slug: 130 / Fewest Coins To Make Change / `fewest-coins-to-make-change`
- Old → new API: `coinChange` → `fewestCoins` (go `fewestCoins`, rust `fewest_coins`, ts `fewestCoins`)
- Core algorithm / difficulty: unbounded-knapsack DP and level-order BFS over totals — multi-solution, variants `dp` and `bfs` kept / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `coins = [1,4,5], amount = 8` (greedy trap: 4+4 beats 5+1+1+1+1), `[4,6], 7` (unmakeable), `[9], 0` (zero-target edge)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (per variant)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages × 2 variants, 17/17 cases each) compatibility ✓ stale ✓ overlap ✓
- Family: member I of the change-making pair with 0518 (see its report)

### Notes

- Multi-solution bundle: `solution_dp.*` / `solution_bfs.*` filenames and the
  `## dp` / `## bfs` solutions.md headings kept verbatim — the Solutions tab
  pairs variant to heading by token match.
- Both variants' guides were rewritten around `[1,4,5]/8` and `[4,6]/7`.
