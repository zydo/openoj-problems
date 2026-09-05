# Solutions — Equalize Tree Coins

## Post-Order Excess Flow

Individual coins can wander far, which makes counting moves directly painful.
Counting them edge by edge does not: one move is one coin crossing one edge, so
the answer is the total traffic summed over all edges, and that traffic is
pinned down before any routing is chosen. Cut the tree at an edge; the subtree
below it owns `s` nodes and starts with `c` coins, and since it must finish with
`s` coins, exactly `|c - s|` coins pass through that edge — outward when the
subtree is rich, inward when it is poor.

![root = [1, 2, 0]: the left subtree carries one coin too many and the right one too few, so a single coin crosses each edge for a total of two moves.](figures/solution-coin-flow.svg)

That turns the problem into one bottom-up sweep. Let the recursion hand back the
signed surplus `c - s` of the subtree it just finished; an absent child hands
back 0, and a node computes its own surplus as its coin count plus both
children's surpluses minus the single coin it keeps for itself. Before returning,
it charges `|left| + |right|` to the running answer — the traffic on its two
child edges. No coin is ever explicitly routed, and no edge is visited twice.

Summing absolute surpluses is a genuine lower bound as well as achievable,
because traffic on one edge cannot be substituted by traffic on another; the
edges are independent bottlenecks. The total supply matching the node count also
guarantees the root's surplus comes out as 0, confirming nothing has to leave
the tree. One traversal touches each node once, and the only extra memory is the
call stack, as deep as the tree is tall.

**Complexity:** `O(n)` time, `O(h)` space.
