## 1277 — Count Square Submatrices with All Ones

- New id / title / slug: 1277 / Count All-Ones Squares / `count-all-ones-squares`
- Old → new API: `countSquares` → `countAllOnesSquares` (go `countAllOnesSquares`, rust `count_all_ones_squares`, ts `countAllOnesSquares`); parameter `matrix` kept
- Core algorithm / difficulty: dp = largest all-ones square ending at each cell, summed / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[[1,1,1,1],[1,1,1,1],[0,1,1,1]]` → 17 (11+5+1); `[[1,1,0],[0,1,1],[1,1,1]]` → 8 (one 2×2); `[[1],[1],[1],[1]]` → 4 (single column)
- Constraints: domain unchanged, presentation rewritten (source's constraints oddly said `arr`; the rewrite uses `matrix` throughout)
- Skeletons regenerated: all 7
- Figures: labels updated — `solution-square-dp.svg` kept: example 1 preserves the 3×4 grid and keeps the max-dp cell at the bottom-right corner (side 3), so only four text nodes changed (matrix (0,0) 0→1, dp (0,0) 0→1, dp (1,1) 1→2, caption 15→17); arrows and geometry untouched
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Structure preservation forced the drawn 3×3 all-ones block; the free cells
  (first column) carry the new data. Any 3×4 matrix with that block keeps the
  figure's arrow and caption semantics valid.
