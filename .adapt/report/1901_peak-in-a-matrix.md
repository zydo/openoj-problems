## 1901 — Find a Peak Element II

- New id / title / slug: 1901 / Peak in a Matrix / `peak-in-a-matrix`
- Old → new API: `findPeakGrid` → `findMatrixPeak` (go `findMatrixPeak`, rust `find_matrix_peak`, ts `findMatrixPeak`); parameter `mat` kept (conventional)
- Core algorithm / difficulty: binary search on rows, row-maximum pivot, recurse toward the taller vertical neighbor / H3 (unchanged)
- Statement rewritten from spec: yes — peak defined against the four orthogonal neighbors, `-1` border stated as a rule rather than an assumption aside, uniqueness promise kept as a judge note
- Examples newly constructed: yes (structure-preserving: yes — same 2×2 and 3×3 shapes as the figures)
  - `[[3,9],[2,5]] → [0,1]`, `[[5,12,8],[14,31,9],[6,17,3]] → [1,1]`; both verified to have exactly one peak and no equal adjacent cells
- Constraints: domain unchanged (m, n ≤ 500, values ≤ 10⁵, no equal adjacents), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — both example grids kept their dimensions; cell values, the highlighted peak cell, and the caption numbers re-labeled to the new data
- Family: kin of `0162_find-peak-element` (1D version), **not yet adapted and no family entry** — title chosen unilaterally; main agent should keep the pair recognizably related when 0162 lands
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Example grids had to satisfy three constraints at once (unique peak,
  no equal adjacents, same shape as the drawn figure) — the generator
  asserts all three plus the reference answer before writing the case;
  a naive 2×2 like `[[3,9],[6,5]]` fails it (6 is a second peak).
- The figures' geometry (4×4 and 5×5 with `-1` rings) was left untouched;
  only `<text>` nodes changed.
