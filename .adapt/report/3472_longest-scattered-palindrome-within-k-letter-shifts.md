## 3472 — Longest Palindromic Subsequence After at Most K Operations

- New id / title / slug: 3472 / Longest Scattered Palindrome Within k Letter Shifts / `longest-scattered-palindrome-within-k-letter-shifts`
- Old → new API: `longestPalindromicSubsequence` → `longestWithinShifts` (go `longestWithinShifts`, rust `longest_within_shifts`, ts `longestWithinShifts`); parameters `s`, `k` kept
- Core algorithm / difficulty: interval DP dp[i][j][c] over substring length and an at-most-c budget; end-pairing costs the cyclic letter distance min(d, 26−d) / H3 (unchanged)
- Statement rewritten from spec: yes (operation described as a budget of nudges to neighboring letters on a circular alphabet; subsequence phrased as "reads the same in both directions")
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"zma" k=1` → 3 (wrap-around pair z/a costs 1; center free), `"acfed" k=2` → 4 (two pairs edited into "deed"), `"bbbaaa" k=3` → 6 (every pair one step apart; whole string)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Title kinship: "scattered palindrome" reuses 0516's adapted vocabulary (`0516_longest-scattered-palindrome`), so the family stays recognizable across the bank

### Notes

- The independent brute enumerates subsequences and prices each mirror pair
  at its cyclic distance (unpaired centers free) — 300 random inputs agreed
  with the reference (`exp_3472.py`).
