## 1326 — Minimum Number of Taps to Open to Water a Garden

- New id / title / slug: 1326 / Fewest Stations to Cover a Segment / `fewest-stations-to-cover-a-segment`
- Old → new API: `minTaps` → `minStations` (go `minStations`, rust `min_stations`, ts `minStations`); `ranges` → `radii`; `n` kept
- Core algorithm / difficulty: greedy minimum-interval-cover, farthest-reach sweep / H3 (unchanged)
- Statement rewritten from spec: yes (garden/taps → stations with reach over a segment)
- Examples newly constructed: yes (structure-preserving: n/a — figures regenerated instead, see below)
  - `n=6 [1,2,0,3,0,0,1]` → 1 (station 3 spans [0,6]), `n=8 [2,0,2,0,3,0,2,0,2]` → 2 (two-step greedy), `n=4 [1,0,0,0,1]` → -1 (gap between the ends)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — both source SVGs are deterministic functions of the data (example-1.svg: number line pitch 58 from x=70, bars per non-degenerate station; solution arcs: pitch 76 from x=60, rx = half span), so both were re-emitted from the recovered layout rules for the new example; `solution-tap-arcs.svg` renamed `solution-station-arcs.svg`
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The parameter rename `ranges` → `radii` was checked against every source
  solution's locals first: `reach` (solution.py's loop variable) was the
  obvious candidate and would have collided in the cpp port, `radii` is
  unused everywhere.
- Source example 2's `[0,0,0,0]` literal is below the stale gate's
  two-character-alphabet threshold, so only `[3,4,1,1,0,0]` needed avoiding.
- Public expecteds cross-checked by exhaustive subset enumeration
  (`.localonly/wave-e-01/pub_1326.py`), not just the reference.
