## 0188 — Best Time to Buy and Sell Stock IV

- New id / title / slug: 188 / Stock Trading, K Sales / `stock-trading-k-sales`
- Old → new API: `maxProfit` → `stockTradingKSales` (go `stockTradingKSales`, rust `stock_trading_k_sales`, ts `stockTradingKSales`)
- Core algorithm / difficulty: per-trade DP with the k ≥ n/2 unlimited
  shortcut / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `k=2, [2,6,1,3,5,0,4]` → 8 (cap binds: a third trade would pay), `k=1,
    [3,1,4,2,6]` → 5 (single-trade view of a two-hop climb)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter order (`k` before `prices`) kept from the source wire format.
