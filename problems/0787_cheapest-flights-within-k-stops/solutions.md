# Solutions — Cheapest Flights Within K Stops

## Bellman-Ford limited to k+1 rounds

Bellman-Ford relaxation has a useful property: after `r` full rounds of relaxing every edge, `dist[v]` equals the cheapest cost of reaching `v` using at most `r` edges. A route with at most `k` stops uses at most `k + 1` flights, so running exactly `k + 1` rounds — starting from `dist[src] = 0` and infinity elsewhere — leaves `dist[dst]` holding the cheapest legal fare, or infinity if no such route exists (then return `-1`).

The critical detail is snapshotting: each round relaxes from a frozen copy `ndist = dist[:]` of the previous round's array, writing improvements into `ndist`. Relaxing in place would let a path chain several edges within one round, producing routes that exceed the stop limit. With the copy, one round extends every known route by at most one edge.

Two further refinements keep it fast: if a round changes nothing (`changed` stays false), later rounds cannot change anything either, so the loop breaks early — important when the graph's shortest paths settle before the budget runs out. Non-negative prices mean no negative-cycle handling is needed; the infinity sentinel survives at `dst` exactly when the destination is unreachable within the allowance.

Example 1 runs exactly `k + 1 = 2` rounds over `flights`:

1. `dist` starts as `[0, inf, inf, inf]`; each round relaxes from a frozen copy of the previous round.
2. Round 1: only `0 -> 1` (100) is usable, giving `[0, 100, inf, inf]`.
3. Round 2: `1 -> 2` and `1 -> 3` relax to 200 and 700. The cheaper route `0 -> 1 -> 2 -> 3` (cost 400) would need `dist[2]` inside this same round, but the frozen copy still holds infinity there, so it cannot chain early.
4. After two rounds `dist[3] = 700`, the best fare within one stop.

**Complexity:** `O(k * E)` time (`k + 1` rounds over all flights), `O(n)` space for the two distance arrays.
