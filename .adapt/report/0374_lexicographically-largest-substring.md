## 374 — Last Substring in Lexicographical Order

- New id / title / slug: 374 / Lexicographically Largest Substring /
  `lexicographically-largest-substring`
- Old → new API: `lastSubstring` → `largestSubstring`
  (go `largestSubstring`, rust `largest_substring`, ts `largestSubstring`);
  parameter `s` kept
- Core algorithm / difficulty: two-pointer suffix duel with shared-prefix
  skipping / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `banana` → `nana` (one max-letter occurrence), `ztzz` → `zz` (later
    occurrence wins at the second character), `dcd` → `dcd` (longer
    extension of an equal prefix)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- "Last ... in lexicographical order" read as "greatest in dictionary
  order"; the new title says it directly. Dictionary-order comparison
  (prefix ranks first) is defined in the statement body instead of assumed.
- The solutions.md pointer trace for `ztzz` was hand-derived but re-verified
  against the reference line by line before shipping — worked examples in
  guides deserve the same "never by hand alone" care as expected values.
