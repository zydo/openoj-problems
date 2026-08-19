## 2812 — Find the Safest Path in a Grid

- New id / title / slug: 2812 / Safest Route Across a Hazard Grid / `safest-route-across-a-hazard-grid`
- Old → new API: `maximumSafenessFactor` → `maximumClearance` (go `maximumClearance`, rust `maximum_clearance`, ts `maximumClearance`); parameter `grid` kept
- Core algorithm / difficulty: multi-source BFS distance table + binary search on a connectivity threshold / H3 (unchanged)
- Statement rewritten from spec: yes — "safeness factor" → "clearance"; thieves → hazards
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[0,0,1],[0,0,0],[1,0,0]] → 1` (hazards near both corners pinch every route), `[[0,0,0,1],…,] → 3` (single hazard, hug the far edges), `[[0,1,0],[1,0,1],[0,1,0]] → 0` (start boxed in by hazards)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (4 of 4) — grid fills, drawn routes, deleted-cell crosses and dashed distance lines encode the example data geometrically; no renderer exists for the family (phase-two candidates)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Comment terminology in the kept solutions was updated thief→hazard,
  safeness→clearance (prose only; no identifier besides the method changed).
- Both 2×2 "hazard on a corner" grids are already hidden cases, so a tiny
  answer-0 example had to come from a 3×3 box instead.
