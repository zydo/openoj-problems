## 38 — Best Time to Buy and Sell Stock III

- New id / title / slug: 38 / Stock Trading, Two Sales / `stock-trading-two-sales`
- Old → new API: `maxProfit` → `stockTradingTwoSales` (go `stockTradingTwoSales`, rust `stock_trading_two_sales`, ts `stockTradingTwoSales`)
- Core algorithm / difficulty: four-state wealth machine, one sweep, O(1)
  space / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,4,2,6,3,8]` → 10 (two trades), `[2,3,4,5]` → 3 (second trade unused),
    `[9,7,7,2]` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Follow-up kept (it is the bridge to the `k` sibling) but reworded.
