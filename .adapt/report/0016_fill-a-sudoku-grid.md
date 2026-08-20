## 16 — Sudoku Solver

- New id / title / slug: 16 / Fill A Sudoku Grid / `fill-a-sudoku-grid`
- Old → new API: `solveSudoku` → `fillSudoku` (go `fillSudoku`, rust `fill_sudoku`, ts `fillSudoku`)
- Core algorithm / difficulty: backtracking with 27 bitmask constraint sets / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — the grid is 9×9 by definition, and the puzzle was generated with `(0,0)` given and `(0,1)` undecided so the mask figure's row/column/block highlights still point at the right cell)
  - one example, as in the source: a freshly generated 30-given puzzle, verified to have exactly one completion
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both `example-1.svg` and `solution-constraint-masks.svg` — all 81 digit nodes regenerated from the new puzzle, plus the three mask sets and the candidate set)
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The title keeps the word "Sudoku". It is the puzzle's name, in general use
  since 1986 and not LeetCode's coinage — the same judgement wave 1 applied to
  "Happy Number" and "H-Index". Everything around it is new: the title is
  "Fill A Sudoku Grid", the method is `fillSudoku`, the statement, the example
  and the guide were written from the spec.
- **How the puzzle was constructed.** A full grid was built from a permuted
  base pattern, then cells were dug out one at a time, each removal kept only
  if a solution counter still found exactly one completion. `(0,1)` was dug
  first and `(0,0)` protected, which is what makes the mask figure a label
  edit: its highlight rectangles are hard-coded to row 0, column 1 and block 0.
  The generator is throwaway, not committed.
- Both sudoku figures place digits at computed `(x, y)` positions with no
  geometry tied to the values, so regenerating the `<text>` groups from a new
  puzzle is a pure label edit even though the grid "contents" changed. Grid
  figures are not automatically the drop case — only the ones whose *shape*
  varies with the data are.
- The source's `solution-constraint-masks.svg` labels its featured cell
  `(0,1)` while drawing a given digit there; the first undecided cell in the
  source puzzle is actually `(0,2)`. The adapted figure is consistent — its
  `(0,1)` really is undecided.
- Overlap first failed at 8% purely because the figure's alt text had been
  carried over verbatim. Alt text counts as statement prose; it has to be
  rewritten like any other sentence.
