## 2258 — Escape the Spreading Fire

- New id / title / slug: 2258 / Latest Safe Departure / `latest-safe-departure`
- Old → new API: `maximumMinutes` → `latestDeparture` (go `latestDeparture`, rust `latest_departure`, ts `latestDeparture`); parameter `grid` kept
- Core algorithm / difficulty: multi-source BFS for fire arrival times, per-wait BFS reachability with strict/lenient entry rules, sentinels then upper-mid binary search over `[0, 10⁹]` / H4 (unchanged)
- Statement rewritten from spec: yes (grass/fire/wall → open ground/fire/rock; safehouse → exit)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[0,0,0,0,0],[0,2,0,0,0],[0,1,2,0,0]]` → 2 (fire channelled up the left column, 3 minutes to the start), `[[0,0,0,0],[1,1,0,0],[0,0,0,0]]` → -1, `[[0,0,0,0,0],[0,2,2,2,0],[0,2,1,2,0],[0,2,2,2,0]]` → 10⁹ (rock ring seals the fire)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — all three example figures draw the grid at successive minutes, so the fire-spread panels are geometry keyed to the old data; no renderer for the family. Phase 2 candidates.
- Gates: check ✓ verify ✓ (7/7 languages, 25/25 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Example grids were found by scripted search (enumerate one-fire + few-wall
  grids, score with the reference) rather than by hand — hand-designed
  "obviously fine" grids kept coming out -1 because the fire's BFS outruns
  intuition. The sealed-ring 1e9 example must seal all four ORTHOGONAL
  neighbours (diagonals do not spread).
- The E1 explanation first drafted the fire in the wrong cell; recomputing
  the fire schedule line by line caught it. Narratives about spread order
  deserve the same verification as expected values.
