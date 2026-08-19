## 0332 — Reconstruct Itinerary

- New id / title / slug: 332 / Order Every Flight / `order-every-flight`
- Old → new API: `findItinerary` → `orderFlights` (go `orderFlights`, rust `order_flights`, ts `orderFlights`); parameter `tickets` → `flights`
- Core algorithm / difficulty: Hierholzer's Eulerian path with alphabetically ordered departures / H4 (unchanged)
- Statement rewritten from spec: yes — the comparison rule is stated as position-by-position on airport codes rather than as one concatenated string
- Examples newly constructed: yes (structure-preserving: partly)
  - `[["BNE","DUB"],["JFK","BNE"],["CPH","OSL"],["DUB","CPH"]] → ["JFK","BNE","DUB","CPH","OSL"]` — a chain, five airports, matching the drawn shape
  - `[["JFK","CDG"],["CDG","JFK"],["JFK","AMS"]] → ["JFK","CDG","JFK","AMS"]` — the earliest departure is a dead end
  - `[["JFK","LIM"],["LIM","JFK"],["JFK","LIM"],["LIM","GRU"]] → ["JFK","LIM","JFK","LIM","GRU"]` — a repeated flight
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `example-1.svg` **labels updated** (same five-node chain, new codes, fresh caption and alt text); `example-2.svg` and `solution-eulerian-path.svg` **dropped**
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `"JFK"` is hard-coded in the hidden cases and in every reference solution, so
  the start airport is not renameable — the airline framing has to stay. Only
  the other codes are free.
- Both dropped figures draw one specific five-edge multigraph over three
  airports: node positions and arc curvature encode that exact edge multiset, so
  reusing them would have forced an example isomorphic to the source's — a
  relabel, not a new example. The chain figure is the opposite case: a straight
  line of five nodes is generic, so new codes fit it exactly.
- Renaming the parameter means renaming it **inside the adapted solutions too**
  — the stale gate reads a solution's own parameter list. The compatibility gate
  is unaffected (it renames only entry points in the *source* copies, whose
  locals keep the old name), which is why the two gates disagreed for one round.
