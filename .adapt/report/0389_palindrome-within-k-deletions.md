## 389 — Valid Palindrome III

- New id / title / slug: 389 / Palindrome Within k Deletions / `palindrome-within-k-deletions`
- Old → new API: `isValidPalindrome` → `isPalindromeWithinK` (go `isPalindromeWithinK`, rust `is_palindrome_within_k`, ts `isPalindromeWithinK`); parameters `s`, `k` kept
- Core algorithm / difficulty: LPS interval DP, test `n - LPS <= k` / H3 (unchanged)
- Statement rewritten from spec: yes ("k-palindrome" coinage dropped; the deletion budget stated directly over survivors in order)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"stoops" k=2` → true (delete t, p; "soos"); `"rotor" k=1` → true (zero deletions within budget); `"tunnel" k=2` → false (only "nn" pairs, four deletions needed)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- No Valid Palindrome I/II in this bank, so no family-title constraint; the
  adapted 0516 (`Longest Scattered Palindrome`) names the same LPS concept,
  and this statement now defines its own subsequence vocabulary rather than
  leaning on "k-palindrome".
