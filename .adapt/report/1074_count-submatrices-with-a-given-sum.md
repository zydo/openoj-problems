## 1074 — Number of Submatrices That Sum to Target

- New id / title / slug: 1074 / Count Submatrices With a Given Sum / `count-submatrices-with-a-given-sum`
- Old → new API: `numSubmatrixSumTarget` → `countSubmatricesWithSum` (go `countSubmatricesWithSum`, rust `count_submatrices_with_sum`, ts `countSubmatricesWithSum`); parameters `matrix`, `target` kept
- Core algorithm / difficulty: fix row bounds, collapse to column sums, count stretches with a running-total hash map / H4 (unchanged)
- Statement rewritten from spec: yes (the coordinate-quadruple submatrix definition restated as contiguous row and column runs)
- Examples newly constructed: yes (structure-preserving: yes — the figure's 3x3 corner-highlight geometry kept)
  - `[[0,2,0],[2,2,2],[0,2,0]], target 0` → 4 (corners 0, interior 2 — exactly the four 1x1 corner blocks qualify, so the blue outlines stay); `[[1,-3],[-3,1]], target -2` → 4 (each full row and column); `[[-904]], target 0` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example-1.svg: five interior 1s → 2s, header comment, and caption reworded; grid geometry, corner highlights untouched
- Gates: check ✓ (no failures for this key in the tree static run) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The interior value 2 (not another 0/1 pattern) was chosen so the 3x3
  example keeps the figure's exact qualifying set with a plain text edit:
  any rectangle beyond a corner must include a 2 and overshoot 0.
- Example 2 is symmetric on purpose — "each full row and each full column"
  is checkable by eye against the four -2 totals.
