## 543 — Maximum Product of the Length of Two Palindromic Substrings

- New id / title / slug: 543 / Disjoint Palindrome Product / `disjoint-palindrome-product`
- Old → new API: `maxProduct` → `disjointPalindromeProduct` (go `disjointPalindromeProduct`, rust `disjoint_palindrome_product`, ts `disjointPalindromeProduct`)
- Core algorithm / difficulty: Manacher odd radii, per-index end/start bests with shrink-by-2 propagation, prefix/suffix maxima, cut sweep, O(n) / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"ababab"` → 9 (two interleaved triples; long-and-lonely loses), `"aabaa"` → 3 (whole-string palindrome is unusable), `"xyxyxzqz"` → 15 (5 × 3 side by side)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- No bracket-array literals in the source's fenced blocks (string inputs
  only), so the example-literal constraint is empty here; examples still
  avoid the source's example strings and all hidden inputs by inspection.
- Brute force cross-check enumerated all odd-palindrome substring pairs.
