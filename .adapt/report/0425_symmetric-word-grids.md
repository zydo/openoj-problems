## 0425 — Word Squares

- New id / title / slug: 425 / Symmetric Word Grids / `symmetric-word-grids`
- Old → new API: `wordSquares` → `symmetricWordGrids` (go `symmetricWordGrids`,
  rust `symmetric_word_grids`, ts `symmetricWordGrids`); parameter `words` kept
  (conventional)
- Core algorithm / difficulty: depth-first search over the lines with a
  prefix → words index for pruning / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["shot","hope","open","tend","spot"]` → one block, with a distractor that
    dies at depth 1
  - `["aha","hah"]` → two blocks, each reusing an entry
  - `["mud","ode","den","dew"]` → no block at all
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- The local variable `square` inside every reference solution was left alone:
  it is not a renamed identifier (the stale gate only tracks `Word Squares`,
  `word-squares`, `wordSquares`, `word_squares`) and an `L × L` block genuinely
  is square. Renaming it would have been an unrequested edit to the solutions.
- Example inputs were checked against the 14 hidden inputs; none collides.
  Hidden case `["aba","bab"]` is isomorphic to example 2 but is a different
  input, so the public/hidden sets stay disjoint.
- Expected values came from a scratch script in `.localonly/gen_0425.py`, run
  with `PYTHONDONTWRITEBYTECODE=1`.
