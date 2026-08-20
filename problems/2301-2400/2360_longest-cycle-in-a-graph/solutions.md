# Solutions — Longest Cycle in a Graph

## Timestamped Iterative DFS with Three-Color Tracking

With out-degree at most one, the graph is a set of "rho" shapes: every walk eventually dead-ends at `-1` or falls into a cycle, and each node belongs to at most one cycle. Every cycle is therefore discovered by walking from any node on the chain leading into it, so one traversal per unvisited start node suffices, provided visited nodes are never re-walked.

The canonical solution colors nodes as unvisited (0), on the current path (1), or finished (2), and stamps each node with a global `timer` value when it enters the current path. From each unvisited start, follow `edges` while the next node is unvisited, appending the walk to a `path` list. The walk ends two ways: at `-1` or an already-finished node (no new cycle), or at a node still colored 1 — a node on the current path. That node's position in the walk is known from its timestamp: the cycle length is exactly `timer - step[node]`, the number of steps taken since that node was first reached. After each walk, every path node is recolored 2 so later starts never re-traverse it (they can only re-enter finished territory, which is not a new cycle).

Iterating the outer loop over all nodes with an upfront color check makes the algorithm fully iterative — no recursion, safe for chains of `10^5` nodes — and amortizes to linear time since each node is walked once and finalized once. `best` stays `-1` when every walk dead-ends, and self-loops cannot occur (`edges[i] != i`) though a length-1 cycle would still be handled by the same timestamp difference.

**Complexity:** `O(n)` time, `O(n)` space.
