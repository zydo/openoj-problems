## 2477 — Minimum Fuel Cost to Report to the Capital

- New id / title / slug: 2477 / Carpool Fuel to the Capital / `carpool-fuel-to-the-capital`
- Old → new API: `minimumFuelCost` → `carpoolFuel` (go `carpoolFuel`, rust `carpool_fuel`, ts `carpoolFuel`); parameters `roads`, `seats` kept
- Core algorithm / difficulty: root at the capital, accumulate subtree sizes in reverse BFS order, add `ceil(size/​seats)` liters per non-root edge / H3 (unchanged)
- Statement rewritten from spec: yes (representative/meeting framing tightened to "everyone drives to the capital, cars may be shared freely, one liter per car per edge")
- Examples newly constructed: yes (structure-preserving: yes, renumbered)
  - star `roads [[0,2],[0,3],[0,1]] seats 4` → `3` (star shape is forced for n=4; seats changed 5→4, road order changed — answer and per-edge liters are shape-determined), `[[0,2],[0,6],[0,4],[6,1],[4,5],[5,3]] seats 2` → `7` (same 7-node shape, ids permuted so the shared 2-liter edge stays on the right branch), `roads [] seats 4` → `0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — figure 2's node ids permuted in one pass (0 pinned as capital), edge comment, carpool caption ("reps 3, 4 and 5 share the edge 4 -> 0"); figure 1's seats note; per-edge liter labels are shape-derived and stayed
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Star example is the tightest figure constraint so far: with the capital
  pinned at 0 and three leaves, the road set is forced and the answer is 3
  for any seat count — only the scalar `seats` and the road order were free.
  Flagged here rather than pretending otherwise; the pedagogical point
  (no through-traffic means no sharing) survives any seats value.
- No fenced-array literals in the source statement at all (every road list
  is nested `[[0,1],...]`, which the stale gate's bracket regex skips), so
  identifier renames were the whole stale surface.
