## 1937 — Maximum Number of Points with Cost

- New id / title / slug: 1937 / Row Picks With Distance Penalty / `row-picks-with-distance-penalty`
- Old → new API: `maxPoints` → `maxRowScore` (go `maxRowScore`, rust `max_row_score`, ts `maxRowScore`); parameter `points` kept (conventional)
- Core algorithm / difficulty: row DP with left/right running maxima splitting the abs penalty / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[[2,4,6],[3,9,2],[7,1,4]] → 20` and `[[3,8],[5,6],[9,2]] → 22` keep the figures' grids, dimensions, and tinted optimal cells; third shape `[[2,7,1,3],[6,1,5,2]] → 12` (2 rows, wide)
- Constraints: domain unchanged (`m, n, m*n, values <= 10^5`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (2 of 2 — cell values only; tinted optimal cells re-verified by brute force so the highlight stays truthful)
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static)

### Notes

- Two sed lessons in one problem: (1) forgot the rust snake_case rename
  entirely — always rename BOTH `maxPoints` and `max_points`; (2) BSD sed
  has no `\b`, so `\b`-anchored seds silently no-op — plain-string replace
  after grepping occurrence count is the reliable move on this machine.
- Structure-preserving examples for highlighted-cell figures must keep the
  *argmax path* fixed, not just the grid shape — brute force over all column
  tuples confirmed each tinted path is the unique optimum before the label
  edit.
