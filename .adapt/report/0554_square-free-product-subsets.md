## 554 — Count the Number of Square-Free Subsets

- New id / title / slug: 554 / Square-Free Product Subsets / `square-free-product-subsets`
- Old → new API: `squareFreeSubsets` → `countSquareFreeProducts` (go `countSquareFreeProducts`, rust `count_square_free_products`, ts `countSquareFreeProducts`); parameter `nums` kept
- Core algorithm / difficulty: bitmask DP over the ten primes ≤ 30, run per distinct value with multiplicity; `1`s multiply by `2^ones`; empty subset subtracted / H4 (unchanged)
- Statement rewritten from spec: yes ("square-free" kept — the mathematical term, like Binary Search)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,6,7]` → `7` (every product square-free), `[1,1,4]` → `3` (unusable 4, ones double), `[1,2,2]` → `5` (at most one copy of an equal value)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Brute force enumerates all `2^n` index subsets with a prime-mask
  disjointness test — it validated the reference on all three examples.
- `[6,10,15]` (pairwise-sharing primes, answer 3) looked like a natural
  example but is a hidden case; the convention file's "check public inputs
  against hidden cases" rule caught it.
