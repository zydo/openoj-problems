## 561 — Partition Array Into Two Arrays to Minimize Sum Difference

- New id / title / slug: 561 / Most Balanced Even Split / `most-balanced-even-split`
- Old → new API: `minimumDifference` → `mostBalancedEvenSplit` (go `mostBalancedEvenSplit`, rust `most_balanced_even_split`, ts `mostBalancedEvenSplit`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: meet in the middle — half-split subset sums bucketed by count, sorted buckets, binary search for the complement nearest `total/2` in doubled-integer arithmetic / H4 (unchanged)
- Statement rewritten from spec: yes — "partition into two arrays" recast as two **groups** of `n` values with the smallest sum gap
- Examples newly constructed: yes (structure-preserving: yes — E1 keeps the 4-value/2+2 figure, E3 the 6-value/3+3 figure)
  - `[5,10,3,6] → 2` (groups [5,6]/[10,3]), `[6,-2] → 8` (forced n=1 split), `[5,-3,7,-4,2,-1] → 0` (mixed signs, exact balance)
- Constraints: domain unchanged (1 ≤ n ≤ 15, length 2n, values ±10⁷), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — both `example-1.svg` and `example-3.svg` keep their three-row group/nums/group geometry; text nodes re-pointed at the new values and splits
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Examples chosen for the figures: E1 keeps a nonzero gap on a 4-value
  array, E3 a zero gap with mixed signs — both label-editable, no geometry
  change. Split assignments ([5,6]/[10,3] and [5,-4,2]/[-3,7,-1]) were
  verified by the brute-force reference before writing them into figures.
- Publics cross-checked between a C(2n,n) brute force and a re-derived
  MITM; both agree on all three.
- solutions.md's worked example initially named the wrong half membership
  (`7` belongs to the first half); caught on re-trace and fixed before the
  gates ran.
- Distant cousin `0164_split-into-equal-sum-halves` (any-size groups, exact
  equality) is already adapted; titles stay distinguishable.
