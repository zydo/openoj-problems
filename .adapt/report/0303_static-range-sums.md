## 0303 — Range Sum Query - Immutable

- New id / title / slug: 303 / Static Range Sums / `static-range-sums`
- Old → new API: class `NumArray` → `StaticRanges`; `sumRange` → `rangeSum`; parameters `nums`/`left`/`right` kept
- Core algorithm / difficulty: prefix-sum table, query = difference of two entries / H1 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,-2,7,1,-4,3]` with interior, whole-array, and single-element queries; `[-100000,100000]` at the value bounds cancelling to zero
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- Family naming decided up front for the four range-sum problems:
  **Static/Mutable × Range/Region Sums** — `0303_static-range-sums`,
  `0304_static-region-sums`, `0307_mutable-range-sums`,
  `0308_mutable-region-sums`; classes `StaticRanges`/`StaticRegions`/
  `MutableRanges`/`MutableRegions`, methods `rangeSum`/`regionSum`
  (`update` kept as plain vocabulary). Kinship is visible at a glance, the
  same way the stock-trading family reads.
