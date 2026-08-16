# Solutions — Connecting Cities With Minimum Cost

## Kruskal's Algorithm with Union-Find

Connecting all `n` cities at minimum total cost is the definition of a minimum spanning tree on the graph whose vertices are cities and whose weighted edges are the connections. Kruskal's algorithm builds it greedily: sort every edge by cost and accept an edge only when its endpoints currently lie in different connected components. The exchange argument guarantees optimality — among all edges crossing any cut, refusing a more expensive one in favor of a cheaper accepted one never increases the total.

Components are tracked by a union-find structure over the `n + 1` slots (index 0 unused, since cities are 1-based). `find` walks up the parent array and applies path halving on the way (`parent[x] = parent[parent[x]]`), which keeps subsequent finds near-constant without needing union by rank. An edge is accepted exactly when `find(x) != find(y)`; then the two roots are linked, its cost is added to the running total, and the component count drops by one.

Starting from `n` components, the algorithm can return early the moment the count reaches 1 — the tree is complete and no later (more expensive) edge can help. If the edges run out first, the graph was disconnected and the answer is `-1`. Duplicate or expensive edges are skipped harmlessly by the same-roots check, and the sort ensures the cheapest spanning choices are always considered first.

Sorting the up-to-10^4 edges dominates the running time; the union-find operations after sorting are effectively linear.

**Complexity:** `O(E log E)` time, `O(V)` space.
