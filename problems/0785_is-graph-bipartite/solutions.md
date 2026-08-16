# Solutions — Is Graph Bipartite?

## BFS two-coloring per component

A graph is bipartite exactly when it admits a proper 2-coloring: assign each node one of two colors so every edge joins opposite colors. Coloring greedily along a traversal works because the parity of the distance from the traversal root forces each node's color: color the root `1`, every neighbor `-1`, their neighbors `1` again, and so on via `color[v] = -color[u]`. The only way this fails is an edge whose endpoints receive the same color — which happens precisely when the graph contains an odd cycle, the sole obstruction to bipartiteness.

The graph may be disconnected, so iterate over all start nodes and launch a fresh BFS from each still-uncolored one. The BFS processes the current level as a list, collecting the next level in `next_queue`; for each edge `u-v`, an uncolored `v` gets colored and enqueued, while a `v` already sharing `u`'s color immediately returns false. Edges to an already-oppositely-colored neighbor are consistent and skipped.

If every component colors without conflict, the two color classes are exactly the required independent-set partition, so the graph is bipartite. Isolated nodes (empty adjacency lists) color trivially and never cause conflicts.

**Complexity:** `O(V + E)` time (each node and edge touched a constant number of times), `O(V)` space for the color array and queues.
