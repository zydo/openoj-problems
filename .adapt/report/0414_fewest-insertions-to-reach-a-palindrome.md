## 414 — Minimum Insertion Steps to Make a String Palindrome

- New id / title / slug: 414 / Fewest Insertions to Reach a Palindrome / `fewest-insertions-to-reach-a-palindrome`
- Old → new API: `minInsertions` → `fewestInsertions` (go `fewestInsertions`, rust `fewest_insertions`, ts `fewestInsertions`); parameter `s` kept
- Core algorithm / difficulty: interval DP on ends, equivalent to n − longest palindromic subsequence / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"rotor"` → 0 (already a palindrome); `"abcdecba"` → 1 (only the middle "de" breaks it); `"waves"` → 4 (all distinct, "sevawaves")
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Title joins the palindrome family's "Fewest …" line: 132 "Fewest
  Palindrome Cuts", 1278 "Fewest Rewrites into k Palindromes", this one
  "Fewest Insertions to Reach a Palindrome".
