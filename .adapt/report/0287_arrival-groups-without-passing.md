## 287 — Car Fleet

- New id / title / slug: 287 / Arrival Groups Without Passing /
  `arrival-groups-without-passing`
- Old → new API: `carFleet` → `countArrivalGroups` (Go and TypeScript
  `countArrivalGroups`, Rust `car_fleet` → `count_arrival_groups`)
- Core algorithm / difficulty: descending-position scan of monotone arrival
  times / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh starts and velocities cover two merges, endpoint equality, and
    three separated arrivals
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exact rational arrival-time comparisons independently confirm public counts
  `2`, `1`, and `3`.
- The 13 hidden cases are data-identical to the source corpus.
