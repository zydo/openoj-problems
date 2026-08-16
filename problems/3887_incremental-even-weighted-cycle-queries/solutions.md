# Solutions — Incremental Even-Weighted Cycle Queries

## DSU with Parity

The condition "every cycle has even total weight" can be restated as a parity-labeling problem. Imagine assigning a bit to each node; an edge of weight `w` demands that its endpoints' bits differ by exactly `w` (mod 2), so a 0-edge joins same-labeled nodes and a 1-edge joins opposite-labeled ones. All cycles are even if and only if such a labeling is consistent, which is equivalent to saying the XOR of weights along any two paths between the same pair of nodes is equal.

The solution maintains a disjoint-set union where `par[x]` stores the XOR of weights from `x` to its DSU parent. `find(x)` returns both the root and the accumulated XOR from `x` to that root, compressing paths on the way back up by XORing the accumulated values into `par`. The invariant is that for any two nodes of one component, this accumulated XOR equals the parity of every path between them, so path parity is always well defined.

Each incoming edge `[u, v, w]` is then decided in near-constant time. If `u` and `v` have the same root, the edge would close exactly one new cycle, whose total weight is `xu ^ xv ^ w`; the edge is added precisely when this is zero, i.e. when the existing path parity `xu ^ xv` already equals `w`, and rejected otherwise. If the roots differ, the edge connects two different components and creates no cycle at all, so it is always added: the two trees are linked by rank, and the new parent link gets parity `xu ^ xv ^ w` to preserve the invariant.

Because accepted edges within a component never change any path parity (they only add redundant even cycles), the check of the single new cycle is sufficient — every older cycle was already even by induction. Union by rank together with path compression keeps the amortized cost per edge effectively constant, with `alpha` the inverse Ackermann function.

**Complexity:** `O(E * alpha(N))` time, `O(N)` space.
