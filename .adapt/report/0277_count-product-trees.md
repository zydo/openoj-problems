## 277 — Binary Trees With Factors

- New id / title / slug: 277 / Count Product Trees / `count-product-trees`
- Old → new API: `numFactoredBinaryTrees` → `countProductTrees` (go `countProductTrees`, rust `count_product_trees`, ts `countProductTrees`); parameter `arr` → `values`
- Core algorithm / difficulty: sort ascending, count trees per root label, `dp[v] = 1 + Σ dp[a]·dp[b]` over ordered factor pairs / H3 (unchanged)
- Statement rewritten from spec: yes — states the leaf-or-exactly-two-children rule and the left/right distinction up front, both of which the source leaves to the examples
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `[2,3,6] → 5` (mirror pair), `[2,4,8] → 8` (nested subtree choice), `[3,5,7] → 3` (no factorizations)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n-a compatibility ✓ stale ✓ overlap ✓

### Notes

- `arr` → `values` was checked against every source solution first: four of them
  declare a local named `value` (singular) in a range-for over `dp`, and the
  ledger rename is word-boundary anchored, so `value` is untouched. Had the
  candidate been `value` rather than `values`, the compatibility gate would have
  been unfixable — the exact 0587 trap, one letter away.
- Example 2 is the one that earns its place: `[2,4,8]` is the smallest input where
  a child's own subtree count exceeds 1, so it shows why the recurrence multiplies
  rather than adds.
