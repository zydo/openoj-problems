## 739 — Find the Index of Permutation

- New id / title / slug: 739 / Rank of a Permutation / `rank-of-a-permutation`
- Old → new API: `getPermutationIndex` → `permutationRank` (go
  `permutationRank`, rust `permutation_rank`, ts `permutationRank`);
  parameter `perm` kept
- Core algorithm / difficulty: Lehmer-code digits weighted by
  precomputed factorials, ranks supplied by a Fenwick tree with `-1`
  removals / H3 (unchanged)
- Statement rewritten from spec: yes ("index in the sorted list" stated
  as a zero-based dictionary position)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,4,2,3]` → 4 (a late swap counted by block arithmetic instead of
    listing the 24 arrangements)
  - `[4,2,1,3]` → 20 (leading maximum dominating the count)
  - `[4,3,2,1]` → 23 (full reversal = `n! - 1`, the last position)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- At `n = 3` every bracketed triple in the source's worked list is a
  tracked stale literal, and two of the six are also hidden cases — the
  examples moved to `n = 4`, where counting-by-blocks explanations
  replace enumeration.
- The gate treats prose enumerations ("1,2,3,4 and 1,2,4,3") as safe
  because literal tracking requires brackets; explanations exploit that
  to stay readable.
