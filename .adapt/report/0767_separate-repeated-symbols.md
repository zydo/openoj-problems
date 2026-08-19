## 0767 — Reorganize String

- New id / title / slug: 767 / Separate Repeated Symbols /
  `separate-repeated-symbols`
- Old → new API: `reorganizeString` → `separateRepeatedSymbols` (Go and
  TypeScript `separateRepeatedSymbols`, Rust `reorganize_string` →
  `separate_repeated_symbols`)
- Core algorithm / difficulty: frequency-ordered even-then-odd placement /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - one tied-frequency canonical arrangement and one infeasible dominant
    letter
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 17/17 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- An independent frequency sort and position traversal reconstructs both
  public outputs exactly.
- The 15 hidden cases are data-identical to the source corpus.
