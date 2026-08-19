## 2371 — Minimize Maximum Value in a Grid

- New id / title / slug: 2371 / Smallest Maximum After Renumbering a Grid / `smallest-maximum-after-renumbering-a-grid`
- Old → new API: `minScore` → `renumberGrid` (go `renumberGrid`, rust `renumber_grid`, ts `renumberGrid`)
- Core algorithm / difficulty: cells sorted by original value, each written as 1 + max(row max, col max) / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — example kept as a 2×2 grid so the figure needed only label edits)
  - `[[2,9],[7,4]] → [[1,2],[2,1]]`, `[[42]] → [[1]]`, `[[9,2],[6,4],[1,8]] → [[4,1],[3,2],[1,3]]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `example-1.svg` draws a uniform 2×2 grid, so only the eight number labels and the comment changed; the caption ("the maximum is 2") stayed true
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
