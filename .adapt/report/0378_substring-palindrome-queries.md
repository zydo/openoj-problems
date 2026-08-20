## 378 — Can Make Palindrome from Substring

- New id / title / slug: 378 / Substring Palindrome Queries /
  `substring-palindrome-queries`
- Old → new API: `canMakePaliQueries` → `substringPalindromeQueries`
  (go `substringPalindromeQueries`, rust `substring_palindrome_queries`,
  ts `substringPalindromeQueries`); parameters `s`/`queries` kept
- Core algorithm / difficulty: prefix parity bitmasks, `odd // 2 <= k` per
  query / H3 (unchanged)
- Statement rewritten from spec: yes — shuffle + overwrite budget described
  from the spec, with the per-letter budget and untouched-`s` notes kept
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `level` (already-palindrome, unshufflable triples, one-overwrite fixes),
    `codee` (three loners: no budget fails, two suffice), `missme` (pairing
    two loners with one overwrite)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- Query triples are as identifying as arrays: the stale gate flagged
  `[0,3,1]`, `[0,3,2]`, `[1,2,0]` when my examples reused the source's
  `[left, right, k]` values on different strings. Query-shaped problems
  need fresh triples, not just fresh strings.
- First example-2 draft also died on `[0,4,1]`; the flagged set is every
  3-symbol array literal in the source statement's fenced blocks.
