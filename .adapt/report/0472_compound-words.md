## 0472 — Concatenated Words

- New id / title / slug: 472 / Compound Words / `compound-words`
- Old → new API: `findAllConcatenatedWordsInADict` → `findCompoundWords` (go `findCompoundWords`, rust `find_compound_words`, ts `findCompoundWords`)
- Core algorithm / difficulty: per-candidate word-break DP over a hash set of all inputs, with the whole-span cut forbidden / H3 (unchanged)
- Statement rewritten from spec: yes — it defines "compound" by construction (write two or more entries back to back) and states the reuse rule and the order rule outright
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `["ice","cream","icecream","sun","flower","sunflower","sunflowericecream","tree"] → ["icecream","sunflower","sunflowericecream"]`
  - `["run","way","runway","runwayrunway"] → ["runway","runwayrunway"]` (a piece reused)
  - `["red","blue","green"] → []` (empty answer)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's private helper was named `isConcatenated` / `is_concatenated` in
  every language. The stale gate does not flag it — it only knows the names in
  `problem.json` — but it is old terminology inside the file the reader opens,
  so it was renamed to `isCompound` / `is_compound` alongside the entry point.
  Worth doing routinely: grep the copied `solution.*` for the source's *theme
  word*, not just its API names.
- Parameter `words` is conventional and was kept, which keeps the stale gate's
  parameter set empty and avoids any collision risk with source locals.
