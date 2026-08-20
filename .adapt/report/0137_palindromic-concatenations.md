## 137 — Palindrome Pairs

- New id / title / slug: 137 / Palindromic Concatenations / `palindromic-concatenations`
- Old → new API: `palindromePairs` → `palindromicConcatenations` (go `palindromicConcatenations`, rust `palindromic_concatenations`, ts `palindromicConcatenations`); parameter `words` kept
- Core algorithm / difficulty: hash map keyed by string, every cut position of every word / H4 (unchanged)
- Statement rewritten from spec: yes — the pair condition is stated as an ordered index pair over a concatenation, and the complexity requirement is phrased as a budget rather than a formula
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `["dog","god","ram","mar","x"] → [[0,1],[1,0],[2,3],[3,2]]` (two reversed couples, one loner)
  - `["ot","to","tot"] → [[0,1],[1,0],[1,2],[2,0]]` (unequal lengths, "totot" found from both sides)
  - `["","kayak","no"] → [[0,1],[1,0]]` (the empty string against a palindrome)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `comparison` is `sorted`, so the statement says the pairs may be returned in
  any order; the reference still sorts, which keeps the public expectations
  readable.
- The source carried a hard complexity requirement in the description. Dropping
  it silently would change the problem, so it is restated as a budget ("work
  proportional to the total length of the strings"), which is what the intended
  solution actually achieves.
