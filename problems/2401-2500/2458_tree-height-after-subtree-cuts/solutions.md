# Solutions — Tree Height After Subtree Cuts

## Two Sweeps and the Outside Maximum

Ten thousand experiments cannot each afford a traversal, so the whole work
happens once while reading the tree; afterwards every cut is answered by a
lookup. Deleting the subtree at a node `q` leaves behind exactly the nodes
outside it, and the height that survives is the deepest root-distance of any
node outside `q`'s subtree. Write `outside(q)` for that number, with the
convention `-1` when nothing outside remains — then the answer array is
`outside` read off at the queried values.

Two small tables, filled in one bottom-up sweep, make `outside` computable.
`depth[v]` records the edge distance from the root and is filled during a
pre-order walk. `height[v]` is the usual subtree height in edges, and
`submax[v]` is the deepest root-distance of any node inside `v`'s subtree —
the larger of `depth[v] + height[v]` and the children's `submax`. Both follow
from iterating the pre-order sequence backwards (a valid post-order), so a
node is always finalized after its children.

A last sweep runs top-down and hands every node its `outside` value. The root
receives `-1`, since cutting there would erase the tree (no query does).
Descending from `u` into one child, the inherited value already covers
everything beyond `u`; new candidates appear only because the sibling subtree
just became removable scenery — its deepest node sits at `depth[u] + 1 +
height[sibling]`, which the code writes both that way and as
`submax[sibling]`; the two agree. The child's `outside` is the maximum of the
inherited value and these candidates, stored keyed by node value, and each
query is a dictionary read.

Every node is touched a constant number of times across the three sweeps with
constant work per touch. All traversals are stack-based rather than recursive,
which keeps the `10⁵`-node worst case safely away from Python's recursion
ceiling.

**Complexity:** `O(n + m)` time, `O(n)` space.
