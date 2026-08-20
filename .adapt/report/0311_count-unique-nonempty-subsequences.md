## 311 — Distinct Subsequences II

- New id / title / slug: 311 / Count Unique Nonempty Subsequences /
  `count-unique-nonempty-subsequences`
- Old → new API: `distinctSubseqII` → `countUniqueNonemptySubsequences`
  (Rust `distinct_subseq_ii` → `count_unique_nonempty_subsequences`)
- Core algorithm / difficulty: prefix DP with last-occurrence deduplication /
  H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes
  - mixed repeats, alternating repeats and one-letter repetition are covered
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 18/18 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Explicit subset enumeration with set deduplication independently confirms
  public counts `14`, `11`, and `4`.
- All hidden cases are byte-for-byte unchanged.
