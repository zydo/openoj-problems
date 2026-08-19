## 1254 — Number of Closed Islands

- New id / title / slug: 1254 / Count Closed Grid Islands / `count-closed-grid-islands`
- Old → new API: `closedIsland` → `countClosedGridIslands` (go `countClosedGridIslands`, rust `count_closed_grid_islands`, ts `countClosedGridIslands`); parameter `grid` kept
- Core algorithm / difficulty: flood fill per island, repaint land to water as the visited marker, out-of-bounds step trips the open flag / H2 (unchanged)
- Statement rewritten from spec: yes (0=land/1=water convention preserved — it is functional)
- Examples newly constructed: yes (structure-preserving for both figures: same 5x8 and 3x5 dimensions, same closed-island structure — ring + single cell, single center cell — with fresh layouts; third example, no figure, is a 5x7 with closed islands of sizes 1, 2, 3)
  - E1 → 2 (ring around hole (2,2) + lone cell (1,6); left-column land open); E2 → 1 (only the center cell); E3 → 3 (single, pair, triple)
- Constraints: domain unchanged (`1 <= rows, cols <= 100`, cells 0/1), presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — all three SVGs re-emitted by `.localonly/wave-d-05/gen1254.py` from the per-cell layout rule (rect + text per cell at fixed pitch; water tint, closed-land gray, open-land white; blue-flood variant for the solution figure); fill choice derived from an independent flood-fill in the generator
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 18/18 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- Self-inflicted wound, recorded for the next 800: `adapt_scaffold.py
  --public-json` expects the file to be a bare JSON *array*; my generator
  wrote `{"public": [...]}` and the first verify run crashed deep in the
  API's case validator. cases.json `public` silently became a dict.
- Title kin to `0200_count-grid-islands` / `0305_count-grid-islands-land-updates`.
