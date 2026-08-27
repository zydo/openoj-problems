# Solutions — Count the Number of Complete Components

## Union-find with per-component edge counting

The statement guarantees no repeated edges and `ai != bi`, so a connected
component with `m` vertices is complete exactly when it contains all
`m * (m - 1) / 2` possible edges — holding that many distinct edges forces
every pair to be adjacent. Counting is all that is needed: identify each
component, know its vertex count and its edge count, and compare.

An iterative union-find merges components in one pass over `edges`:
path-halving `find` plus union by size keeps trees flat without a single
recursive call. A second pass then deposits one credit per edge at
`find(a)`, which after all unions is the component's final root — every edge
lands on exactly the root that owns both endpoints, and `size` is read only
at roots where it still names the whole component. Finally each root `v`
(with `find(v) == v`) is judged complete iff
`edge_count[v] == size[v] * (size[v] - 1) / 2`; a singleton root carries
zero edges and satisfies the law vacuously, which is why isolated vertices
count as complete. The answer is the number of roots that pass.

**Complexity:** `O((n + m) α(n))` time, `O(n)` space.
