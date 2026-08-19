## 1105 — Filling Bookcase Shelves

- New id / title / slug: 1105 / Minimum Bookcase Height / `minimum-bookcase-height`
- Old → new API: `minHeightShelves` → `minimumBookcaseHeight` (go `minimumBookcaseHeight`, rust `minimum_bookcase_height`, ts `minimumBookcaseHeight`); parameters `books`, `shelfWidth` kept
- Core algorithm / difficulty: linear-partition DP, run-max cost, width-pruned backward scan / H3 (unchanged)
- Statement rewritten from spec: yes (books/shelves domain kept — it is the genuine task; prose fresh)
- Examples newly constructed: yes (structure-preserving: yes in spirit — the figure example keeps 7 books on 3 shelves with book 2 starting shelf 2)
  - `[[2,2],[2,5],[2,5],[1,4],[1,5],[1,4],[1,5]] W=4` → 12 (height tradeoff beats width greed); `[[3,4],[2,6],[2,2]] W=7` → 6 (one shelf suffices); `[[4,2],[4,1],[4,3]] W=8` → 5 (forced split, short book rides either side)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — `example-1.svg` geometry encodes the data (26 px/unit), but the layout rule is documented in the original's comment and fully recoverable; re-emitted for the new data with the same conventions (16 px between shelves, per-shelf height gauges)
- Gates: check ✓ (tree run) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **Source-literal collisions are easy in pairs-of-small-ints problems.**
  The stale gate pins every inner array of the source's public examples
  (`[1,1]`, `[2,3]`, `[1,2]`, `[1,3]`, `[2,4]`, `[3,2]`), which wipes out
  most natural `[1..3]`-valued books; the final data avoids that set and
  was verified to collide with nothing.
- The first figure regeneration silently dropped the 16 px inter-shelf gap
  (books touched the shelf line above); the recovered rule from the source
  SVG is `line[k] = line[k-1] + 16 + maxh_k * 26`. Re-checked the render
  against the original's spacing before settling.
- The DP witness (argmin breakpoints) drives the figure: the example was
  chosen so the witness is exactly the source figure's shelf structure.
