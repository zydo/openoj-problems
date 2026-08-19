# Solutions — Reversals to Reach Every Node

## Rerooting tree DP

Look past the directions and the input is a tree. A start node can reach
everywhere exactly when all tree edges point away from it, so the cost of a
start is simply the number of edges currently aimed the other way — in
Example 1, start `0` is charged for `2 -> 0` and `4 -> 0`, giving
`answer[0] = 2`.

Evaluating that count independently for each of the `n` starts would cost
`O(n²)`. The rerooting trick gets all of them in one traversal: compute the
cost for a single root, then observe that sliding the root across one edge
changes the cost by exactly `+1` or `-1` and touches nothing else — that
edge either starts counting or stops counting, and every other edge keeps
its contribution.

Concretely, each undirected edge is stored twice with a traversal price:
walking it in its recorded direction costs `0`, walking it backwards costs
`1`. A BFS from node `0` fixes parents and a processing order. The first
pass consumes that order in reverse, children before parents, accumulating
`dp[x] = sum(dp[y] + cost(x, y))` over children `y`; `dp[x]` is what start
`x` pays inside its own subtree, and `dp[0]` is the complete answer for the
BFS root.

The second pass walks the order forward and pushes answers down: if the edge
between `x` and its child `y` is recorded `x -> y`, then rooting at `y`
turns it into a reversal (`+1`); if it is recorded `y -> x`, rooting at `y`
makes it free while it had cost `1` for `x` (`-1`). So
`answer[y] = answer[x] ± 1`, and Example 3's output falls straight out of
the depth of each node. Both passes are linear, and iterating over the BFS
order instead of recursing keeps deep chains such as a 10⁵-node path from
overflowing the call stack.

**Complexity:** `O(n)` time, `O(n)` space.
