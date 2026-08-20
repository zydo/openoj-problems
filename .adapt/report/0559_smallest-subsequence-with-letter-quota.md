## 559 — Smallest K-Length Subsequence With Occurrences of a Letter

- New id / title / slug: 559 / Smallest Subsequence With a Letter Quota / `smallest-subsequence-with-letter-quota`
- Old → new API: `smallestSubsequence` → `smallestSubsequenceWithLetterQuota` (go `smallestSubsequenceWithLetterQuota`, rust `smallest_subsequence_with_letter_quota`, ts `smallestSubsequenceWithLetterQuota`); parameter `repetition` → `quota`; `s`, `k`, `letter` kept (conventional)
- Core algorithm / difficulty: monotonic-stack greedy with suffix counts of `letter` guarding both the length budget and the quota, then a right-end trim to length `k` / H4 (unchanged)
- Statement rewritten from spec: yes — "occurrences of a letter" reframed as a **letter quota**; subsequence and lexicographic order defined from the spec
- Examples newly constructed: yes (structure-preserving: yes — E2 keeps the figure's 8-cell string / 4-cell answer / 3 letter occurrences)
  - `"anana", k=3, letter="a", quota=2 → "aaa"` (quota slack), `"ebacdece", k=4, letter="e", quota=2 → "acee"` (quota bites: "acce" without it), `"aza", k=2, letter="a", quota=2 → "aa"` (forced unique)
- Constraints: domain unchanged (1 ≤ quota ≤ k ≤ |s| ≤ 5·10⁴, lowercase letters), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `figures/example-2.svg` keeps the two-row cell geometry; string, answer, and the three letter-highlight overlays re-pointed at the new data
- Gates: check ✓ verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- E2 was engineered for the figure: same 8-character string length, exactly
  3 letter occurrences, k = 4 — so the SVG needed only text-node edits plus
  moving the highlight overlays to the new letter positions (x = 90 + 40·i).
  The source figure highlighted only two of its three e's; mine highlights
  all three, matching its own caption.
- Parameter rename `repetition` → `quota` checked for identifier collisions
  first (source locals: suffix, stack, used, top, lettersAfterPop, … — no
  `quota` anywhere).
- Public expectations cross-checked between the re-derived stack greedy and
  brute-force enumeration of all length-k subsequences; the solutions.md
  walkthrough of E2 was traced against the actual stack contents
  ("acdece" → trim → "acee") before publishing.
- Session restart hit between writing statement/solutions and generating
  starters — the tree check caught the starter-less bundle; completed on
  resume with all gates green.
