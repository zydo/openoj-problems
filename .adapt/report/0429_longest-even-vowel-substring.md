## 429 — Find the Longest Substring Containing Vowels in Even Counts

- New id / title / slug: 429 / Longest Even-Vowel Substring / `longest-even-vowel-substring`
- Old → new API: `findTheLongestSubstring` → `longestEvenVowelSubstring` (go `longestEvenVowelSubstring`, rust `longest_even_vowel_substring`, ts `longestEvenVowelSubstring`); parameter `s` kept
- Core algorithm / difficulty: prefix XOR of the 5-bit vowel-parity mask with a first-occurrence table / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"lemonmelon"` → 10 (whole string qualifies), `"quietperiod"` → 7 (interior window `"ietperi"`), `"aeio"` → 0 (only the empty window)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Example expected values were computed by the staged reference solution and
  the winning windows were confirmed with an exhaustive two-pointer brute force
  before being cited in the explanations.
- The source had no Follow-up; none was invented.
