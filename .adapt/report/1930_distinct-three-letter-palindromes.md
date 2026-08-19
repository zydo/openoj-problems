## 1930 — Unique Length-3 Palindromic Subsequences

- New id / title / slug: 1930 / Distinct Three-Letter Palindromes / `distinct-three-letter-palindromes`
- Old → new API: `countPalindromicSubsequence` → `countThreeLetterPalindromes` (go `countThreeLetterPalindromes`, rust `count_three_letter_palindromes`, ts `countThreeLetterPalindromes`); parameter `s` kept (conventional)
- Core algorithm / difficulty: first/last occurrence per letter, count distinct middles / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"bacabab" → 6` (two letters contributing), `"aabb" → 0` (repeats but all adjacent), `"cdcdcc" → 3`
- Constraints: domain unchanged (`3 .. 10^5`, lowercase), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 16/16 cases) check ✓ (per-bundle static)

### Notes

- Public expectations cross-checked against an independent brute force (all
  26 × 26 candidates via subsequence matching) in the generator script —
  cheap insurance for string problems with hand-computable answers.
- The stale gate collects no literals here (source examples are quoted
  strings, not bracketed arrays), so example freedom is wide; still kept all
  three away from every hidden case.
