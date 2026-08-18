## 0309 — Best Time to Buy and Sell Stock with Cooldown

- New id / title / slug: 309 / Stock Trading With Cooldown / `stock-trading-with-cooldown`
- Old → new API: `maxProfit` → `stockTradingWithCooldown` (go `stockTradingWithCooldown`, rust `stock_trading_with_cooldown`, ts `stockTradingWithCooldown`)
- Core algorithm / difficulty: three-state machine, cached yesterday's sale /
  H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,3,2,4]` → 3 (the cheap day falls inside the forced pause), `[7]` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- First overlap failure of the chunk (12%): the shared family opening
  ("You are given an array `prices` where `prices[i]` is the price of …")
  plus three hint rewrites that followed the source's reasoning sentences too
  closely. Short statements are ratio-sensitive: one 8-word shared run in the
  opening is ~4% by itself. Fixed by varying the opening punctuation
  ("an array `prices`; `prices[i]` is …") and rewriting all three hints from
  the insight alone. Later short statements should budget for this up front.
