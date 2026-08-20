## 398 — Palindrome Removal

- New id / title / slug: 398 / Fewest Palindrome Removals / `fewest-palindrome-removals`
- Old → new API: `minimumMoves` → `fewestPalindromeRemovals` (go `fewestPalindromeRemovals`, rust `fewest_palindrome_removals`, ts `fewestPalindromeRemovals`); parameter `arr` kept
- Core algorithm / difficulty: interval DP `dp[i][j]` with the three transitions (first-element bound, split, equal-ends pairing) / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7,4,7]` → 1 (whole array is a palindrome); `[4,8,4,9]` → 2 (paired ends, then the tail); `[6,1,2,1,7]` → 3 (palindrome core plus two unmatched loners)
- Constraints: domain unchanged (`1 <= len <= 100`, `1 <= arr[i] <= 20`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 19/19 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- Title deliberately kin to `0046_fewest-palindrome-cuts` (LC 132's adapted
  identity): both are interval DP over palindromic structure, and the
  cuts/removals distinction keeps them mutually distinguishable.
