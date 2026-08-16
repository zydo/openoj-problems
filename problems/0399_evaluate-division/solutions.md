# Solutions — Evaluate Division

## Weighted graph BFS

Each variable becomes a node and each equation `a / b = v` becomes a directed edge `a -> b` with weight `v`, plus a reverse edge `b -> a` with weight `1 / v` (division inverts when the direction flips). A query `C / D` is then a path-finding problem: multiplying the edge weights along any path from `C` to `D` telescopes to `C / D`, since every intermediate variable cancels between a weight and the inverse weight that follows it.

![The equations a/b = 2.0 and b/c = 3.0 as weighted directed edges with their inverses; the dashed accent path multiplies 2.0 × 3.0 to answer a/c = 6.0.](figures/solution-division-graph.svg)

Each query runs an independent BFS from `C`, carrying the running product from the start. Neighbors are expanded with `product * weight`, a `seen` set prevents revisiting nodes (cycles would only multiply by round-trip products equal to 1), and the search returns early the moment `D` appears as a neighbor. Because the equations are guaranteed consistent, any path between the two nodes yields the same value, so the first path found is correct.

Unanswerable queries are filtered before the search: if either variable is absent from the graph the result is `-1.0` — this also covers `x / x` for an undefined `x`, while a known variable divided by itself returns `1.0` immediately without a traversal. If BFS exhausts the component without reaching `D`, the variables lie in different connected components and the query also returns `-1.0`.

**Complexity:** `O(Q·(V + E))` time (where `Q` is the number of queries, `V` the distinct variables, `E` the equations), `O(V + E)` space.
