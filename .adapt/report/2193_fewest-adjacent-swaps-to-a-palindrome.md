## 2193 — Minimum Number of Moves to Make Palindrome

- New id / title / slug: 2193 / Fewest Adjacent Swaps to a Palindrome / `fewest-adjacent-swaps-to-a-palindrome`
- Old → new API: `minMovesToMakePalindrome` → `fewestSwapsToPalindrome` (go `fewestSwapsToPalindrome`, rust `fewest_swaps_to_palindrome`, ts `fewestSwapsToPalindrome`); parameter `s` kept
- Core algorithm / difficulty: greedy two-pointer, bubble rightmost match of `s[left]` to the right end, nudge the odd letter inward / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"caacr"` (two bubbling fixes, → "carac"), `"ababc"` (longer walk plus inner fix), `"cbaab"` (odd middle letter nudged twice)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Greedy validated exhaustively against BFS over all parity-valid strings
  of length ≤ 7 on a three-letter alphabet — zero mismatches (the 2167
  experience makes this check worth the minute).
- Avoided `"bbaa"` as an example: it is the source's `"aabb"` reversed,
  which is exactly the "permuted example" the program forbids.
- The odd-letter guarantee is stated as "at most one letter occurs an odd
  number of times" — the operational form of the source's promise.
