## 47 — Gas Station

- New id / title / slug: 47 / Circular Route Start / `circular-route-start`
- Old → new API: `canCompleteCircuit` → `circularRouteStart` (go `circularRouteStart`, rust `circular_route_start`, ts `circularRouteStart`); parameter `gas` → `supply`, `cost` kept
- Core algorithm / difficulty: greedy one pass, total surplus plus candidate reset / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — 5 stops, three failing candidates, winner at index 3, so the ring figure needed only label edits)
  - `supply=[5,2,6,9,3], cost=[6,5,8,5,1] → 3`, `supply=[4,1,2], cost=[2,5,4] → -1` (total short), `supply=[6,0,4,3], cost=[1,4,2,5] → 0` (first index already works)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`figures/solution-circuit-tanks.svg`)
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 14/14 cases)

### Notes

- The figure is a pentagon ring whose geometry encodes only *n* and which
  candidates fail, not the values, so it survives a label edit provided the new
  example keeps `n = 5`, a total of exactly `0`, and per-stop differences that
  strike out candidates 0, 1 and 2 individually. The new differences are
  `-1, -3, -2, +4, +2`; the tank readings along the winning circuit
  (`4, 6, 5, 2, 0`) were recomputed, not carried over.
- `supply`/`cost` keeps the pair readable; renaming only `gas` avoids a
  contrived second name for a value the statement genuinely calls a cost.
