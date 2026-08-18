## 0221 — Maximal Square

- New id / title / slug: 221 / Largest Ones Square / `largest-ones-square`
- Old → new API: `maximalSquare` → `largestOnesSquare` (go `largestOnesSquare`, rust `largest_ones_square`, ts `largestOnesSquare`); parameter `matrix` → `grid`
- Core algorithm / difficulty: DP on "side of square ending here", two rolling rows / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh 4×5 grid with the same 2×2 highlight position and dp-table 2-positions; `[["1","0"],["0","1"]] → 1` (ones on the main diagonal instead of the anti-diagonal); `[["0","0"],["0","0"]] → 0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `solution-dp-table.svg`); `example-2.svg` labels updated **plus its two highlight boxes moved** (see Notes)
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 15/15 cases) — after one rework round

### Notes

- Title keeps kinship with `0085_largest-ones-rectangle` (Largest Ones
  Rectangle) — the pair now reads as a family.
- The 4×5 example was reverse-engineered: the dp-table figure fixes *where*
  the 2s sit, so the grid was chosen to make dp exactly
  `[[1,1,0,1,0],[0,0,1,1,1],[0,1,1,2,2],[0,1,0,1,0]]` with no row equal to
  any source row.
- `example-2.svg` needed its two blue highlight rects moved to the other
  diagonal (fresh data could not keep the old cell positions). Everything else
  about the drawing is unchanged; flagged here since it is one step beyond a
  pure label edit.
- The overlap gate caught two figure alt texts and one hint that were still
  riding on source phrasing ("a 2 by 2 board whose two 1s meet only at a
  corner", "all-ones square whose bottom-right corner"). Figure alt text is
  statement prose and gets checked like any other sentence — worth remembering
  for every later figure.
