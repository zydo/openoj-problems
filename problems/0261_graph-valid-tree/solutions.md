# Solutions — Graph Valid Tree

## Edge-Count Check with Union-Find

A tree on `n` nodes must have exactly `n - 1` edges _and_ be connected, and these two requirements interact usefully: with precisely `n - 1` edges, the graph is a tree exactly when it contains no cycle (n - 1 edges, no cycle, simple graph forces connectivity). So the solution first answers immediately on the edge count — `n - 1` edges is necessary, and any other count (too few to connect, too many to stay acyclic) fails without further work.

The remaining question, "does adding these n - 1 edges ever create a cycle?", is what Union-Find answers incrementally. Each node starts as its own component; for every edge `[a, b]` the code finds both endpoints' roots, and if the roots already coincide the edge joins two nodes in one component — a cycle — and the answer is false on the spot. Otherwise the two components are merged by pointing one root at the other.

The `find` helper uses path halving (`parent[x] = parent[parent[x]]` while walking up), so every traversal short-circuits future ones and the amortized cost per operation stays logarithmic — effectively constant at these sizes (n ≤ 2000, e ≤ 5000). If all `n - 1` edges merge distinct components, the graph is connected and acyclic, hence a valid tree. The parent array is the only auxiliary storage.

**Complexity:** `O(n + e·log n)` time, `O(n)` space.
