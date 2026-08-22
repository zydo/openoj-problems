# Solutions — Most Isolated Node Under a Reach Budget

Both answers rest on the same table: every neighborhood question is a
shortest-path question, and `n` is small enough to afford all the pairwise
distances at once. Floyd-Warshall fills the table as one waypoint DP, paying
the same cube however many edges the graph has. Dijkstra from every node
fills it a row at a time, settling each source's distances with a heap and
charging only for edges actually present.

## Floyd-Warshall All-Pairs Distances

With at most 100 nodes, the cheapest route to every neighborhood at once is
one all-pairs pass. Seed a matrix with 0 on the diagonal, the direct edge
weights mirrored across it, and infinity everywhere else; then let each node
`k` in turn act as a waypoint and relax `dist[i][j]` against
`dist[i][k] + dist[k][j]`. After the triple loop the matrix holds true
cheapest-route costs, and a pair still at infinity is genuinely disconnected.
Skipping the inner loop when `dist[i][k]` is still infinity is a constant-
factor trim: that row cannot improve through `k` yet.

The selection pass reads the matrix row by row: node `i`'s neighborhood size
is the number of entries at or below `budget`, the diagonal excluded.
Scanning `i` upward and replacing the leader on a strictly smaller count —
or on an equal count, since the later index is the larger number — settles
the tie-break by construction.

Weights are at least 1, so the zero diagonal never leaks into a count. In
the first example, `n = 4` with `[[0,1,4],[1,2,1],[1,3,5],[2,3,2]]` and
`budget = 5`, the matrix gives rows of neighborhood sizes `[2, 3, 3, 2]`;
nodes 0 and 3 tie, and the scan keeps 3. Disconnected pairs never matter:
their infinity sits above any budget.

**Complexity:** `O(n³)` time, `O(n²)` space.

## Dijkstra from Every Node

Floyd-Warshall's cube never asks how many edges the graph has; this variant
does. Mirror each undirected edge both ways into an adjacency list, then let
every node run its own single-source search: tentative distances start at 0
for the source and infinity elsewhere, and a min-heap always offers the
closest unsettled node.

Positive weights are the whole licence for the greed. The smallest tentative
distance on the heap is already final — any other route to that node must
leave through a node at least as far — so each pop settles one node for
good. Settling a node relaxes its edges, re-queueing a neighbor only when the
route through it strictly improves the record; heap entries that went stale
before a shorter route was found are discarded by a `d > dist` guard, and a
node still at infinity when the heap empties is genuinely disconnected.

Each finished run contributes one row of the same table Floyd-Warshall would
have filled, so the selection pass is unchanged: the neighborhood size is
the count of entries at or below `budget`, the zero at the source excluded,
and the ascending scan with equal-count replacement keeps node 3 in the
first example just the same — the distances are the distances, whichever
method produced them. The trade behind the placement is the heap's log
factor against the cube's indifference to density: sparse graphs win big,
and even the complete graph at `n = 100` is a few million cheap heap
operations.

**Complexity:** `O(n (E + n) log n)` time, `O(n + E)` space.
