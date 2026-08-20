## 290 — Minimum Cost to Hire K Workers

- New id / title / slug: 290 / Minimum Proportional Group Cost /
  `minimum-proportional-group-cost`
- Old → new API: `mincostToHireWorkers` → `minimumProportionalGroupCost` (Go
  and TypeScript `minimumProportionalGroupCost`, Rust
  `mincost_to_hire_workers` → `minimum_proportional_group_cost`)
- Core algorithm / difficulty: ratio-ordered sweep with a max-heap of unit
  counts / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh candidate sets produce fractional and integral optimum costs
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 17/17 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exhaustive subset enumeration with exact fractions independently confirms
  public costs `64/3` and `65`.
- The 15 hidden cases are data-identical to the source corpus.
