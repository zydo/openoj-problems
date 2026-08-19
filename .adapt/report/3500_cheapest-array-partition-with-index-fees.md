## 3500 — Minimum Cost to Divide Array Into Subarrays

- New id / title / slug: 3500 / Cheapest Array Partition With Index Fees / `cheapest-array-partition-with-index-fees`
- Old → new API: `minimumCost` → `cheapestPartition` (go `cheapestPartition`, rust `cheapest_partition`, ts `cheapestPartition`); parameters `nums`, `cost`, `k` kept as conventional identifiers
- Core algorithm / difficulty: suffix partition DP with the `k*i` index fee telescoped into a self-contained per-block charge / H4 (unchanged)
- Statement rewritten from spec: yes (the charging formula is restated with the whole-prefix subtlety called out)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `nums=[2,7,3] cost=[5,1,4] k=2` (split wins), `[6,2]/[3,9]/k=5` (no-cut wins under a large k), `[1,5,2,8]/[2,3,1,4]/k=3` (near-tie at one unit)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate treats `[l + 1]` in the source's cost formula as an
  identifying literal; writing `cost[l+1]` in the new formula tripped it.
  Rephrased with an ellipsis (`cost[l] + … + cost[r]`) — same mathematics.
- Expected values computed with the adapted `solution.py` and cross-checked
  against a brute force over all `2^(n-1)` partitions (all matched).
- The telescoping identity redistributes fee *between* blocks (per-block
  rewritten charges 78 + 76 vs the formula's 66 + 88) while preserving the
  total; the guide's worked trace states this explicitly so readers do not
  try to reconcile the two per-block.
