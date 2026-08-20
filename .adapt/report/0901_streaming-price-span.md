## 0901 — Online Stock Span

- New id / title / slug: 901 / Streaming Price Span /
  `streaming-price-span`
- Old → new API: `StockSpanner` → `PriceSpanTracker`; `next` → `record`
- Core algorithm / difficulty: monotonic stack with compressed suffix lengths /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes
  - a singleton and a mixed stream cover equal prices, resets and full absorption
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: Python and Java
- Figures: none
- Gates: check ✓; verify ✓ (2/2 solutions, 16/16 cases); sandbox pending
  (batch); compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Direct backward scans independently confirm public outputs `[1]` and
  `[1, 1, 2, 3, 1, 6]`.
- Hidden data is unchanged except for the sanctioned design action renames.
