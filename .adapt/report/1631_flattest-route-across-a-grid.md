## 1631 — Path With Minimum Effort

- New id / title / slug: 1631 / Flattest Route Across a Grid / `flattest-route-across-a-grid`
- Old → new API: `minimumEffortPath` → `flattestRoute` (go `flattestRoute`, rust `flattest_route`, ts `flattestRoute`); parameter `heights` kept (conventional)
- Core algorithm / difficulty: three variants kept — bottleneck Dijkstra, binary search over caps with BFS, Kruskal-style union-find / H3 (unchanged)
- Statement rewritten from spec: yes — a corner-to-corner walk whose steepness (largest single height step) is minimized
- Examples newly constructed: yes (structure-preserving: yes — all three keep their grids' shapes and the drawn routes: left-column-plus-bottom-row, rim walk, snake corridor)
  - `[[2,3,9],[4,15,12],[6,5,7]] → 2` (walk 2,4,6,5,7 beats the rim, whose 3→9 climb costs 6)
  - `[[2,3,3],[4,15,4],[6,5,5]] → 1` (rim walk 2,3,3,4,5), `[[3,7,3,3,3],…] → 0` (corridor of 3s around the 7s)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (single method; the three `solution_<variant>` ports renamed per language)
- Figures: **regenerated** — all four re-emitted by `.localonly/wave-e-05/figs_1631.py`: the three example grids keep their cell sizes/routes; the Dijkstra figure's distance rings were recomputed (final dists `[[0,1,5],[2,5,5],[2,2,2]]` — asserted against a scratch bottleneck Dijkstra before emitting) and keep the 0-dark/1-mid/2-light legend. Renders eyeballed at high res.
- Gates: check ✓ verify ✓ (7/7 languages × 3 variants, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after alt-text rewrite)

### Notes

- Multi-variant bundle: variant ids (`dijkstra`, `binary_search_bfs`, `kruskal`) and their `solutions.md` headings kept verbatim; only the prose inside was rewritten.
- The overlap gate normalizes to letters only — digits are dropped — so an alt text whose every word matches the source's fails no matter how different the numbers are. Alt texts need genuinely different wording, not value swaps.
- The source `example-2.svg` shades eight cells (everything except the blocker) while its alt text claims only the route is shaded; my regeneration shades exactly the five route cells, matching what the alt text says.
