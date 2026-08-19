# Solutions — Best Connected Piece Through Each Node

## Rerooting DP on the Tree

Weight the nodes `+1` for marked and `-1` otherwise, so a piece's score is
just its weight sum and the question per node `i` becomes: the heaviest
connected piece that contains `i`. The first sweep computes `down[u]`, the best
such piece restricted to `u`'s subtree — the node's own weight plus each
child's `down` value taken only when it is positive, the usual pruning that
lets an optimal region amputate branches that only subtract.

The second sweep reroots the answer. `up[u]` is the best score of a connected
piece that touches `u` from the parent side alone, `u`'s own subtree
excluded; the root gets a huge negative sentinel so its parent side never
contributes. Processing nodes top-down, each `u` first sums the positive parts
of its children's `down` values into `total_pos`; then each child `c` receives
`weight[u] + (total_pos - its own positive part) + max(0, up[u])` — the parent
itself, the parent's other worthwhile branches, and whatever the rest of the
tree had offered `u`. The answer for `u` is `weight[u] + total_pos + max(0,
up[u])`.

Deducting `max(0, down[c])` while forming `up[c]` is what keeps the two sweeps
from double-counting: the parent-side piece must leave out the very subtree
`c` is about to become the root of. On Example 2 the center node 1 gathers
branches 0, 3, and 4 (weights +1, +1, +1 around its own -1) for a score of 2,
while node 2 pairs its own -1 with a parent-side piece worth 2 for a total of
1. Both sweeps run on an explicit stack, so trees 10^5 deep are safe.

**Complexity:** `O(n)` time, `O(n)` space.
