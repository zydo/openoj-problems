## 82 — Word Search II

- New id / title / slug: 82 / Find Grid Words / `find-grid-words`
- Old → new API: `findWords` → `findGridWords` (go `findGridWords`, rust `find_grid_words`, ts `findGridWords`); parameters `board`, `words` kept
- Core algorithm / difficulty: trie-guided backtracking over the grid / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — same 4×4 grid, same two word-path shapes)
  - 4×4 board, words `["palm","tel","sale","quip"]` → `["palm","tel"]` (two found, one sharing the `l` cell); 2×2 board, `["cdffc"]` → `[]` (would need the lone `f` twice)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — 16 letter `<text>` nodes per figure, two legends/comments, two path captions. `palm` reuses the source `oath` path cells exactly; `tel` reuses the `eat` path cells, so every arrow and shading rect is untouched geometry.
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 16/16 cases)

### Notes

- Choosing the words to inhabit the figure's drawn paths (not just its cells)
  is what keeps a path-annotated solution figure a text edit: `palm` walks
  the same 4 cells `oath` did, `tel` the same 3 as `eat`, sharing the same
  middle cell.
- The overlap gate's shingling crosses constraint bullet boundaries (the
  token stream ignores line breaks), so verbatim standard constraints in the
  source's order ("… is a lowercase English letter." next to "… consists of
  lowercase English letters.") trip it even though each bullet is boilerplate.
  Rewording the non-numeric bullets ("Every cell of `board` holds a
  lowercase English letter.") clears it. Not a gate false positive — the fix
  is free and makes the constraints ours anyway.
