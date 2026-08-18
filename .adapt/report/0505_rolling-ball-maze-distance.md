## 0505 — The Maze II

- New id / title / slug: 505 / Rolling Ball Maze Distance / `rolling-ball-maze-distance`
- Old → new API: `shortestDistance` → `mazeRollDistance` (go `mazeRollDistance`, rust `maze_roll_distance`, ts `mazeRollDistance`); parameters `maze`/`start`/`destination` kept
- Core algorithm / difficulty: Dijkstra over halting cells, rolls simulated to edge weights / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes
  - 4x5 maze `[0,0]→[3,4] → 7` (roll chain 2+2+1+2 with wall-by-wall explanation), single-row corridor `→ -1` (pass-over ≠ stop), 3x3 `[0,0]→[2,2] → 4`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **dropped** — `solution-rolling-path.svg` draws the source's 5x5 maze: wall rectangles, S/D circles, path arrows and the `1+1+3+1+2+2+2 = 12` sum are all geometry encoding that example's data; no maze renderer exists in `adapt_figures.py`. Phase two can redraw against the new Example 1 (whose chain 2+2+1+2 is equally drawable).
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Maze-row literals are the trap here: the stale gate flags any mixed 0/1
  row of the source statement, and my first draft of Example 1 reused the
  rows `[0,0,1,0,0]` and `[0,0,0,1,0]` verbatim (one as a coincidental
  collision, one by design). All-0 rows are exempt (two-symbol alphabet),
  so corridors are safe.
- The maze family continues at 0490 (part I, boolean reachability) and 0499
  (part III, shortest path with holes) — neither adapted yet. The family
  head I chose, "Rolling Ball Maze", leaves room: "Rolling Ball Maze
  Reachable" / "Rolling Ball Maze Through Holes". Worth recording for those
  chunks.
