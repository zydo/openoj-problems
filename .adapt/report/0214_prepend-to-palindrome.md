## 0214 — Shortest Palindrome

- New id / title / slug: 214 / Prepend To Palindrome / `prepend-to-palindrome`
- Old → new API: `shortestPalindrome` → `prependToPalindrome` (go `prependToPalindrome`, rust `prepend_to_palindrome`, ts `prependToPalindrome`); parameter `s` kept
- Core algorithm / difficulty: longest palindromic prefix via KMP border of `s + "#" + rev(s)` / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"race" → "ecarace"`, `"ananab" → "bananab"` (five-letter palindromic prefix, one mirror letter), `"deed" → "deed"` (already palindromic)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 18/18 cases)

### Notes

- Title drops the "shortest" optimisation word in favour of the verb; the
  statement carries the minimality requirement explicitly ("shortest
  palindrome obtainable this way").
