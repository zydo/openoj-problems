## 0891 — Sum of Subsequence Widths

- New id / title / slug: 891 / Total Range Across All Selections /
  `total-range-across-all-selections`
- Old → new API: `sumSubseqWidths` → `totalSelectionRanges` (Go and
  TypeScript `totalSelectionRanges`, Rust `sum_subseq_widths` →
  `total_selection_ranges`)
- Core algorithm / difficulty: sorted combinatorial minimum/maximum
  contribution counting / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh arrays cover distinct and duplicate values
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Direct enumeration of all non-empty position selections independently
  confirms public totals `18` and `41`.
- The 13 hidden cases are data-identical to the source corpus.
