## 0778 — Swim in Rising Water

- New id / title / slug: 778 / Minimum Peak Matrix Route /
  `minimum-peak-matrix-route`
- Old → new API: `swimInWater` → `minimumRoutePeak` (Go and TypeScript
  `minimumRoutePeak`, Rust `swim_in_water` → `minimum_route_peak`)
- Core algorithm / difficulty: minimax Dijkstra search / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - fresh 2x2 and 3x3 permutations with endpoint and interior bottlenecks
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped because all three source SVGs encode the replaced elevation
  layouts and routes
- Gates: check ✓; verify ✓ (7/7 languages, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- An independent threshold search with reachability BFS confirms both public
  minima.
- The 13 hidden cases are data-identical to the source corpus.
