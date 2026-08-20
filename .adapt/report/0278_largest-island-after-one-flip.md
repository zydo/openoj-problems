## 278 — Making A Large Island

- New id / title / slug: 278 / Largest Island After One Flip / `largest-island-after-one-flip`
- Old → new API: `largestIsland` → `largestIslandAfterFlip` (go `largestIslandAfterFlip`, rust `largest_island_after_flip`, ts `largestIslandAfterFlip`); parameter `grid` kept (conventional)
- Core algorithm / difficulty: flood-fill each island into an id matrix with sizes, then score every `0` cell as `1 +` the deduplicated neighbour sizes / H3 (unchanged)
- Statement rewritten from spec: yes — says outright that declining the change is allowed, which the source only implies through its third example
- Examples newly constructed: yes (structure-preserving: no — see figures)
  - `[[1,0,1],[1,0,1],[0,0,0]] → 5` (two islands welded), `[[1,1,0],[1,0,0],[0,0,1]] → 4` (one island bordering the same cell twice), `[[1,1,1],[1,1,1],[1,1,1]] → 9` (nothing to change)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **dropped** — `solution-island-labels.svg`
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n-a compatibility ✓ stale ✓ overlap ✓

### Notes

- The dropped figure was a 2 x 2 grid drawing the source's first example cell by
  cell, so its geometry is the old data and there is no renderer for the family.
  Worth flagging for phase 2 rather than a straight redraw: the figure's own
  caption claims to show why duplicate neighbour ids must be deduplicated, and a
  2 x 2 grid *cannot* show that — an island touching one cell from two sides needs
  an L shape, so the smallest honest drawing is 3 x 3. The new Example 2 is
  exactly that grid and would make a better figure than the one removed.
- All three examples were moved to 3 x 3. At 2 x 2 the interesting configurations
  are so few that any "new" example is a permutation of the source's, which the
  no-permutation rule forbids.
