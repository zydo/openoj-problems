## 293 — Advantage Shuffle

- New id / title / slug: 293 / Canonical Maximum-Win Permutation /
  `canonical-maximum-win-permutation`
- Old → new API: `advantageCount` → `canonicalWinningPermutation` (Go and
  TypeScript `canonicalWinningPermutation`, Rust `advantage_count` →
  `canonical_winning_permutation`)
- Core algorithm / difficulty: greedy successor selection from a sorted
  multiset implemented with a Fenwick tree / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh arrays cover sacrifices, multiple wins, and duplicate values
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- An independent sorted-list multiset implementation confirms both canonical
  output permutations.
- The 13 hidden cases are data-identical to the source corpus.
