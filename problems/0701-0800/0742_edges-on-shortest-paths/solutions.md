# Solutions — Edges on Shortest Paths

## Dijkstra from both ends

Whether an edge can carry a minimal route is decided by three numbers, none of
them global. A cheapest route through edge `(u, v, w)` arrives at one endpoint
having spent the distance from `0` to that endpoint, crosses the edge, and then
needs the distance from the other endpoint to `n - 1`. So the edge qualifies
exactly when `dist0[u] + w + distN[v]` — or the mirror sum `dist0[v] + w +
distN[u]`, since an undirected edge may be crossed either way — equals the
minimal total weight. The whole task therefore reduces to filling two distance
arrays, and each is a standard heap Dijkstra over the adjacency list (entries
are finalized in increasing order; stale heap entries are skipped with the
`d != dist[u]` check).

After the two runs, `total = dist0[n - 1]` is the reference weight every
minimal route must match. If `n - 1` is unreachable this value is infinite and
no edge can qualify, so the method returns all false immediately. Otherwise
each edge is tested in both orientations against `total`.

![The example 1 graph labelled with d0/d5 on every node; solid edges pass the d0[u] + w + d5[v] = 6 test, dashed ones fail it.](figures/solution-two-dijkstra.svg)

Worked on example 1, where `total = 6`: node `1` sits at distance `2` from the
start and node `4` at distance `3` from the end, so edge `(1, 4, 1)` passes
with `2 + 1 + 3 = 6` and is part of the route `0 -> 1 -> 4 -> 5`. Edge
`(0, 2, 5)` fails instead: crossing it in the useful direction costs
`0 + 5 + 7 = 12`, and no route of weight 6 can afford that.

Correctness rests on the fact that any route through edge `(u, v)` splits at
that edge: its weight is (shortest 0-to-u) + w + (shortest v-to-n-1) or the
mirrored sum. Equality with `total` is necessary — each piece alone is at
least the corresponding shortest distance — and sufficient, because
concatenating the three optimal pieces yields a genuine minimal route.

**Complexity:** `O((n + m) log n)` time, `O(n + m)` space.
