## 0516 — Longest Palindromic Subsequence

- New id / title / slug: 516 / Longest Scattered Palindrome / `longest-scattered-palindrome`
- Old → new API: `longestPalindromeSubseq` → `longestScatteredPalindrome` (go `longestScatteredPalindrome`, rust `longest_scattered_palindrome`, ts `longestScatteredPalindrome`); parameter `s` kept (conventional)
- Core algorithm / difficulty: interval DP over stretches, matching ends wrap the inner best / H3 (unchanged)
- Statement rewritten from spec: yes — a subsequence is "letters picked out left to right, skipping as many as you like", and the palindrome is called a **mirror** (matching 0005's vocabulary)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"acgtca"` → 5 (agreeing ends wrap an inner `c?c`, skipping the `t`), `"xoyyx"` → 4 (whole string is not a mirror; `x…x` wraps `yy`), `"qwerty"` → 1 (no letter twice, the floor)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (bundle clean in tree run) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Kinship: 0005 became "Longest Palindrome Slice", so this one keeps
  "Palindrome" in the title for family visibility while "Scattered" carries
  the subsequence half of the task; 0131/0132's piece vocabulary is not
  reused since nothing is being cut here.
- The DP walk in `solutions.md` uses `acgtca` whose table is almost all 1s
  until the length-4 diagonal — the single `c…c` cell that the final answer
  wraps. Verified by running the recurrence, not by hand.
