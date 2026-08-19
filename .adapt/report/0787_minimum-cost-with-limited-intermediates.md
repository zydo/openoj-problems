## 0787 — Cheapest Flights Within K Stops

- New id / title / slug: 787 / Minimum Cost with Limited Intermediates /
  `minimum-cost-with-limited-intermediates`
- Old → new API: `findCheapestPrice` → `minimumLimitedRouteCost` (Go and
  TypeScript `minimumLimitedRouteCost`, Rust `find_cheapest_price` →
  `minimum_limited_route_cost`)
- Core algorithm / difficulty: edge-budgeted Bellman-Ford and
  budget-augmented Dijkstra / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh weighted networks contrast one permitted intermediate with a direct
    route requirement
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped because all three source SVGs encode the replaced networks,
  costs, and highlighted routes
- Gates: check ✓; verify ✓ (14/14 solution variants, 15/15 cases); sandbox
  n/a; compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Independent exact-edge dynamic programming confirms all three public costs.
- The 12 hidden cases are data-identical to the source corpus.
