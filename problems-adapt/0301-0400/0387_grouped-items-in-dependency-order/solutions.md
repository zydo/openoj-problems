# Solutions — Grouped Items in Dependency Order

## Two-level topological sort

The requirements split cleanly into two layers. Contiguity means the output
is a sequence of whole groups; the order among those groups must honor every
prerequisite that crosses a group boundary, and the order inside each group
must honor the prerequisites that stay within it. Each layer is a plain
topological sort, and one group's internal order can never disturb another's.

Ungrouped items (`group[i] == -1`) first receive a private group id of their
own, which makes every item a member of exactly one group and lets both
layers treat them uniformly. Two dependency graphs follow: an item graph
holding every prerequisite edge, and a group graph holding only the edges
whose endpoints fall in different groups — inner edges are deferred to the
internal sort. Several item pairs can contribute the same cross-group edge;
that is harmless, since the queue algorithm counts each parallel edge in the
indegree consistently.

Kahn's algorithm — repeatedly emit a node whose incoming edges are all
satisfied — runs first over the groups. If it stops early, a cycle among
groups exists and the empty list comes back at once. Otherwise the groups
are taken in that order and each one's items are sorted by the item graph
restricted to that group; a failure there also yields the empty list, as in
Example 2, where the chain `6 → 2 → 6` circles back inside group 0. Emitting
whole groups guarantees contiguity, and the per-group pass resolves what is
left. With `E` the total prerequisite pairs and `n` the items (the groups at
most double the node count), every pass is linear in `n + E` apart from the
small sorts that keep each queue's order deterministic.

**Complexity:** `O(n log n + E)` time, `O(n + E)` space.
