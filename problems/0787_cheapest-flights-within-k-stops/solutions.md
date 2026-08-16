# Solutions — Cheapest Flights Within K Stops

## Bellman-Ford limited to k+1 rounds

Bellman-Ford relaxation has a useful property: after `r` full rounds of relaxing every edge, `dist[v]` equals the cheapest cost of reaching `v` using at most `r` edges. A route with at most `k` stops uses at most `k + 1` flights, so running exactly `k + 1` rounds — starting from `dist[src] = 0` and infinity elsewhere — leaves `dist[dst]` holding the cheapest legal fare, or infinity if no such route exists (then return `-1`).

The critical detail is snapshotting: each round relaxes from a frozen copy `ndist = dist[:]` of the previous round's array, writing improvements into `ndist`. Relaxing in place would let a path chain several edges within one round, producing routes that exceed the stop limit. With the copy, one round extends every known route by at most one edge.

Two further refinements keep it fast: if a round changes nothing (`changed` stays false), later rounds cannot change anything either, so the loop breaks early — important when the graph's shortest paths settle before the budget runs out. Non-negative prices mean no negative-cycle handling is needed; the infinity sentinel survives at `dst` exactly when the destination is unreachable within the allowance.

**Complexity:** `O(k * E)` time (`k + 1` rounds over all flights), `O(n)` space for the two distance arrays.
