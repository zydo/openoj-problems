# Solutions — Tree Centroids

## Iterative Leaf Peeling (Centroid Trimming)

The node you want is the middle of the tree's longest path, so the direct move
— trying every node as a root and measuring — is also the wasteful one: an
all-pairs traversal costs quadratic time. Instead, work from the ends inward,
the way a topological sort drains its zero-indegree frontier: strip every
current leaf at once, and what is left is a smaller tree whose own middle is
the same node. Each stripped layer shortens the longest downward path of the
surviving core by one from both sides, so the process closes in on the centre.

Concretely: build the adjacency lists and a degree count per node, seed a
queue with everything of degree 1, and loop while more than two nodes survive.
Each round drains exactly one layer — the loop runs `len(leaves)` times, so
leaves that become leaves *during* the round wait for the next one — and every
drained leaf lowers each neighbour's degree by one, feeding the queue when a
neighbour thereby reaches degree 1. A drained leaf's own degree is never
zeroed, which is harmless because it is never looked at again.

On Example 2 (`2-0`, `2-1`, `2-3`, `3-4`, `3-5`) the first round peels the four
degree-1 nodes `0`, `1`, `4`, `5`; their neighbours 2 and 3 each drop to degree
1, exactly two nodes remain, and the loop stops with the pair `[2, 3]`.

Why never more than two survivors: the longest path has some middle, and an
even number of edges gives that path one middle node while an odd number gives
it two adjacent ones, both at the same minimum height. The peel stops exactly
when the core has shrunk to that middle. The `n <= 2` shortcut returns all
nodes at once — a one- or two-node tree is its own middle, and the general loop
would mishandle two nodes that are each other's only leaf.

The survivors are sorted for output. Every node and edge is touched a constant
number of times across all rounds.

**Complexity:** `O(n)` time, `O(n)` space.
