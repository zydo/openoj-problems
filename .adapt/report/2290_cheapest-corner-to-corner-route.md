## 2290 — Minimum Obstacle Removal to Reach Corner

- New id / title / slug: 2290 / Cheapest Corner-to-Corner Route / `cheapest-corner-to-corner-route`
- Old → new API: `minimumObstacles` → `cheapestCornerRoute` (go `cheapestCornerRoute`, rust `cheapest_corner_route`, ts `cheapestCornerRoute`); parameter `grid` kept
- Core algorithm / difficulty: 0-1 BFS on the cell graph, obstacle-entry edges weight 1, free-entry weight 0, deque front/back discipline / H3 (unchanged)
- Statement rewritten from spec: yes — cost framing ("entering an obstacle clears it and counts once") instead of the removal framing; "remove" → "clear"
- Examples newly constructed: yes (structure-preserving: yes — all three figures edited)
  - `[[0,1,0],[1,1,1],[0,1,0]] → 2` (cross layout; the two exits of (0,0) and two entrances of (2,2) are all obstacles), `[[0,1,1,0,0],[0,1,0,0,0],[0,0,0,1,0]] → 0` (free snake route)
- Constraints: domain unchanged (1–10⁵ per side, 2–10⁵ cells, 0/1 cells, open corners), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example-1 (before/after fills + cleared-cell dashes), example-2 (fill changes), solution-zero-one-bfs (fills, grid values, dist badges `[[0,1,1],[1,2,2],[1,2,2]]`, narration). The optimal-path polyline needed no change: the new example's drawn route visits the same cell sequence as the source's
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Zero-symbol grids dodge the stale-literal gate entirely (arrays over
  `{0,1}` are excluded as non-identifying), so example choice here was
  driven by figure editability alone.
- Editing obstacle *fills* counts as a label edit in practice — the
  geometry (cell grid, arrows, polyline anchors) is dimension-derived,
  not data-derived. The one genuinely data-derived element, the optimal
  path polyline, I kept by choosing an example whose drawn route has the
  same cell sequence; a different route would have meant recomputing
  polyline points from cell centres (mechanical, but a redraw in spirit).
