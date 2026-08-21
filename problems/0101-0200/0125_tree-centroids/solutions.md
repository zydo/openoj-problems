# Solutions — Tree Centroids

Two ways of standing at the tree's middle. The height of a root is decided
by the longest downward walk from it, and that walk is half of some
diameter — so the minimizing roots are exactly the middles of the tree's
longest path. Both solutions use that fact; they differ in how they reach
the middle. One shrinks the whole tree around it, layer by layer from the
leaves inward, never naming the longest path at all. The other finds the
longest path outright — two breadth-first sweeps suffice — and reads its
middle off by position.

## Iterative Leaf Peeling

The direct move — trying every node as a root and measuring — is also the
wasteful one: an all-pairs traversal costs quadratic time. Instead, work
from the ends inward, the way a topological sort drains its zero-indegree
frontier: strip every current leaf at once, and what is left is a smaller
tree whose own middle is the same node. Each stripped layer shortens the
longest downward path of the surviving core by one from both sides, so the
process closes in on the centre.

Concretely: build the adjacency lists and a degree count per node, seed a
queue with everything of degree 1, and loop while more than two nodes
survive. Each round drains exactly one layer — the loop runs `len(leaves)`
times, so leaves that become leaves *during* the round wait for the next
one — and every drained leaf lowers each neighbour's degree by one, feeding
the queue when a neighbour thereby reaches degree 1. A drained leaf's own
degree is never zeroed, which is harmless because it is never looked at
again.

On Example 2 (`2-0`, `2-1`, `2-3`, `3-4`, `3-5`) the first round peels the
four degree-1 nodes `0`, `1`, `4`, `5`; their neighbours 2 and 3 each drop
to degree 1, exactly two nodes remain, and the loop stops with the pair
`[2, 3]`. Why never more than two survivors: the longest path has some
middle, and an even number of edges gives that path one middle node while
an odd number gives it two adjacent ones. The `n <= 2` shortcut returns all
nodes at once — a one- or two-node tree is its own middle. Every node and
edge is touched a constant number of times across all rounds.

**Complexity:** `O(n)` time, `O(n)` space.

## Double BFS

Name the diameter, then split it. In a tree, the node farthest from any
arbitrary start is always one *end* of a longest path — every step away
from the start can only be extended, never shorted, along the unique
routes — so a first BFS from node `0` lands on one end `u`, and a second
BFS from `u`, which records each discovered node's parent, lands on the
other end `v` at distance `d`: the diameter. Climbing `v` back to `u`
through the discovery parents reconstructs that path in reverse, `d + 1`
nodes long.

The minimal-height roots are the path's middle, by position: an even `d`
puts a single node `d / 2` steps from both ends (Example 1's path
`0-1-2-3-4-5-6`, `d = 6`, middle `3`), an odd `d` leaves two adjacent
nodes straddling it, both at the same minimal height (Example 3's single
edge gives `[0, 1]`). No shortcut is needed for tiny trees: a one-node tree
has `d = 0` and the walk's lone node is its own middle. Both BFS sweeps
read each edge twice and the climb is one pass down the path, so the whole
answer costs two traversals plus the adjacency storage.

**Complexity:** `O(n)` time, `O(n)` space.
