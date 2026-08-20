## 0805 — Split Array With Same Average

- New id / title / slug: 805 / Equal-Mean Bipartition /
  `equal-mean-bipartition`
- Old → new API: `splitArraySameAverage` → `canSplitEqualMean` (Go and
  TypeScript `canSplitEqualMean`, Rust `split_array_same_average` →
  `can_split_equal_mean`)
- Core algorithm / difficulty: meet-in-the-middle subset sums grouped by
  cardinality / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh arrays cover a valid equal-sum three-versus-three split and an
    impossible mean denominator
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exhaustive subset enumeration independently confirms both public results.
- The 14 hidden cases are data-identical to the source corpus.
