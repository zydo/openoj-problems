# Solutions — Path With Minimum Effort

## Modified Dijkstra

A path's effort is not the sum of its steps but the maximum height difference along it, which makes this a bottleneck shortest-path problem. Dijkstra adapts directly: replace addition with `max`. The distance to a neighbor becomes `max(dist[current], |heights difference|)`, and the invariant — the popped cell with the smallest tentative effort already has its final effort — still holds because `max` is monotone and non-negative.

The priority queue starts at `(0, 0, 0)` with effort 0. Each pop checks whether it is the bottom-right cell and returns immediately, since the first time the goal is popped its effort is optimal; a stale-entry guard (`d > dist[r][c]`) skips outdated heap entries, and each of the four cardinal neighbors is relaxed only when the new bottleneck effort strictly improves its recorded value. A 1×1 grid returns 0 on the very first pop, and non-positive height differences never increase the running maximum.

![The example grid with each cell's height and final bottleneck distance, colored by distance ring; the settled route runs 1 → 3 → 5 → 3 → 5 down the left column and across the bottom row, never stepping up more than 2.](figures/solution-bottleneck-dijkstra.svg)

Because every relaxation only lowers a cell's tentative effort and each cell re-enters the heap at most once per improving neighbor, the algorithm terminates after `O(rows × cols)` useful relaxations. This mirrors textbook Dijkstra with the edge weight replaced by the bottleneck combination rule.

**Complexity:** `O(mn log(mn))` time, `O(mn)` space, for an `m × n` grid.
