## 2034 — Stock Price Fluctuation

- New id / title / slug: 2034 / Correctable Price Log / `correctable-price-log`
- Old → new API: class `StockPrice` → `PriceLog`; `update` → `record`, `current` → `latest`, `maximum` → `highest`, `minimum` → `lowest`; parameters `timestamp`, `price` kept (conventional)
- Core algorithm / difficulty: map of moment → live price + running latest moment, twin lazy heaps for the extrema / H3 (unchanged)
- Statement rewritten from spec: yes — "stock market volatility" backstory replaced by a plain correcting-feed description
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - out-of-order records, a correction that drops the maximum, and a newer moment taking `latest`; then a single moment corrected away and back to its original price
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓

### Notes

- All four method names were renamed together so the API reads as one
  coherent `PriceLog` vocabulary (`record`/`latest`/`highest`/`lowest`)
  rather than four disconnected swaps; candidate names were grepped against
  the source solutions first (none appear, `latest_timestamp` is a compound
  and unaffected by the word-boundary rename).
