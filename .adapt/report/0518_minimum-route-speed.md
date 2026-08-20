## 518 — Minimum Speed to Arrive on Time

- New id / title / slug: 518 / Minimum Route Speed / `minimum-route-speed`
- Old → new API: `minSpeedOnTime` → `minRouteSpeed` (go `minRouteSpeed`, rust `min_route_speed`, ts `minRouteSpeed`); parameters `dist`, `hour` kept (conventional — `hour` survives because the whole-hour departure rule needs a time unit; a rename to `budget` was rejected: it collides with a local in the Go/Rust/TS/Java source solutions, the 0587 trap)
- Core algorithm / difficulty: binary search on the speed with exact-fraction (Python) / integer-hundredths (others) feasibility checks / H3 (unchanged)
- Statement rewritten from spec: yes — train-commute scenario dropped; framed as an n-segment route entered at whole hours, final segment unrounded
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,5], hour 3.5 → 4`, `[1,1,1], hour 2.01 → 100` (fractional last leg decides), `[4,9,6], hour 2 → -1` (n-1 whole hours lower-bound)
- Constraints: domain unchanged (n ≤ 10⁵, dist[i] ≤ 10⁵, 1 ≤ hour ≤ 10⁹, ≤ 2 decimals, answer ≤ 10⁷), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Solution comments said "the next train departs then"; now "the next
  segment is entered then". The Java comment had the phrase split across
  lines and needed a hand fix after the scripted replace.
- Example 2 (`[1,1,1], 2.01`) is the case that punishes float comparison —
  worth keeping for that reason.
