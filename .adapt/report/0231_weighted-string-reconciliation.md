## 231 — Minimum ASCII Delete Sum for Two Strings

- New id / title / slug: 231 / Weighted String Reconciliation /
  `weighted-string-reconciliation`
- Old → new API: `minimumDeleteSum` → `reconcileDeletionCost` (Go and
  TypeScript `reconcileDeletionCost`, Rust `minimum_delete_sum` →
  `reconcile_deletion_cost`)
- Core algorithm / difficulty: prefix dynamic programming over weighted
  deletions / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - two reordered word pairs whose optimal retained subsequences are `tone`
    and `pane`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exhaustive subsequence enumeration independently confirms both public
  expectations.
- The 14 hidden cases are data-identical to the source corpus.
