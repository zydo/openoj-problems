# Solutions — Reachable Vertices After Edge Expansion

## Dijkstra Plus Leftover-Move Counting

Compress every expanded chain back into one weighted link. A chain with `c`
internal vertices costs `c + 1` moves from endpoint to endpoint. Dijkstra on
this compact network gives the shortest distance to every original vertex;
count those whose distance does not exceed `moveBudget`.

Next count internal vertices link by link. From endpoint `u`, at most
`max(0, moveBudget - distance[u])` internal vertices can be entered. Compute
the analogous amount from `v`. The two fronts together reach
`min(c, left + right)` distinct internal vertices, with the cap preventing
double counting when they overlap.

Summing reachable original and internal vertices yields the answer. An
unreachable endpoint contributes zero remaining moves, while vertex zero
always contributes as an original vertex even in a disconnected network.

**Complexity:** `O(E log V)` time and `O(V + E)` space.
