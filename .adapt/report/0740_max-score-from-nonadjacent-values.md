## 0740 — Delete and Earn

- New id / title / slug: 740 / Maximum Score from Nonadjacent Values /
  `max-score-from-nonadjacent-values`
- Old → new API: `deleteAndEarn` → `maxNonadjacentValueScore` (Go and
  TypeScript `maxNonadjacentValueScore`, Rust `delete_and_earn` →
  `max_nonadjacent_value_score`)
- Core algorithm / difficulty: rolling dynamic programming over weighted
  distinct values / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - two frequency-weighted selections exercise both a value gap and competing
    consecutive labels
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exhaustive enumeration of every subset of distinct public values confirms
  both optimum scores.
- The 14 hidden cases are data-identical to the source corpus.
