# Solutions — Cycle-Free Nodes

## Reverse-graph topological peel

The label is inductive. A node with no outgoing edges earns it for free, and
any other node earns it precisely when every node it points at has already
earned it. Read that as a counting rule and Kahn's algorithm falls out — run
against the edge-reversed graph, because the rule propagates from a node
backwards to the ones that point at it.

Start by recording, for each node, how many of its out-edges are still
unaccounted for; initially that is just its out-degree. Build the reversed
adjacency list in the same pass over the edges. Seed a queue with every node
whose tally is already zero, then peel: pop a node, mark it, and walk its
predecessors in the reversed list, dropping each predecessor's tally by one and
enqueueing it the moment the tally hits zero. A node reaching zero means every
one of its out-edges pointed at a node already marked, which is exactly the
inductive rule.

Whatever survives the peel is the unsafe remainder: a node stuck on a cycle can
never see all of its out-edges accounted for, because the cycle feeds back into
itself, and a node downstream of one inherits the same fate. Self-loops need no
special handling at all. The loop edge counts once in the node's own tally, and
the only thing that could decrement it is peeling that very node, which the
tally itself prevents — so a self-looped node never leaves the graph.

On `graph = [[1],[2],[0,3],[4],[],[3]]` the tallies start at `[1,1,2,1,0,1]`.
Only node 4 seeds the queue. Popping it drops node 3's tally to zero, so 3 goes
in; popping 3 drops node 2 to one and node 5 to zero, so 5 goes in; popping 5
finds no predecessors and the queue empties. Nodes 0, 1 and 2 never move,
matching the ring they sit on.

Collecting the marked nodes by scanning indices upward produces the ascending
order the answer calls for, with no sorting step. Every edge is touched twice —
once while transposing, once while peeling.

**Complexity:** `O(V + E)` time and `O(V + E)` space, the latter for the
reversed adjacency list, the tally array and the queue.
