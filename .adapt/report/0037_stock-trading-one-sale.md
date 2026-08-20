## 37 — Best Time to Buy and Sell Stock

- New id / title / slug: 37 / Stock Trading, One Sale / `stock-trading-one-sale`
- Old → new API: `maxProfit` → `stockTradingOneSale` (go `stockTradingOneSale`, rust `stock_trading_one_sale`, ts `stockTradingOneSale`)
- Core algorithm / difficulty: one sweep carrying the running minimum, one
  sell-candidate per day / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,2,7,1,5]` → 5 (best sell is not the global max, best buy not the
    global min), `[8,6,6,3]` → 0 (never rises)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Family framing shared with 0123/0188/0309: "price of one share on day `i`",
  "buy on some day and sell on a strictly later day", "never hold more than
  one share", "a plan that never trades earns `0`".
