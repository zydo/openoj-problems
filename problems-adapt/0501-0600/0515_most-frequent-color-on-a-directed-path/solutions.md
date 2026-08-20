# Solutions — Most Frequent Color on a Directed Path

## Topological sort with per-color DP

Let `dp[u][c]` hold the greatest number of color-`c` nodes on any path that
ends at `u`. That state only means something once every predecessor of `u`
has contributed, and a topological order supplies exactly that guarantee:
Kahn's algorithm releases `u` only when its in-degree has fallen to zero —
that is, once every edge into `u` has been relaxed — so whatever counts `u`
pushes downstream are final.

Processing one node is three small steps. First its own color's counter is
bumped, because the node extends every incoming path by one node of that
color. Then the largest entry of its 26-slot row becomes a candidate
answer, since a path may end anywhere — this is also what makes one-node
paths count. Finally the row is merged element-wise into each neighbor's
row, the edge is consumed, and any neighbor whose in-degree reaches zero
joins the queue. In the diamond `tutt` with edges `0→1, 0→2, 1→3, 2→3`,
node 3 receives `t`-counts of 2 from both sides, and its own `t` makes 3.

A cycle shows up at the finish line: nodes on a cycle, and every node
reachable only through it, never reach in-degree zero. When the number of
visited nodes falls short of `n`, the answer is `-1`. An edgeless graph is
handled with no special case — every node enters the queue at once and the
answer is the best single node. The 26-way merge is the dominant cost and
runs once per edge.

**Complexity:** `O(26(n + m))` time, `O(26n + m)` space.
