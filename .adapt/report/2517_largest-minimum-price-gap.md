## 2517 — Maximum Tastiness of Candy Basket

- New id / title / slug: 2517 / Largest Minimum Price Gap / `largest-minimum-price-gap`
- Old → new API: `maximumTastiness` → `largestMinGap` (go `largestMinGap`, rust `largest_min_gap`, ts `largestMinGap`); parameters `price`, `k` kept
- Core algorithm / difficulty: binary search the gap (upper-mid) + earliest-fit greedy over sorted prices / H3 (unchanged)
- Statement rewritten from spec: yes (coined term "tastiness" re-coined as the plain "minimum gap"; candy scenario kept — prices and baskets are the task)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,17,2,9,25,6]`, k=3 → 8 (witness 2, 17, 25), `[2,8,2,8,2]`, k=2 → 6 (repeated prices, distinct candies; k=2 = widest pair), `[6,6,6,10]`, k=3 → 0 (two distinct prices, k=3 forces a repeat — a subtler 0 than an all-equal shelf)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Sweeping the coined term out of the solutions needed a second rename pass
  beyond the identifier (`\btastiness\b` → "minimum gap" in comments), same
  discipline as 2262's "appeal" note.
- Example 3 deliberately avoids copying the source's all-equal shelf: two
  distinct prices with k=3 still forces a zero gap but exercises the greedy's
  skip logic on the way to 0.
