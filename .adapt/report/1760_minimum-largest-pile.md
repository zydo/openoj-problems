## 1760 — Minimum Limit of Balls in a Bag

- New id / title / slug: 1760 / Minimum Largest Pile / `minimum-largest-pile`
- Old → new API: `minimumSize` → `minimumLargestPile` (go `minimumLargestPile`, rust `minimum_largest_pile`, ts `minimumLargestPile`); parameters `nums` → `piles`, `maxOperations` → `maxSplits` (rust `max_operations` → `max_splits`)
- Core algorithm / difficulty: binary search on the answer, feasibility `sum((v-1)//p) <= maxSplits` / H3 (unchanged)
- Statement rewritten from spec: yes — piles of stones split by moves, objective stated as "the number of stones in the largest pile"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7], maxSplits = 2 → 3` (single pile), `[10,3,6], maxSplits = 3 → 4` (budget binds between caps), `[4,9,2], maxSplits = 6 → 2` (all piles down to 2, but 1 unreachable)
- Constraints: domain unchanged, presentation rewritten (the source's combined `maxOperations, nums[i]` line split into separate lines)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The scenario noun changed (bags of balls → piles of stones); solution
  comments naming it were updated, and the loop local `balls` became `size`.
  `penalty` and `needed` stay as solution-internal names.
- `balls`/`size` rename checked against every source solution for collisions
  (locals there are `needed`, `penalty`, `total`, `balls`, `lo`, `hi`, `mid` —
  no clash).
