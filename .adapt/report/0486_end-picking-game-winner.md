## 0486 — Predict the Winner

- New id / title / slug: 486 / End-Picking Game Winner / `end-picking-game-winner`
- Old → new API: `predictTheWinner` → `firstPlayerWins` (go `firstPlayerWins`, rust `first_player_wins`, ts `firstPlayerWins`); parameter `nums` kept
- Core algorithm / difficulty: interval DP over the mover's best score gap, one in-place array / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,9,3] → false` (a lone big value the second player scoops), `[6,12,4,10] → true` (traceable optimal line 10 then 12), `[5,5] → true` (tie goes to the first player)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The tie rule (first player wins on equal scores) is stated in the
  description and exercised by its own example, since the source leaned on
  it only in prose.
- Stone-game sequels (1140/1406/1686) are not adapted yet; when their chunks
  run, "game" naming there is free to follow its own course — no family
  coupling recorded here.
