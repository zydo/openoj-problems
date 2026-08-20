# Solutions — Count Shortest Routes

## Dijkstra with a Parallel Path Counter

Run the priority-queue shortest-path sweep from junction 0, but carry a
second array alongside the distances: `ways[v]`, the number of distinct
fastest routes from 0 to `v`, kept modulo `10⁹ + 7`. Adjacency is stored
both ways, since every road can be driven in either direction, and the two
arrays advance in lockstep as edges relax.

Relaxing a road from `u` toward `v` with travel time `t` (with `u` popped at
distance `d`) splits into three outcomes. A strictly better `d + t < dist[v]`
means every route counted toward `v` so far is dominated: overwrite the
distance and reset `ways[v]` to `ways[u]`. An exact tie `d + t == dist[v]`
means this road extends an equally fast route, so add `ways[u]` into
`ways[v]` modulo the prime. Anything longer is ignored. Travel times are
positive, so by the time a junction is popped with `d == dist[u]` all roads
into it have already been relaxed and `ways[u]` is finished; entries popped
late with `d > dist[u]` are stale estimates and are skipped.

The value returned is `ways[n - 1]`. Roads never loop (`u != v`) and the
network is connected, so the destination is certain to be reached and
finalized with its count complete. In the four-junction example both tied
routes relax into junction 3 at distance 8, accumulating `1 + 1 = 2` before
the 9-minute direct road is discarded as too long.

**Complexity:** `O(E log V)` time, `O(V + E)` space.
