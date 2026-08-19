# Solutions — Longest Cycle in a Functional Graph

## Timestamped Walks with Three-Color Tracking

Out-degree at most one gives the graph its shape: every component is a
Greek-letter rho — a tail of nodes draining into one loop. A node can lie on
at most one cycle, and every cycle is reached by walking forward from any
node whose tail feeds it. So one walk per not-yet-visited node, never
re-walking finished ground, discovers every loop exactly once.

Color the nodes as unseen, on the current walk, or done, and stamp each node
with a global step counter as it joins the walk. From an unseen start,
follow `edges` while the next node is unseen, collecting the walk in a list.
The walk can only end three ways: at `-1`, at a node marked done (someone
else's territory — no new cycle here), or at a node still marked as being on
the current walk — and the third case is a loop. Its length needs no second
traversal: the stamped step numbers say how much time has passed since that
node was first reached, and `timer - step[node]` is exactly the number of
edges around the loop. On `edges = [3,2,1,4,5,3]`, the walk from node 0
stamps 0, 3, 4, 5 and then meets 3 again, stamped three steps earlier: a
cycle of length 3.

After each walk, every node on it is marked done. Later starts that wander
into done territory stop immediately, which is what keeps the whole thing
linear. The outer loop iterates over all nodes with an upfront color check,
so there is no recursion anywhere — a chain of `10⁵` nodes costs nothing on
the stack. `best` keeps `-1` when every walk dead-ends, and although the
constraint `edges[i] != i` rules out self-loops, a length-1 cycle would fall
out of the same timestamp subtraction.

**Complexity:** `O(n)` time, `O(n)` space.
