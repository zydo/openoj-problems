## 578 — Count Good Triplets in an Array

- New id / title / slug: 578 / Count Same-Order Triplets / `count-same-order-triplets`
- Old → new API: `goodTriplets` → `countSameOrderTriplets` (go `countSameOrderTriplets`, rust `count_same_order_triplets`, ts `countSameOrderTriplets`); parameters `nums1`, `nums2` kept
- Core algorithm / difficulty: Fenwick tree over `nums2` positions, sweep `nums1`, multiply common predecessors by common successors at each middle value / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,3,0,2]` vs `[0,2,1,3]` → 0 (no triplet survives), `[2,4,0,1,3]` vs `[4,0,2,3,1]` → 2 (two listable triplets), `[0,5,2,4,1,3]` vs `[2,0,4,1,5,3]` → 8 (explained via the middle-value decomposition the solution uses)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Reference cross-checked against an O(n³) enumerator on 300 random
  permutation pairs — agreed everywhere.
- Example 3's explanation (4 → 2·2, 5 → 1·1, 1 → 3·1) was verified by
  walking the Fenwick sweep by hand before writing; it doubles as a
  mini-rehearsal of the solutions.md walkthrough.
- Writing example explanations: enumerate the qualifying triplets with a
  script first, then narrate — narrating while guessing produced a garbled
  first draft caught on review.
