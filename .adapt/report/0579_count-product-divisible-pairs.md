## 579 — Count Array Pairs Divisible by K

- New id / title / slug: 579 / Count Product-Divisible Pairs / `count-product-divisible-pairs`
- Old → new API: `countPairs` → `countProductDivisiblePairs` (go `countProductDivisiblePairs`, rust `count_product_divisible_pairs`, ts `countProductDivisiblePairs`); parameters `nums`, `k` kept
- Core algorithm / difficulty: bucket by gcd(v, k), pair divisor buckets with C(c,2) for self-pairs / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,6,2,8,4] k 6` (mixed factor coverage, 7 pairs), `[2,7,11] k 15` (zero answer), `[6,6,12] k 12` (self-pair inside one gcd bucket)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Reference cross-checked against a direct O(n²) pair scan on 400 random
  inputs — agreed everywhere.
- The tree-wide static check currently reports 18 failures, all in other
  shards' bundles (0547/0323 slug duplicate, 0773, 0881, 1000); none in
  this wave's keys.
- `countPairs` is a very common LeetCode method name across the corpus;
  the disambiguating title forced a longer method name than usual.
