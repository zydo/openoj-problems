## 677 — Minimum Time to Visit a Cell In a Grid

- New id / title / slug: 677 / Earliest Arrival in a Timed Grid / `earliest-arrival-in-a-timed-grid`
- Old → new API: `minimumTime` → `earliestArrival` (go `earliestArrival`, rust `earliest_arrival`, ts `earliestArrival`); parameter `grid` kept
- Core algorithm / difficulty: Dijkstra where crossing to a neighbour lands at the smallest time ≥ max(t+1, threshold) with the parity of t+1; `-1` only when both neighbours of the start open after t = 1 / H4 (unchanged)
- Statement rewritten from spec: yes (thresholds instead of "minimum time required to visit"; revisiting explicitly allowed)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[0,2,2],[1,3,0]]` → `5` (two-second bounce buys the middle cell), `[[0,3],[2,0]]` → `-1` (no first step), `[[0,1,5],[2,8,1],[3,4,0]]` → `6` (bounce at the start, then down the column)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — all three (`example-1`, `example-2`, `solution-parity-wait`) are grid-walk drawings whose path geometry and t= annotations encode the old example's route and answer; values alone are text, but the drawing is the data, and no renderer exists for this family (only `container-lines` and `kadane-walk`)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Brute force is a time-expanded BFS over `(r, c, t)` states with no parity
  insight — an independent check that validated Dijkstra on all three
  examples, including the `-1`.
- The optimal-route traces used in the explanations came from the brute
  force's parent map, so the prose walks a real route, not an imagined one.
