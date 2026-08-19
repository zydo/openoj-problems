## 1278 — Palindrome Partitioning III

- New id / title / slug: 1278 / Fewest Rewrites into k Palindromes / `fewest-rewrites-into-k-palindromes`
- Old → new API: `palindromePartition` → `fewestRewrites` (go `fewestRewrites`, rust `fewest_rewrites`, ts `fewestRewrites`); parameters `s`, `k` kept
- Core algorithm / difficulty: interval mismatch-cost table + partition DP over prefixes / H2 (unchanged)
- Statement rewritten from spec: yes ("change some characters" becomes rewrites; "disjoint substrings" becomes cuts into pieces)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"abcba" k=2` → 2 (palindrome whose every 2-cut costs); `"abab" k=2` → 0 ("aba"|"b"); `"annae" k=3` → 1 ("a"|"nn"|"ae", fix the last pair)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 21/21 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Sibling titles pre-decided by earlier waves: 131 "Palindrome Partitions",
  132 "Fewest Palindrome Cuts"; this one joins the family as "Fewest Rewrites
  into k Palindromes", keeping the "Fewest … Palindrome" kinship.
- Hand-pricing intervals is error-prone (mismatched pairs, not characters);
  all three example outputs came from the reference, including "abcba" k=2 → 2
  where intuition suggested 1.
