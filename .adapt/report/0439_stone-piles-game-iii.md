## 439 — Stone Game III

- New id / title / slug: 439 / Stone Piles Game III / `stone-piles-game-iii`
- Old → new API: `stoneGameIII` → `stonePilesGameIII` (go `stonePilesGameIII`, rust `stone_piles_game_iii`, ts `stonePilesGameIII`); parameter `stoneValue` → `piles`
- Core algorithm / difficulty: backward suffix DP on the score difference, `dp[i] = max(take_j - dp[j+1])` / H3 (unchanged)
- Statement rewritten from spec: yes (mechanics identical, prose new; Alice/Bob kept — the judged output strings name them)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,-1,4,8]` → Bob (least-bad opening concedes the 8), `[3,-2,-7,5]` → Alice (bank 3, trap Bob in negatives), `[-2,-2,-1,1]` → Tie (nibble one pile each)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **Family naming honored:** followed 1140's standing instruction — "Stone
  Piles Game II" → this bundle is "Stone Piles Game III", parameter unified
  to `piles` (1140 uses `piles` too). 1686 (Stone Game VI) is still pending
  elsewhere and should become "Stone Piles Game VI" to match.
- The Tie example is negative-valued; an exhaustive search over small
  positive/negative rows found no all-nonnegative tie shorter than 4 piles
  that plays out over 3+ moves, so the "nobody wants to reach" story is the
  honest tie for this game.
- Explanations verified against an independent memoized solver plus an argmax
  playout reconstruction (both openings' consequences hand-checked for Ex. 1).
