## 1504 — Count Submatrices With All Ones

- New id / title / slug: 1504 / All-Ones Rectangles in a Matrix / `all-ones-rectangles-in-a-matrix`
- Old → new API: `numSubmat` → `countOnesRectangles` (go `countOnesRectangles`, rust `count_ones_rectangles`, ts `countOnesRectangles`); parameter `mat` kept
- Core algorithm / difficulty: per-row column-height histogram, per-span running minimum contributed as the count of heights / H4 (unchanged)
- Statement rewritten from spec: yes — blocks defined as contiguous-row × contiguous-column regions; per-shape tallies instead of per-side tallies
- Examples newly constructed: yes (structure-preserving: figures regenerated)
  - `[[1,1,0],[1,1,1],[0,1,1]] → 19` (3x3, two corner holes), `[[1,1,1],[1,0,1],[1,1,1],[0,1,0]] → 22` (4x3 with a punched middle), `[[1,0],[0,1]] → 2` (no two ones share a row or column) — cross-checked by enumerating every block
- Constraints: domain unchanged (m, n ≤ 150, binary cells), presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — grid grammar (46px cells, shaded 1-cells, digit overlays, per-shape sum caption) re-emitted in `.localonly/e04/fig_1504.py`; renders eyeballed
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Per-shape breakdowns for the explanations and captions come straight
  from the brute-force enumerator's Counter, keeping statement, caption,
  and expected value in agreement by construction.
