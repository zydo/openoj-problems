## 226 — Partition to K Equal Sum Subsets

- New id / title / slug: 226 / Split Into K Equal-Sum Groups / `split-into-k-equal-sum-groups`
- Old → new API: `canPartitionKSubsets` → `hasKEqualSumGroups` (go `hasKEqualSumGroups`, rust `has_k_equal_sum_groups`, ts `hasKEqualSumGroups`)
- Core algorithm / difficulty: memoized bitmask fill of one group at a time / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `[7,3,6,2,5,4,3], k=3 → true`, `[5,5,4,4,3,3], k=4 → false` (total divides, deal still impossible), `[8,2,6], k=1 → true`
- Constraints: domain unchanged, presentation rewritten
- Parameters: `nums`, `k` kept (conventional)
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Sibling naming: `0164_split-into-equal-sum-halves` (from Partition Equal Subset
  Sum) was already adapted, so this one was named to sit beside it — "halves"
  → "K equal-sum groups", `hasEqualSumSplit` → `hasKEqualSumGroups`. The pair is
  not in `families.json`; it should be, so a later wave does not improvise a
  third unrelated name for 0473/0416-adjacent problems.
- Example 2 was chosen so the false case is not the trivial "total is not
  divisible" one — divisibility passes and the deal still fails, which is the
  case a naive check gets wrong.
