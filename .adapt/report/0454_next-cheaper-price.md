## 454 — Final Prices With a Special Discount in a Shop

- New id / title / slug: 454 / Next Cheaper Price / `next-cheaper-price`
- Old → new API: `finalPrices` → `discountedPrices` (go `discountedPrices`, rust `discounted_prices`, ts `discountedPrices`); parameter `prices` kept
- Core algorithm / difficulty: monotonic stack of indices pending their next-smaller-or-equal discount / H2 (unchanged)
- Statement rewritten from spec: yes — the discount rule stated directly over indices instead of the shop-buying narration
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7,3,9,4,10,2] → [4,1,5,2,8,2]` (one value settles several), `[3,5,8,11] → [3,5,8,11]` (no discounts), `[5,2,2] → [3,0,2]` (equality grants the discount)
- Constraints: domain unchanged (1 ≤ length ≤ 500, 1 ≤ prices[i] ≤ 1000), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- None beyond the pilot's; a plain function bundle with no figures.
