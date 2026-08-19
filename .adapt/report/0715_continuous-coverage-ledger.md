## 0715 — Range Module

- New id / title / slug: 715 / Continuous Coverage Ledger /
  `continuous-coverage-ledger`
- Old → new API: `RangeModule` → `CoverageLedger`; `addRange` → `addSpan`;
  `queryRange` → `coversSpan`; `removeRange` → `removeSpan`
- Core algorithm / difficulty: normalized disjoint intervals with
  binary-searched splicing / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - one ten-action session merges three spans, carves a gap, checks both
    fragments, then trims an outer boundary
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: Python and Java
- Figures: none
- Gates: check ✓; local verify ✓ (2/2 languages, 15/15 cases); sandbox
  pending central design batch; compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- An independent unit-span simulation confirms every public response.
- All 14 hidden cases are exact source copies except for class and method
  action-string renames.
