## 0714 — Best Time to Buy and Sell Stock with Transaction Fee

- New id / title / slug: 714 / Stock Trading With Fees / `stock-trading-with-fees`
- Old → new API: `maxProfit` → `stockTradingWithFees` (go
  `stockTradingWithFees`, rust `stock_trading_with_fees`, ts
  `stockTradingWithFees`); parameters `prices` and `fee` kept
- Core algorithm / difficulty: two-state wealth machine (cash / holding), one
  sweep, O(1) space / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,9,3,7,1,6], fee 2` → 10 (three separate trades each clear the fee),
    `[5,11,6,12], fee 8` → 0 (fee exceeds the widest gap, so sitting out wins),
    `[3,8,2,10], fee 1` → 11 (two fees beat holding through the dip)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 23/23 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- Family naming: `.adapt/families.json` lists the `stock` family without this
  member, but the four already-adapted siblings (`Stock Trading, One Sale`,
  `…, Two Sales`, `…, K Sales`, `Stock Trading With Cooldown`) fix the pattern.
  `Stock Trading With Fees` follows the `With Cooldown` form, which also lets
  the method name equal the title in camel case, as 0309 does.
- The source's follow-up is kept (reworded); it points at the fee-free
  unlimited-trading sibling.
