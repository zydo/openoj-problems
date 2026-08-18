# Solutions — Group Tree By Depth

## Breadth-First Search

A queue visited in arrival order hands over whole depths at a time. The
invariant: whenever a round starts, the queue holds the nodes of one depth
and nothing besides. So the code drains exactly `len(queue)` entries into
one output list, and while doing so enqueues each drained node's non-null
children — which, by the invariant, are precisely the following depth.

Seeding the queue with the root starts round one. Each round pops nodes one
at a time, records each value, and queues the left child before the right,
which is what fixes left-to-right order inside a depth. Null children are
never enqueued at all, so no marker entries are needed to tell depths apart;
a depth's list is finished exactly when the round's pop budget runs out.

![The queue holds [8], then [4, 11], then [2, 30] — one full depth per round — for the tree 8 / 4 11 / 2 30.](figures/solution-bfs-queue.svg)

The empty tree returns `[]` before the queue is even created, and a lone
root yields the single-depth `[[root.val]]`.

**Complexity:** `O(n)` time, `O(n)` space — each node is queued and popped
exactly once, and the queue's high-water mark is one full depth, which on a
complete tree is roughly half of all nodes.
