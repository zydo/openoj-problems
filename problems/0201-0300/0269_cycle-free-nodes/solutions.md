# Solutions — Cycle-Free Nodes

Both sweeps settle the same induction: a node is cycle-free exactly when
every node it points at is. The DFS asks the question in the graph's own
direction, walking out from each node and carrying the verdict home on an
explicit stack, memoized so no node is judged twice. The peel flips the
question around instead, running the induction backwards over an
edge-reversed graph as a plain count, where every safe node falls out of
one queue-driven pass and cycles need no special casing.

## Memoized DFS with safe/unsafe states

The definition reads as a recursion: a node is cycle-free when every node
it points at is cycle-free, and a node with nothing to point at is
cycle-free for free. So walk. From each unjudged node, follow out-edges
depth-first and let the verdict percolate back up the path, cached in a
state array so that no node is ever judged twice.

Four states carry the bookkeeping. A node is unvisited before its walk
starts, visiting while it sits somewhere on the current path, and safe or
unsafe once judged. A frame closes as safe when every out-neighbor came
back safe, and as unsafe the moment any of them did — one bad successor
is enough to doom a node, so a single flag per frame carries the news
upward.

Dispatch on the out-neighbor's state decides each edge. Finished
neighbors are already memoized: a safe one clears the bar, an unsafe one
raises the frame's flag. A visiting neighbor is a back edge — the walk
has come around onto its own path, so a cycle runs through it, and the
flag goes up. As the frames unwind, every node stacked between the
revisited one and the tip pops unsafe, and each pop hands its flag to the
node below: first the cycle itself, then everything that merely feeds
into it.

The stack is explicit — an array of node numbers, with the child cursor
and the danger flag indexed per node, since a node occupies at most one
frame — because a chain of 10^4 nodes would overflow real recursion in
most languages here. Each node is pushed once and each edge examined
once, so the auxiliary storage is the three state arrays plus a stack of
at most `V` nodes, and the closing scan over the state array returns
safe indices in ascending order with no sorting step.

On `graph = [[1],[2],[0,3],[4],[],[3]]` the walk from node 0 goes 0, 1,
2, and 2's first out-neighbor 0 is visiting, so its flag rises. The
detour through 3 and 4 pops both safe; then 2, 1 and 0 unwind unsafe in
turn, each handing danger to the node below. Nodes 1 through 4 meet their
turns already judged, and node 5 walks to 3, finds it safe, and finishes
safe. The ascending safe scan reports `[3, 4, 5]`.

**Complexity:** `O(V + E)` time, `O(V)` space.

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
