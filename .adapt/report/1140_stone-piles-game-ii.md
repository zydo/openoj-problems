## 1140 — Stone Game II

- New id / title / slug: 1140 / Stone Piles Game II / `stone-piles-game-ii`
- Old → new API: `stoneGameII` → `stonePilesGameII` (go `stonePilesGameII`, rust `stone_piles_game_ii`, ts `stonePilesGameII`); parameter `piles` kept
- Core algorithm / difficulty: suffix-sum game DP over (index, limit M) states / H3 (unchanged)
- Statement rewritten from spec: yes (mechanics identical, prose new; `M` presented as a growing limit)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,9,1,2]` → 12 (grab-the-maximum opener); `[2,3,4,5,6]` → 11 (take one, let the limit double, sweep the middle); `[1,1,1,1,60]` → 3 (Bob can always reserve the jackpot)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (tree run) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **Family naming.** This is the first of the stone-game series to be
  adapted (1406 stone-game-iii and 1686 stone-game-vi are still pending in
  other parts). "Stone Piles Game II" was chosen so the siblings can
  mirror it as "Stone Piles Game III/VI"; whoever takes them should check
  this ledger entry and stay in the family — families.json has no entry
  for this series yet, which may be worth fixing centrally.
- Explanations of optimal play were verified against a DP playout
  reconstruction (argmax line with both sides optimal), not asserted from
  the value alone — Example 3's "Bob can always reserve the 60" is a real
  property of that position, checked over Alice's two opening moves.
