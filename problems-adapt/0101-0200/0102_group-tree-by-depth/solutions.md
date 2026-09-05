# Solutions — Group Tree By Depth

Both walks visit every node once and drop each value into a list owned by its
depth; both keep left-to-right order inside a depth. What differs is the
frontier. The breadth-first walk holds a whole depth in a queue and drains it
before meeting the next, so the output is built depth by depth. The
depth-first walk carries only a depth counter down one root-to-leaf path at a
time, so the output grows sideways — each depth's list is opened the first
time any walk reaches it and receives arrivals ever after.

## Bfs

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

## Recursive Dfs

The depth-first walk needs no frontier at all — just a depth counter that
starts at 0 for the root and gains one on every descent. Arriving at a node,
it records the value into `grouped[depth]`, then recurses into the left
child before the right. Pre-order recording is what keeps left-to-right
order inside each depth: within any subtree, a depth's left-side nodes are
all visited before that depth's right-side nodes, and that recurse down
through the whole tree.

The one wrinkle is that depths are met out of order — the walk may be
appending to `grouped[2]` long before any path first reaches depth 5. The
list for a depth is therefore created exactly when the walk first arrives
at it: `grouped` grows by one list whenever `depth == len(grouped)`, which
can only happen along the leftmost descent (every other path arrives at a
depth some earlier path already opened). The empty tree never starts the
walk and keeps the output empty; a lone root yields `[[root.val]]`.

Each node is visited once with constant work, so time is linear. The
storage is the output plus the call stack, and the stack is exactly one
frame per level along the current path — `O(h)`, the tree's height, at
`O(n)` for a chain and `O(log n)` for a balanced tree. That is the trade
against the queue: one path in memory instead of a whole frontier.

**Complexity:** `O(n)` time, `O(h)` space beyond the output.
