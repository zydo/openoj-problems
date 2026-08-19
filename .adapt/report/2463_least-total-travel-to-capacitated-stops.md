## 2463 — Minimum Total Distance Traveled

- New id / title / slug: 2463 / Least Total Travel to Capacitated Stops / `least-total-travel-to-capacitated-stops`
- Old → new API: `minimumTotalDistance` → `leastTotalTravel` (go `leastTotalTravel`, rust `least_total_travel`, ts `leastTotalTravel`); parameters `robot` → `units`, `factory` → `stations`
- Core algorithm / difficulty: non-crossing assignment on a line (triangle-inequality exchange) → partition DP over sorted units, each stop absorbing a consecutive block up to its limit, block cost via prefix sums of `|unit - pos|` / H4 (unchanged)
- Statement rewritten from spec: yes (robots/factories scenario replaced by units/stops; the source's movement/collision narrative is LeetCode skin over a capacitated line-assignment problem and is gone)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `units [2,6,9] stations [[5,2],[9,1]]` → `4` (two units fold into one stop, third already home), `units [-1,2] stations [[-5,1],[3,1]]` → `5` (limit-1 stops force the outward split), `units [1,2,3] stations [[0,0],[3,3]]` → `3` (a limit-0 stop is unusable)
- Constraints: domain unchanged, presentation rewritten (position-uniqueness and solvability guarantees kept)
- Skeletons regenerated: all 7
- Figures: dropped — both number-line drawings place robots/factories by x-coordinate, so the geometry *is* the data; a label edit cannot change the example
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Parameter renames plus scenario nouns meant the copied solutions' comments
  needed a hand pass: the blind word-boundary rename produced "each stations
  serves ... robots" and "repair" phrasing. Six find-and-replace pairs fixed
  all seven ports at once — the comments are copies of each other.
- The stale gate cannot catch this (`robots`/`factories` are plurals, and the
  singulars only match at declaration sites), so comment readability after a
  noun rename is on the adapter, not the gate.
- Source literal set here is tiny — `0,4,6` was the only multi-symbol fenced
  array (nested `[[2,2],[6,2]]` is excluded by the bracket regex, `1,-1` is a
  two-symbol alphabet).
