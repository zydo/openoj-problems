# Solutions — Number of Connected Components in an Undirected Graph

## Union-Find (Path Compression)

Every node begins as its own component — `count` starts at `n` with each node its own parent. Processing the edges one by one, each edge that links two nodes whose roots differ merges two distinct components into one and decrements the count; an edge whose endpoints already share a root is redundant for connectivity and changes nothing. When all edges are consumed, the count is the answer, with no traversal of the graph needed.

The parent array implements a disjoint set union. `find` walks parent pointers up to the root while path-halving — `parent[x] = parent[parent[x]]` — which splices every other node on the path directly under its grandparent, flattening the tree as it goes so repeated finds get progressively cheaper. `parent[ra] = rb` glues one root under the other after the roots have been checked distinct. The net effect is that each edge costs near-constant amortized time, comfortably handling 2000 nodes and 5000 edges.

This counting style is why union-find beats DFS/BFS here in both brevity and cache behavior: there is no adjacency list to build, no recursion stack, and self-loops or repeated edges (excluded by the constraints anyway) would be absorbed harmlessly since their endpoints already share a root.

Edge cases: a single node with no edges returns 1 (loop never runs), isolated nodes stay as their own components, and an empty edge list returns `n` directly.

**Complexity:** `O(E · α(n))` time, `O(n)` space.
