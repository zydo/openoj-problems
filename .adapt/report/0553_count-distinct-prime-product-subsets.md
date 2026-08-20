## 553 — The Number of Good Subsets

- New id / title / slug: 553 / Count Distinct-Prime Product Subsets / `count-distinct-prime-product-subsets`
- Old → new API: `numberOfGoodSubsets` → `countDistinctPrimeProductSubsets` (go `countDistinctPrimeProductSubsets`, rust `count_distinct_prime_product_subsets`, ts `countDistinctPrimeProductSubsets`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: frequency table over values ≤ 30, 0/1-knapsack over 10-bit prime masks, `2^k` factor for the ones, mod `10^9+7` / H3 (unchanged)
- Statement rewritten from spec: yes — "good subset" reframed as a choice of **positions** whose product factors into **distinct primes**; subsets distinguished by position, not value
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,3,5] → 7` (everything qualifies), `[1,2,3,10] → 10` (a one present, a composite value, doubling), `[4,9,25] → 0` (prime squares only)
- Constraints: domain unchanged (1–10⁵ length, values 1–30), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Family: near-twin of unadapted `2572_count-the-number-of-square-free-subsets` (square-free family). This one takes the "distinct primes" name; 2572 should take the **square-free** name (e.g. "Count Square-Free Subsets") — its semantic difference is that the trivial product 1 counts. Recorded for whoever adapts 2572
- Gates: check ✓ verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title deliberately avoids "square-free" to leave that name free for the
  2572 sibling (see family note above); the two titles stay recognizably
  related through the shared subset-product framing.
- Public expectations from an independent brute-force subset enumerator,
  cross-checked against a re-derived mask DP; third example returns 0, which
  the hidden set only exercises with single elements (`[4]`, `[25]`).
- Solution comments were already scenario-free (masks, frequencies,
  knapsack); only the two entry-point identifiers changed.
