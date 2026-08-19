## 0864 — Shortest Path to Get All Keys

- New id / title / slug: 864 / Steps to Gather Every Key / `steps-to-gather-every-key`
- Old → new API: `shortestPathAllKeys` → `stepsToGatherKeys` (go
  `stepsToGatherKeys`, rust `steps_to_gather_keys`, ts `stepsToGatherKeys`);
  parameter `grid` kept (conventional)
- Core algorithm / difficulty: BFS over (cell, key-bitmask) states / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no — figures dropped)
  - `["@#b.",".#A.","a...","##B."]` → 6, where the only route to the second key
    runs through the door the first key opens; `["@..B.b",".#.#..","a.A..."]` → 9,
    where one door is never worth entering; `["@.A","###","a.."]` → -1
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (3 example figures + 1 solution figure). Their geometry *is*
  the data — wall cells are filled rects and the route is a polyline over
  specific coordinates — so no label edit could carry them, and preserving the
  drawn structure would have meant reusing the source grids. No renderer exists
  for this family; phase 2 should consider redrawing, the picture helps.
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's `solutions.md` figure walked through the source example, so it
  had to go with the rest; the exposition was rewritten to stand without it.
