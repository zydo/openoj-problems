## 232 — Subarray Product Less Than K

- New id / title / slug: 232 / Product-Bounded Segment Count /
  `product-bounded-segment-count`
- Old → new API: `numSubarrayProductLessThanK` →
  `countProductBoundedSegments` (Go and TypeScript
  `countProductBoundedSegments`, Rust `num_subarray_product_less_than_k` →
  `count_product_bounded_segments`)
- Core algorithm / difficulty: monotone sliding window / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - two four-value arrays exercise both a three-value valid window and
    repeated left-edge shrinking
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels, values, products, highlighted windows, and caption updated;
  SVG rendered and visually inspected
- Gates: check ✓; verify ✓ (7/7 languages, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Direct enumeration of every contiguous segment independently confirms both
  public counts.
- The 13 hidden cases are data-identical to the source corpus.
