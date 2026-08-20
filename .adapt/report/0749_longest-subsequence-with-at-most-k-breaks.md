## 749 — Find the Maximum Length of a Good Subsequence II

- New id / title / slug: 749 / Longest Subsequence With at Most K Breaks / `longest-subsequence-with-at-most-k-breaks`
- Old → new API: `maximumLength` → `longestWithBreaks` (go `longestWithBreaks`, rust `longest_with_breaks`, ts `longestWithBreaks`); parameters `nums`, `k` kept
- Core algorithm / difficulty: DP over (breaks spent, ending value) with per-level top-two maxima, O(n·k) / H4 (unchanged)
- Statement rewritten from spec: yes (LeetCode's "good subsequence" replaced by an explicit break-count condition; the "II" suffix dropped since the small-n "I" variant is not in the bank)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,4,7,4,9] k=1` → 4, `[5,8,5,5,8] k=0` → 3 (no breaks), `[2,9,2,9,2] k=2` → 4 (alternating, budget binds)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The source's k=0 explanation "[1,1]" is below the stale gate's literal threshold; the input arrays are the real constraints and all three were changed.
- Example expectations were cross-checked with an independent memoized brute force — my initial guess for the alternating example (5) was wrong; the true answer is 4.
