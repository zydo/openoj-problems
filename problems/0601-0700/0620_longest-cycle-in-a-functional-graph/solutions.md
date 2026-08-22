# Solutions — Longest Cycle in a Functional Graph

Both solutions draw their speed from the shape that out-degree at most one
forces on every component: a tail draining into a single loop. The peel works
from the outside in — nodes nobody points at can start no cycle, and shaving
them off in waves strands their tails too, until only the loops remain to be
measured. The timestamped walk works from the inside out — it chases
pointers and stamps each node with the moment of first contact, so the
instant a walk bites its own tail, the loop's length is already on record.

## Indegree-Zero Topological Peel

A node that nobody points at cannot lie on a cycle; more is true, cutting it
away can expose another such node, because its out-edge may have been the
last thing keeping its successor fed. So count in-degrees in one pass — an
`edges[i] == -1` points nowhere and counts for nothing — seed a queue with
every node of in-degree zero, and peel: each node leaving the queue drops its
successor's in-degree, and a successor falling to zero joins the queue. When
the queue drains, exactly the cycle nodes survive. None of them can ever fall
to zero, since the predecessor on its ring is never peeled before it; and any
node left standing keeps in-edges only from other survivors, which in a graph
of one-out edges pins the whole remainder onto disjoint rings.

What remains is a set of rings that nothing feeds, so measure them directly:
from each survivor, step around the ring counting nodes, zeroing each node's
in-degree as it is counted — each ring is therefore entered once, and the
walk halts exactly where it started. On `edges = [3,2,1,4,5,3]`, node 0 is
the lone seed; peeling it drops node 3's in-degree from 2 to 1, the queue
drains, and two rings remain — `1 -> 2 -> 1` and `3 -> 4 -> 5 -> 3` — so the
walks report 2 and 3.

The `-1` case is handled where it arises: skipped while counting (a dead end
feeds nobody) and skipped while peeling (it has no successor to notify).
Everything is a flat scan over one array with an explicit queue, so there is
no recursion anywhere — a chain of `10⁵` tail nodes costs nothing on the
stack. `best` keeps `-1` when the peel consumes the whole graph, which is
precisely the acyclic case.

**Complexity:** `O(n)` time, `O(n)` space.

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
