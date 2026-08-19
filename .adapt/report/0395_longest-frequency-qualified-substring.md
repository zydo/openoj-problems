## 0395 — Longest Substring with At Least K Repeating Characters

- New id / title / slug: 395 / Longest Frequency-Qualified Substring /
  `longest-frequency-qualified-substring`
- Old → new API: `longestSubstring` → `longestQualifiedSubstring` (go
  `longestQualifiedSubstring`, rust `longest_qualified_substring`, ts
  `longestQualifiedSubstring`)
- Core algorithm / difficulty: divide and conquer on underrepresented letters
  / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - one trailing splitter after a nine-character answer; one internal splitter
    separating two qualifying regions
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- The examples exercise splitters at different positions without duplicating
  any hidden input.
