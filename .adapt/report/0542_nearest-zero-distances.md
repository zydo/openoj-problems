## 0542 — 01 Matrix

- New id / title / slug: 542 / Nearest Zero Distances / `nearest-zero-distances`
- Old → new API: `updateMatrix` → `nearestZeroDistances` (go `nearestZeroDistances`, rust `nearest_zero_distances`, ts `nearestZeroDistances`); parameter `mat` kept (conventional)
- Core algorithm / difficulty: multi-source BFS from all zero cells at once / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[0,1,1,1],[1,1,1,1],[1,1,1,0]]` (zeros at opposite corners, meeting gradient), `[[0,1,1,1,1]]` (single row), `[[1,1,1],[1,1,0]]` (one zero in a corner)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`example-1.svg`, `example-2.svg`, `solution-wavefront.svg`) — grid contents encode the example data structurally (cell values are both text nodes and dark/white fills), and no renderer exists for the grid family
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title deliberately echoes 0286 "Nearest Source Distances" — the two
  problems are the same computation (multi-source BFS grid distances), and
  the pair of names now shows it.
- The `solutions.md` prose dropped the figure reference along with the
  figure; its walk uses the corner-zeros example instead.
- Phase-2 candidate: a grid renderer keyed on (mat, dist) would serve this
  bundle and the other grid-BFS ones; the existing wavefront drawing was
  genuinely helpful.
