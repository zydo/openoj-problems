# Solutions — Least-Weight Subtree Joining Three Nodes

## Binary Lifting LCA with Weighted Distances

Take three nodes `a`, `b`, `c`. The cheapest connected edge set that puts all
three in touch is the union of the three paths joining each pair, and that
union obeys a neat counting rule: each of its edges lies on exactly two of the
three paths (an edge in the shared middle core sits on all pairwise routes,
and the symmetry of the sum counts it twice). So the union's weight is exactly
`(d(a, b) + d(b, c) + d(c, a)) / 2`, and the entire task collapses to
evaluating pairwise tree distances fast.

Those distances come from one rooted traversal: root at node `0` and record
each node's depth and weighted root distance `f(x)`; then
`d(x, y) = f(x) + f(y) - 2 * f(w)` with `w` the lowest common ancestor. To
make `w` cheap, the code builds a binary-lifting table `up[k][v]` — the
`2^k`-th ancestor of `v` — by repeated doubling of the parent array. A lookup
first raises the deeper node by the binary expansion of the depth difference,
then walks both nodes up in lockstep while their lifted ancestors disagree.

The traversal is iterative, so a `10⁵`-node bamboo cannot blow the call stack,
and the root's parent entry points at the root itself so no lift falls off the
table. The three distances always sum to an even number — integer halving is
exact — and with up to `10⁵` queries the one-off `O(n log n)` build is
amortized without strain. On Example 1's tree, query `[0, 1, 5]` reads
distances `10`, `5`, and `15` for a union of `(10 + 5 + 15) / 2 = 15`, the
chain `0 - 3 - 1 - 5` with weights `4 + 6 + 5`.

**Complexity:** `O((n + q) log n)` time, `O(n log n)` space.
