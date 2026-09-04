# Solutions — Plausible Roots of a Tree

## Rerooting with a Guess Set

For a fixed root, a guess `[u, v]` comes true exactly when `u` is `v`'s
parent in the rooted tree, so one traversal per root evaluates that root —
but `n` roots times a traversal each is quadratic, hopeless at `n = 10⁵`.
The rerooting insight collapses it: sliding the root across an edge from
`p` to its neighbour `u` reverses only that edge. Every other edge keeps its
parent-child direction, so the true-guess count moves by at most one —
`(p, u)` stops counting, `(u, p)` starts.

Concretely, the guesses live in a hash set of tuples for constant-time
direction checks. Root the tree at node 0 with an iterative DFS that records
each node's parent and an order in which parents precede children. The count
for root 0 is one sweep: for every node `v != 0`, add one when
`(parent[v], v)` was guessed. Then process nodes in that DFS order,
skipping the root: the count for `u` is its parent's count, minus one if
`(p, u)` was guessed, plus one if `(u, p)` was; every node whose count
reaches `k` adds to the answer.

The parent-before-child ordering is what makes the single linear pass
legitimate — by the time a node's count is computed, its parent's count is
already final. Doing this iteratively also sidesteps recursion limits on
deep trees. Constraints rule out duplicate guesses and guarantee every
guess names a real edge, so two set lookups are the whole per-node cost.
At `k = 0` every root qualifies, which the `>= k` comparison handles by
counting all `n` nodes.

Worked on Example 1, `edges = [[0,2],[1,2],[2,3]]`,
`guesses = [[2,0],[2,1],[3,2]]`, `k = 2`: rooted at 0 the count is 1
(`(2,1)` holds); sliding toward 3 the counts run `1, 1, 2, 3`, so roots 2
and 3 qualify and the answer is 2.

**Complexity:** `O(n + g)` time (`g` guesses), `O(n + g)` space.
