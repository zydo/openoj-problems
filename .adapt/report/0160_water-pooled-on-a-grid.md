## 160 — Trapping Rain Water II

- New id / title / slug: 160 / Water Pooled On A Grid / `water-pooled-on-a-grid`
- Old → new API: `trapRainWater` → `pooledOnGrid` (go `pooledOnGrid`, rust `pooled_on_grid`, ts `pooledOnGrid`); `heightMap` → `heights` (rust `height_map` → `heights`)
- Core algorithm / difficulty: min-heap flood inward from the border ring, effective-height pushes / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - 4×4 with two separate 2-dips → 6, 4×5 rim-of-4s bowl with a raised center → 16, single row → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (all three — `example-1.svg`, `example-2.svg`, `solution-border-heap.svg`; isometric drawings where bar geometry encodes the data, no renderer)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Family naming honored: 0042 became "Water Pooled Between Bars" (`pooled`), and
  its report pre-named this sibling "Water Pooled On A Grid" — kept as
  suggested, with `pooledOnGrid` extending the same stem. Unlike 0042, the
  source entrypoints here are three distinct spellings, so a camelCase name
  costs nothing.
- Kinship stays visible in MAPPING.md by title; the two problems are otherwise
  unrelated algorithms (two pointers vs border-heap flood).
- The elevations phase-2 note from 0042 applies doubly: an isometric renderer
  would serve both bundles, but the drawings encode heights as geometry, so
  all three figures were dropped per the hard rule.
