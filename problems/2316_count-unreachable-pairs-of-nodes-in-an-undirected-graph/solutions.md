# Solutions — Count Unreachable Pairs of Nodes in an Undirected Graph

## Union-Find and Component-Size Complement Counting

Reachability in an undirected graph is an equivalence: two nodes are mutually reachable exactly when they lie in the same connected component. So the unreachable pairs are all pairs minus the pairs within components. Counting directly per node (each node in a component of size `s` has `n - s` unreachable partners) double counts each pair, so the cleaner formulation is `C(n, 2) - Σ C(s_i, 2)` over component sizes `s_i` — every within-component pair is reachable, every cross-component pair is not, and each pair is counted exactly once.

The components come from a union-find over the edge list, using union by size so trees stay shallow, and an iterative `find` with path compression (a first pass locates the root, a second rewires every visited node directly to it) so repeated finds are nearly constant time and no recursion stack is used. Unioning an edge first resolves both endpoints' roots and merges the smaller component into the larger, tracking `size[root]` as the component's node count.

After all edges are merged, every component is represented by a root with `find(v) == v`; summing `size[v] * (size[v] - 1) / 2` over these roots gives the reachable pair count, subtracted from the total `n * (n - 1) / 2`. Edge cases: with no edges every node is its own root and the answer is `C(n, 2)`; a fully connected graph yields 0; counts use Python's unbounded integers (in fixed-width languages this needs 64-bit, since the count can approach `5 * 10^9` for `n = 10^5`).

**Complexity:** `O(E α(n))` time, `O(n)` space.
