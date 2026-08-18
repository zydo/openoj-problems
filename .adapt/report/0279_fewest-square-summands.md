## 0279 — Perfect Squares

- New id / title / slug: 279 / Fewest Square Summands / `fewest-square-summands`
- Old → new API: `numSquares` → `fewestSquareSummands` (go `fewestSquareSummands`, rust `fewest_square_summands`, ts `fewestSquareSummands`); parameter `n` kept
- Core algorithm / difficulty: three variants — tabulated dp, BFS over remainders, Lagrange/Legendre number theory / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `6 → 3` (4+1+1), `20 → 2` (16+4), `15 → 4` (a 4^a(8b+7) number, where three squares provably never suffice)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Variant ids kept: `dp`, `bfs`, `math_lagrange` (21 solution files, headings unchanged)
- Gates: check ✓ verify ✓ (7/7 languages × 3 variants, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The examples deliberately span the answers 2, 3, and 4; `15` was chosen
  so the 8b+7 branch of the math variant is visible in the statement.
- Multi-solution rename is mechanical: the same perl word-boundary pass
  over `solution_<variant>.<ext>` for all 21 files; variant ids and the
  `## dp` / `## bfs` / `## math_lagrange` headings stay for the
  Solutions-tab matcher.
