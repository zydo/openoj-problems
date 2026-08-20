## 274 — Bus Routes

- New id / title / slug: 274 / Fewest Transit Lines /
  `fewest-transit-lines`
- Old → new API: `numBusesToDestination` → `fewestTransitLines` (Go and
  TypeScript `fewestTransitLines`, Rust `num_buses_to_destination` →
  `fewest_transit_lines`)
- Core algorithm / difficulty: breadth-first search over stops with line
  expansion deduplication / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh networks cover a four-line chain, a direct trip, and disconnected
    components
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 22/22 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- An independent breadth-first search confirms public results `4`, `1`, and
  `-1`.
- The 19 hidden cases are data-identical to the source corpus.
