# Solutions — Binary Tree Level Order Traversal

## Breadth-First Search

The queue in a breadth-first traversal naturally holds whole levels at a
time. The invariant is that whenever the outer loop begins a new round, the
queue contains exactly the nodes of one level and nothing else. So the code
drains exactly `len(queue)` nodes, collects their values into one list, and
while doing so enqueues each node's non-null children — which, by the same
invariant, become precisely the next level.

The walk starts by seeding the queue with the root. Each round pops the
current level's nodes one by one, appends their values, and pushes left
then right children. Skipping `None` children on enqueue means no sentinel
markers are needed; the level's list is complete exactly when the round's
pop count is exhausted.

An empty tree is handled up front by returning `[]` before the queue is
created; a single-node tree produces the single-level `[[root.val]]`.

**Complexity:** `O(n)` time, `O(n)` space — every node is enqueued and
dequeued exactly once, and the queue peaks at one full level, which for a
complete tree holds about half of all nodes.
