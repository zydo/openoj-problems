# Solutions — Subtree Sign-Flip Sum

## Tree DP carrying flip parity and distance to the nearest flip

A flip at node `u` negates every value below and including `u`, so a node's
final sign is decided by the parity of the flips at `u` and its ancestors —
which particular ancestors flipped is irrelevant. The spacing rule constrains
only flips along one chain, so a subtree computation needs exactly two facts
from above: that parity, and the edge distance up to the nearest flipped
ancestor. Distances of `k` or more all behave alike (another flip is already
legal there), so the distance can be capped at `k`. That gives the state
`dp[u][flip][d]`, the best total of `u`'s subtree given the parity `flip`
handed down and the capped distance `d`.

Nodes are processed in reverse BFS order, so nothing recurses even at
`n = 5 × 10⁴`. Each node first pools its children's tables per `(flip, d)`
pair. Then, per `(flip, d)`, the plain option takes the sign `±1` implied by
`flip` and reads the children's row at distance `d + 1` (capped at `k`);
whenever `d` has reached `k`, a second option flips the node itself, which
swaps the parity and restarts the children's distance at 1. The better of the
two options is kept — values can be negative, so flipping is never assumed to
help. The answer is `dp[0][0][k]`: nothing above the root constrains it.

Worked example: `nums = [2,-9,5,-3,6,-7,1]` on the two-level tree of Example 1
with `k = 2`. Leaf 5 holds `-7`; its table says flipping it alone gains 14.
Node 1's subtree totals `-6` unflipped; flipped, it becomes `6` because `-9`
and `-3` rise while `6` falls to `-6` — a net gain of 12 that the plain option
cannot match. Nodes 1 and 5 sit in different branches, so both flips are legal
together, and the tree totals `2 + 6 + 5 + 7 + 1 = 21`.

The cap keeps each table at `2 × (k + 1)` entries, so the whole computation is
`O(n · k)` even when `k` overshoots the tree height; `k = 1` degenerates into
"every node may flip itself".

**Complexity:** `O(n · k)` time, `O(n · k)` space.
