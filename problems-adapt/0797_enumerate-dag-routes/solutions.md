# Solutions — Enumerate DAG Routes

## Depth-first descent with an undo step

Routes have to be produced one at a time, and the natural way to produce them is
to build one incrementally: hold a working list of the nodes chosen so far, and
extend it edge by edge. Start the list holding node `0`. At the node on the end
of the list, try each outgoing edge in the order `graph` records it — append the
neighbour, descend, and on the way back out remove it again. That removal is the
whole trick: without it the second edge out of a node would inherit whatever the
first edge left behind, and with it every branch sees precisely the prefix that
led to it.

The recursion stops in two ways. Reaching node `n - 1` means the working list
*is* a route, so take a snapshot of it — a copy, since the list is about to be
mutated again — and return without descending further. Reaching any other node
whose edge list is empty, or all of whose edges have already been explored,
simply falls off the end of the loop and returns, contributing nothing.

Nothing needs to be marked as visited. The graph is acyclic, so no descent can
arrive at a node that is already on the working list, and the routes are
*supposed* to share prefixes — a visited set would wrongly suppress the second
and later routes through a shared node. On `[[1,2],[3],[3,4],[5],[5],[]]` the
descent finds `0,1,3,5` first, unwinds all the way back to node `0`, and then
finds `0,2,3,5` and `0,2,4,5` through the second edge — exactly the order the
edge lists dictate.

The work is driven by the size of the answer rather than by the graph: a dense
acyclic graph on `n` nodes can hold roughly `2^(n-2)` distinct routes, each as
long as `n`, which is why the input is capped at 15 nodes.

**Complexity:** `O(n * 2^n)` time in the worst case; `O(n)` auxiliary space for
the recursion and the working list, not counting the routes returned.
