# Solutions — Most Isolated Node Under a Reach Budget

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
