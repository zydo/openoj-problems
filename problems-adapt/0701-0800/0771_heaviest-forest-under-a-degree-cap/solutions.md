# Solutions — Heaviest Forest Under a Degree Cap

## Keep-or-Drop Choices, Settled Bottom-Up

Root the tree at node `0` and view each node's degree cap `k` as a
budget to be split between the edge reaching its parent and the edges
reaching its children. The DP therefore computes, for every node `u`,
two numbers over its subtree: `g[u]`, the best retained weight when the
parent edge is *not* counted against `u`, and `f[u]`, the best when it
is — the second case has one slot fewer, so at most `k - 1` child edges
may stay.

For a child `v` behind an edge of weight `w`, deleting the edge banks
`g[v]`, while keeping it banks `w + f[v]`. Subtracting, the edge is
worth taking exactly when its gain `w + f[v] - g[v]` beats zero, so the
optimum at `u` begins with every child's `g[v]` and then admits the
largest positive gains — `k` of them for `g[u]`, `k - 1` for `f[u]`.
That greedy is safe because the cap couples children only through how
many of them are chosen: contributions are independent, so taking gains
in descending order dominates every alternative. The root has no parent
edge and answers with `g[0]` at full budget.

The traversal avoids recursion on purpose: an explicit stack emits a
preorder list, and the DP is evaluated back to front so each node is
finalized after all of its children — on trees with `10⁵` nodes, call
depth would otherwise be the binding constraint. Sorting each node's
gain list costs `O(d log d)` for its degree `d`, which sums to
`O(n log n)` across the tree.

On the star `[[0,1,2],[0,2,9],[0,3,4],[0,4,7]]` with `k = 2`, the root's
four child edges carry gains `2, 9, 4, 7` (every leaf has empty
subtrees, so `f = g = 0` there); the two admitted edges are the `9` and
the `7`, giving `16`. On the path example nothing ever exceeds the cap,
every gain is positive but every budget also suffices, and the whole
weight survives.

**Complexity:** `O(n log n)` time, `O(n)` space.
