## 2223 — Sum of Scores of Built Strings

- New id / title / slug: 2223 / Sum of Suffix Match Scores / `sum-of-suffix-match-scores`
- Old → new API: `sumScores` → `sumSuffixMatchScores` (go `sumSuffixMatchScores`, rust `sum_suffix_match_scores`, ts `sumSuffixMatchScores`); parameter `s` kept
- Core algorithm / difficulty: Z-array with z[0] = n, summed / H3 (unchanged)
- Statement rewritten from spec: yes (the prepend-one-character framing was dropped for the equivalent direct statement over suffixes — same judged semantics, less machinery to explain)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"abcab"` → 7 (full enumeration of five suffixes), `"xhyxhx"` → 9 (sparse hits including a length-2 mid-suffix), `"aabb"` → 5 (minimal case)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Reference cross-checked against a direct per-suffix LCP brute on 300
  random strings over a three-letter alphabet — zero mismatches.
- solutions.md quotes the Z-array `[6, 0, 0, 2, 0, 1]` for the example;
  computed before writing, not from memory.
