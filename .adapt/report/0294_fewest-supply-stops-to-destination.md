## 294 — Minimum Number of Refueling Stops

- New id / title / slug: 294 / Fewest Supply Stops to Destination /
  `fewest-supply-stops-to-destination`
- Old → new API: `minRefuelStops` → `minimumSupplyStops` (Go and TypeScript
  `minimumSupplyStops`, Rust `min_refuel_stops` → `minimum_supply_stops`)
- Core algorithm / difficulty: deferred greedy selection with a max-heap of
  passed supplies / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh routes cover no-stop arrival, unreachable first supply, and a
    two-stop journey
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 21/21 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Independent stop-count dynamic programming confirms public results `0`,
  `-1`, and `2`.
- The 18 hidden cases are data-identical to the source corpus.
