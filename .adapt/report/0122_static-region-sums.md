## 122 — Range Sum Query 2D - Immutable

- New id / title / slug: 122 / Static Region Sums / `static-region-sums`
- Old → new API: class `NumMatrix` → `StaticRegions`; `sumRegion` → `regionSum`; parameters `row1`/`col1`/`row2`/`col2` → `top`/`left`/`bottom`/`right`; `matrix` kept
- Core algorithm / difficulty: integral image, four-lookup inclusion-exclusion query / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - 4×5 grid with interior block, whole grid, single cell, and column-strip queries; 2×2 corner-extremes grid
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 17/17 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- Second of the four range-sum family members (see the 0303 report for the
  family naming). The corner parameters renamed to `top/left/bottom/right`
  read noticeably better in the statement and starters than numbered
  `row1/col1/...`; case data is positional, so nothing else moved.
