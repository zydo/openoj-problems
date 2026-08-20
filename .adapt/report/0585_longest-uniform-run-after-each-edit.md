## 585 — Longest Substring of One Repeating Character

- New id / title / slug: 585 / Longest Uniform Run After Each Edit / `longest-uniform-run-after-each-edit`
- Old → new API: `longestRepeating` → `longestUniformRun` (go `longestUniformRun`, rust `longest_uniform_run`, ts `longestUniformRun`); parameters `queryCharacters` → `rewriteChars` (rust `query_characters` → `rewrite_chars`), `queryIndices` → `rewritePositions` (rust `query_indices` → `rewrite_positions`); `s` kept
- Core algorithm / difficulty: segment tree, per-node prefix/suffix/best uniform-run summary with seam-joining merge / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"abbaa"` with rewrites `bba` at `[0,4,1]` → `[3,3,1]` (run built, kept, shattered), `"aabaa"` with `azb` at `[2,0,4]` → `[5,4,3]` (one edit bridges two blocks), `"xyyxx"` with `yx` at `[0,4]` → `[3,3]` (extensions at either end)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Public expecteds computed by running the source's segment-tree reference
  directly, then cross-checked against a naive edit-then-rescan brute —
  agreed on all three.
- Parameter renames checked for identifier collisions across all seven
  source solutions before committing to them.
- Recurring self-note: draft explanations that "think out loud" (false
  start, correction) keep sneaking into Example prose; final pass reads
  each explanation end-to-end before gates.
