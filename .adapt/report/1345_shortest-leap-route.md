## 1345 — Jump Game IV

- New id / title / slug: 1345 / Shortest Leap Route / `shortest-leap-route`
- Old → new API: `minJumps` → `shortestLeapRoute` (go `shortestLeapRoute`, rust `shortest_leap_route`, ts `shortestLeapRoute`); parameter `arr` → `nums`
- Core algorithm / difficulty: BFS over an implicit graph, indices bucketed by value, buckets emptied on use / H3 (unchanged)
- Statement rewritten from spec: yes — the three move kinds are given as one bulleted definition of a single leap, and the "cannot leave the array" guarantee folded into it
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,8,8,2,5,13,2] → 3` (two value-leaps and one step back, with the two-leap impossibility argued), `[6] → 0` (start is the target), `[3,9,4,9,3] → 1` (ends share a value)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- First of the three-problem sequel family in this wave; see the shared naming
  note in `2297_cheapest-leap-route.md`.
- `arr` → `nums` was taken for family consistency (the other two carry `nums`
  already). All seven source solutions were grepped for `nums` first: no port
  uses it, so the rename cannot collide when the ledger merge makes the api map
  live for the compatibility gate. Confirmed by hand as well: staging the source
  solutions with `arr` → `nums` applied and running them against the adapted
  cases passes in all seven languages.
- The source comment "minimum step count" was updated to "leap count" in all
  seven ports; nothing else in the solutions changed.
