## 22 — N-Queens

- New id / title / slug: 22 / N-Queens / `n-queens` — **title kept**
- Old → new API: none — `solveNQueens` kept (go `solveNQueens`, rust `solve_n_queens`, ts `solveNQueens`; parameter `n` kept)
- Core algorithm / difficulty: row-by-row backtracking with three conflict sets / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `n = 5` → 10 boards (expectation produced by running the reference), `n = 2` → `[]` (unsatisfiable)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`example-1.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 12/12 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Why the name stays.** The n-queens puzzle is the 1848 Bezzel chess puzzle,
  standard terminology a century before LeetCode; renaming it would mean
  inventing a word for a puzzle every reader already knows. Same clause as
  wave 1's "Happy Number" and "H-Index", and following that precedent the
  method name stays with the title. Everything else is written from the spec:
  the statement, both examples, the guide, and the public cases are new.
- **Why the figure was dropped.** The example figure is a 4×4 board whose four
  queen circles sit at the solution's exact squares. Both the board size and
  the queen positions are the data. Keeping it would have meant keeping the
  source's `n = 4` example, whose entire output is forced by the mathematics
  (only two 4-queens placements exist) — i.e. the source's example bytes. The
  fresh example is `n = 5`, which needs a 5×5 drawing; no renderer exists for
  this family, so the figure goes to phase 2.
- The stale gate cannot flag board strings even in principle here — `.Q..`
  lives on a two-character alphabet, which the gate deliberately excludes — so
  avoiding the source's `n = 4` was a discipline call, not a gate-forced one.
- The output-ordering sentence ("filling the board top row to bottom row,
  trying columns left to right") is a judged semantic (`comparison` is
  `exact`), so it stays a stated requirement, reworded.
