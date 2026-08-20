## 134 — Longest Increasing Path in a Matrix

- New id / title / slug: 134 / Longest Ascending Grid Path / `longest-ascending-grid-path`
- Old → new API: `longestIncreasingPath` → `longestAscendingPath` (go `longestAscendingPath`, rust `longest_ascending_path`, ts `longestAscendingPath`)
- Core algorithm / difficulty: value-ordered DP over the cell DAG (sorted cells, strict-neighbor transitions) / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both 3×3 figures kept)
  - `[[11,11,4],[7,7,10],[5,3,3]]` — comparison-isomorphic to the source's first example (same equalities, same strict order), so the shaded cells and arrows are untouched and only the nine labels changed; longest walk 3→5→7→11; `[[7,9,10],[7,6,13],[6,6,5]]` likewise preserves the corner-bending path 7→9→10→13; `[[7]]` covers the 1×1 grid
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1, example-2, solution-cell-dag — dp grid numerically unchanged because the comparison structure is identical)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- **Grid figures whose path shading/arrows encode the example:** a
  comparison-isomorphic replacement matrix (identical equality/inequality
  relations among all adjacent cells) keeps every shaded cell, arrow and dp
  value valid while changing all labels — cheaper than dropping and better
  for the reader. The dp table needed zero edits.
- The source's solution-figure header said "path length starting at the
  cell" while its numbers are the *ending* lengths; the adapted figure
  corrects the header to "longest path ending at the cell".
- First overlap-gate failure in this chunk came from carrying the source's
  image alt text over verbatim — alt text counts as prose. Rewritten.
