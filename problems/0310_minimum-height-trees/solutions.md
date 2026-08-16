# Solutions — Minimum Height Trees

## Iterative Leaf Peeling (Centroid Trimming)

The root of a minimum height tree is a centroid of the tree — a node in the "middle" of the longest path. Rather than trying every root (an all-pairs BFS costing quadratic time), the solution peels the tree from the outside in: it repeatedly deletes all current leaves at once, the way topological sort removes zero-indegree nodes. Each peeling layer strictly shortens every longest root-to-leaf distance from the remaining core, so the process converges on the center.

The code builds an adjacency list and a degree array, seeds a queue with all degree-1 nodes, and loops while more than two nodes remain. Each round pops exactly the current layer: every leaf leaves the queue, `remaining` drops by one per leaf, and each leaf decrements its neighbors' degrees, enqueuing any neighbor that thereby becomes a leaf. Degrees are never reset to zero for the popped leaf itself, which is harmless — a popped node is never examined again.

Why one or two nodes, never more: the tree's diameter is realized along some path, and rooting at the path's middle node minimizes height; when the diameter has even edge count there is a unique middle node, and when odd there are two adjacent middles, both achieving the same minimum. The peeling stops precisely when the remaining core is that middle. The `n <= 2` shortcut returns all nodes immediately, since a one- or two-node tree is its own center (and the general loop would mishandle a two-node tree where both nodes are each other's leaves).

The final one or two survivors are sorted and returned as the MHT roots. Every node and edge is touched a constant number of times across all rounds, so a single linear pass over the graph suffices.

**Complexity:** `O(n)` time, `O(n)` space.
