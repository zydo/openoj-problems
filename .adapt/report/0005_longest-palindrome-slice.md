## 5 — Longest Palindromic Substring

- New id / title / slug: 5 / Longest Palindrome Slice / `longest-palindrome-slice`
- Old → new API: `longestPalindrome` → `longestPalindromeSlice` (go `longestPalindromeSlice`, rust `longest_palindrome_slice`, ts `longestPalindromeSlice`)
- Core algorithm / difficulty: expand around each of 2n−1 centers, leftmost-longest tie rule / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"rotorboat"` → `"rotor"` (odd, at the front), `"carriage"` → `"rr"` (even center),
    `"abcbadeded"` → `"abcba"` (two equal-longest, earliest start wins)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The leftmost-tie rule is judged (exact comparison), so the tie example is
  load-bearing: `"abcbadeded"` has two length-5 mirrors and pins the choice.
- Reference cross-check: center-expansion port vs an independent brute-force
  scan with the same strict-`>` tie discipline.
