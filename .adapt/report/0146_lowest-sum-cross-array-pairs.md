## 146 — Find K Pairs with Smallest Sums

- New id / title / slug: 146 / Lowest-Sum Cross-Array Pairs /
  `lowest-sum-cross-array-pairs`
- Old → new API: `kSmallestPairs` → `lowestSumPairs` (go
  `lowestSumPairs`, rust `lowest_sum_pairs`, ts `lowestSumPairs`)
- Core algorithm / difficulty: min-heap merge of sorted pair rows / H3
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - distinct negative and positive values with five results; duplicate first
    values exercising equal-sum ordering
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- The exact comparator makes the source's tie-break part of the judged
  semantics. The duplicate-value example checks that indexed choices remain
  separate even when the returned value pairs are identical.
- Static validation used `check.py`'s own `check_bundle` entry point plus a
  new-id/new-slug uniqueness scan. The full tree still has unrelated failures
  recorded by the preceding sweep.
