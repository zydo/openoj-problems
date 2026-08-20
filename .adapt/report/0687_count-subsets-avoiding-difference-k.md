## 687 — Count the Number of K-Free Subsets

- New id / title / slug: 687 / Count Subsets Avoiding Difference k / `count-subsets-avoiding-difference-k`
- Old → new API: `countTheNumOfKFreeSubsets` → `countSubsetsAvoidingDiff` (go `countSubsetsAvoidingDiff`, rust `count_subsets_avoiding_diff`, ts `countSubsetsAvoidingDiff`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: chain values into step-k arithmetic sequences, count independent sets of each path with a Fibonacci recurrence, multiply across chains / H3 (unchanged)
- Statement rewritten from spec: yes — "k-Free subset" → "admissible subset" (no two elements differ by exactly k)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7,3,5], k=2 → 5` (single chain), `[4,1,7,9], k=3 → 10` (chain × singleton product), `[2,6,11], k=8 → 8` (k beyond every gap, 2ⁿ)
- Constraints: domain unchanged (1 ≤ n ≤ 50, 1 ≤ values ≤ 1000, 1 ≤ k ≤ 1000, distinct elements), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source stated distinctness only in the description; the adapted
  statement keeps it (as a constraint bullet) since dropping it would change
  the spec.
