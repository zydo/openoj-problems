## 0240 — Search a 2D Matrix II

- New id / title / slug: 240 / Sorted Matrix Membership / `sorted-matrix-membership`
- Old → new API: `searchMatrix` → `matrixContains` (go `matrixContains`, rust `matrix_contains`, ts `matrixContains`); parameters `matrix`, `target` kept
- Core algorithm / difficulty: staircase walk from the top-right corner; row-by-row binary search alternative / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same 5x5 grid, and the walk geometry of both example figures reproduced)
  - `[[3,8,21,29,35],[7,12,26,33,41],[10,17,30,38,47],[16,23,34,42,52],[40,46,50,55,60]] target 12 → true`,
    same matrix `target 44 → false`, `[[-5,-1,4],[2,3,8]] target 2 → true` (non-square, negatives)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `example-2.svg`, `solution-staircase-walk.svg`)
- Gates: check ✓ verify ✓ (14/14 language-variants, 21/21 cases each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Multi-solution bundle: variant ids `staircase` and `row_bisect` kept, guide headings `## Staircase Search from the Top-Right Corner` / `## Row-by-Row Binary Search` kept.
- The grid cells encode data but a sorted matrix is *not* structural geometry the way a histogram is — any matrix with the same dimensions and the same walk-path behaviour renders identically. Both example figures trace a staircase (Example 1: three steps left then one down; Example 2: a longer descent ending off-grid), so the replacement matrix was built to reproduce those exact comparison patterns: the top-right three cells above the target, the row-1 col-0 cell below it, and for Example 2 a target that lies in a "gap" (44 between 41 and 47) so the path exits. Pure text edit, no coordinates touched.
- Overlap gate first failed at 10% purely on the figure alt-text, which the source also worded as "The staircase walk … for target …". Rewording the alt texts (not the body) took it to 0 — figure captions inherit the source's phrasing habits as easily as prose, and the gate reads them. Worth checking alt text deliberately on every figure bundle.
- The third example (non-square, negative values) was added because the source shipped only the square matrix; the hidden data does exercise other shapes.
