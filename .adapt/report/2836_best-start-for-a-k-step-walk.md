## 2836 — Maximize Value of Function in a Ball Passing Game

- New id / title / slug: 2836 / Best Start for a k-Step Walk / `best-start-for-a-k-step-walk`
- Old → new API: `getMaxFunctionValue` → `bestWalkSum` (go `bestWalkSum`, rust `best_walk_sum`, ts `bestWalkSum`); parameters `receiver`, `k` kept (conventional)
- Core algorithm / difficulty: binary lifting, endpoint + index-sum tables per power of two / H3 (unchanged)
- Statement rewritten from spec: yes — players/ball → token/cells on a forwarding array
- Examples newly constructed: yes (structure-peserving: n/a — no figure)
  - `[1,2,0], k=4 → 6` (pure 3-cycle), `[1,2,3,1], k=4 → 11` (tail into a ring), `[1,0], k=10¹⁰ → 5000000001` (alternating pair, 64-bit answer)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The large-k example's expected value is easy to get wrong by hand
  (5000000001, not 50000000000 — k+1 visits, evens win by one); computed by
  the reference, as always.
