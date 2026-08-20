## 607 — Selling Pieces of Wood

- New id / title / slug: 607 / Wood Cutting Revenue / `wood-cutting-revenue`
- Old → new API: `sellingWood` → `woodCuttingRevenue` (go `woodCuttingRevenue`, rust `wood_cutting_revenue`, ts `woodCuttingRevenue`); parameters `m`, `n`, `prices` kept (conventional)
- Core algorithm / difficulty: 2D DP over sheet sizes, `dp[h][w] = max(whole price, every first cut's halves)`, midpoint-limited split loops / H3 (unchanged)
- Statement rewritten from spec: yes — sheet-and-grain vocabulary, "cut across the whole sheet", rotation ban stated in one line
- Examples newly constructed: yes (structure-preserving: yes — both figures keep the source's cut layouts, prices and totals relabeled)
  - `3 x 5, [[2,2,9],[2,1,4],[1,4,3]] → 25` (two 2x2 + 2x1 + 1x4, 1x1 corner unsold), `4 x 6, [[3,2,12],[1,4,5],[4,1,6]] → 41` (three 3x2 + 1x4, rotation note carried by the 4x1 price)
- Constraints: domain unchanged (m, n ≤ 200, ≤ 2·10⁴ distinct shapes, prices ≤ 10⁶), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (piece prices, sum lines, comments — geometry untouched)
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Kept the source's piece layouts deliberately: the figures' cut
  geometry (rect groups) is the expensive part to redraw, and only the
  per-piece prices and the total are data. Choosing prices that make the
  same layout optimal for the new example reduced both figures to text
  edits — the ADAPT.md structure-preserving rule applied at the level of
  the *cut plan*, not just the sheet dimensions.
- Example 2 keeps a `4 x 1` listing purely to preserve the
  no-rotation teaching point from the source (its price 6 also loses to
  the 41 layout, so it doubles as a decoy).
