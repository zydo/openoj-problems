## 119 — Longest Increasing Subsequence II

- New id / title / slug: 119 / Longest Increasing Subsequence With Bounded Steps / `longest-increasing-subsequence-with-bounded-steps`
- Old → new API: `lengthOfLIS` → `lengthOfBoundedStepLIS` (go `lengthOfBoundedStepLIS`, rust `length_of_bounded_step_lis`, ts `lengthOfBoundedStepLIS`); parameters `nums`, `k` kept
- Core algorithm / difficulty: value-space DP over a max segment tree, window `[x-k, x-1]` range-max + point update / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,1,4,7,2,5,9] k=3 → 4` (chain [1,4,7,9], rival chain blocked by the bound); `[2,4,6,8] k=1 → 1` (uniform gaps too wide); `[5,1,4,2,6] k=4 → 3`
  - cross-checked against an O(n²) DP brute force
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after reworking the opening away from the "given an integer array … find the longest subsequence" template)

### Notes

- Family: source `0300_longest-increasing-subsequence` (the prime) is unadapted;
  "Longest Increasing Subsequence" is an unavoidable generic term there, so this
  title keeps the family prefix and adds the distinguishing qualifier. `3231`
  (remove increasing subsequences) remains to be named recognizably.
- Overlap gate first failed at 7% from the boilerplate-shaped opening and a
  7-word run in Hint 3 ("a max segment tree indexed by value") — both reworked.
