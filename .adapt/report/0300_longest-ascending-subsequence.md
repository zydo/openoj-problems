## 0300 — Longest Increasing Subsequence

- New id / title / slug: 300 / Longest Ascending Subsequence / `longest-ascending-subsequence`
- Old → new API: `lengthOfLIS` → `longestAscendingLength` (go `longestAscendingLength`, rust `longest_ascending_length`, ts `longestAscendingLength`); parameter `nums` kept
- Core algorithm / difficulty: patience method with binary-searched tails; quadratic DP-by-endings alternative / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,1,3,9,4,2,11] → 4`, `[5,5,5] → 1` (strictness, all equal), `[12,8,15,14,9,16] → 3` (two distinct optimal chains)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (14/14 language-variants, 18/18 cases each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title keeps the generic mathematical vocabulary but not LeetCode's exact
  four-word string: "ascending" for "increasing", in the bank's
  adjective-first house style (cf. `Longest Duplicate-Free Substring`,
  `Largest Subarray Sum`). The statement defines "subsequence" itself rather
  than assuming it.
- The guide's tails-array walkthrough had to be re-derived on the new data and
  this is where hand-computation would have bitten: my first draft of the trace
  contradicted the algorithm (wrong append/replace calls) and was redone by
  stepping the reference mentally against its own code. Worked traces in
  solutions.md are example data too — verify them like expected values.
- "increasing subsequence" also lived in solution comments across all 14 files;
  now "ascending subsequence" throughout.
