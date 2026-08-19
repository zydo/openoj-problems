## 0757 — Set Intersection Size At Least Two

- New id / title / slug: 757 / Fewest Points Hitting Every Range Twice /
  `fewest-points-hitting-every-range-twice`
- Old → new API: `intersectionSizeTwo` → `minimumDoubleCoveragePoints` (Go
  and TypeScript `minimumDoubleCoveragePoints`, Rust `intersection_size_two`
  → `minimum_double_coverage_points`)
- Core algorithm / difficulty: greedy selection by increasing right endpoint
  / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - overlapping chains, nested ranges, and endpoint-sharing ranges
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 18/18 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exhaustive enumeration of candidate point subsets independently confirms
  all three public minima.
- The 15 hidden cases are data-identical to the source corpus.
