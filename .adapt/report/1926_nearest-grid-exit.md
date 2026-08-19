## 1926 — Nearest Exit from Entrance in Maze

- New id / title / slug: 1926 / Nearest Grid Exit / `nearest-grid-exit`
- Old → new API: `nearestExit` → `nearestGridExit` (go `nearestGridExit`, rust `nearest_grid_exit`, ts `nearestGridExit`); parameters `maze`, `entrance` kept (conventional)
- Core algorithm / difficulty: BFS from the entrance, first dequeued border cell wins / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - 5x5 walled ring with one bottom opening, entrance [2,2] → 2; 3x4 with entrance [1,0] on the border → 2 (entrance-is-not-an-exit); 2x3 sealed corner [0,0] → -1
- Constraints: domain unchanged (`m, n <= 100`, `'.'`/`'+'`, entrance open), presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (4 of 4 — example-1/2/3.svg and solution-maze-bfs.svg). Maze walls are drawn as geometry (colored rects per cell); no renderer exists for the family, and any new example moves walls. Phase two can redraw.
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 15/15 cases) check ✓ (per-bundle static)

### Notes

- The solutions.md guide referenced `figures/solution-maze-bfs.svg`, which walked
  the old example; the reference was removed with the figure.
- `entrance`/`exit` kept in prose — they are the task's natural vocabulary, and
  the parameter was not renamed, so the stale gate has nothing to flag.
