## 343 — Lexicographically Smallest Equivalent String

- New id / title / slug: 343 / Smallest Letter Rewrite / `smallest-letter-rewrite`
- Old → new API: `smallestEquivalentString` → `smallestLetterRewrite` (rust `smallest_equivalent_string` → `smallest_letter_rewrite`); parameter `baseStr` → `text` (rust spelling `base_str` → `text`); `s1`, `s2` kept
- Core algorithm / difficulty: union-find over the 26 letters with a smallest-letter-wins merge rule / H2 (unchanged)
- Statement rewritten from spec: yes — dropped the source's reflexivity/symmetry/transitivity bullet list in favour of one sentence about the permission spreading, and named the object "groups"
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `"flint"/"brake"/"trail" → "elaal"` (five disjoint pairs), `"zoom"/"yolk"/"moody" → "klldy"` (a redundant pair, plus a letter no pair mentions), `"dcba"/"cbaz"/"zebra" → "aeara"` (a chain that collapses five letters)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **A renamed parameter has a second spelling in Rust.** `baseStr` appears in
  `solution.rust` as `base_str`, because starters snake-case parameter names for
  Rust. The stale gate only knows the `problem.json` spelling, so it does not
  catch the leftover — the rename map has to carry both forms. Any camelCase
  parameter rename in a bundle with a Rust solution needs this.
