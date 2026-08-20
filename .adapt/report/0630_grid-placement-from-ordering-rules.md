## 630 — Build a Matrix With Conditions

- New id / title / slug: 630 / Grid Placement From Ordering Rules / `grid-placement-from-ordering-rules`
- Old → new API: `buildMatrix` → `gridPlacement` (go `gridPlacement`, rust `grid_placement`, ts `gridPlacement`); parameters `k`, `rowConditions`, `colConditions` kept
- Core algorithm / difficulty: Kahn topological sort per axis, place `v` at (row_pos[v], col_pos[v]) / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no — figure dropped)
  - `k=3` rows `[[2,1],[1,3]]`, cols `[[1,3],[2,3]]` → `[[0,2,0],[1,0,0],[0,0,3]]`; `k=2` `[[2,1]]`/`[[1,2]]` → `[[0,2],[1,0]]`; `k=4` row cycle `[[2,3],[3,4],[4,2]]` → `[]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — the SVG's highlighted cells encode the old answer's cell positions (geometry, not labels), no renderer exists for this family, and a structure-preserving example would have reproduced the source's output matrix verbatim
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's statement example output (`[[3,0,0],[0,0,1],[0,2,0]]`) differs
  from its own public case expected value (the reference's Kahn output) — the
  "any matrix" promise rides on an exact comparator. My examples show the
  reference outputs so statement and public cases agree.
