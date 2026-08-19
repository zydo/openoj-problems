## 0668 — Kth Smallest Number in Multiplication Table

- New id / title / slug: 668 / Product Grid Order Statistic / `product-grid-order-statistic`
- Old → new API: `findKthNumber` → `productGridKthValue`
  (Rust `find_kth_number` → `product_grid_kth_value`)
- Core algorithm / difficulty: binary search by row counts / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels and highlighted ranks updated; both SVGs rendered and
  visually inspected
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- The grids retain their dimensions while the new ranks move both highlighted
  order statistics.
- The 14 hidden cases are byte-for-byte data-equivalent to the source corpus.
