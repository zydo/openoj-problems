# Solutions — Widest Tree Path

## Post-Order DFS with Height Tracking

Every path in a tree has a highest node — the one where the path turns
from descending one way to descending the other. If the two descents from
that node reach `a` and `b` edges down, the path is `a + b` edges long.
So the problem becomes: over every node, maximize (deepest descent into
its left side) + (deepest descent into its right side).

One quantity serves both needs. Have each recursive call return the
height of the subtree it just finished — counted in nodes, so a leaf
returns 1 — and while unwinding, combine the two child heights into a
candidate path length. Because a subtree `h` nodes tall hangs `h` edges
below its parent, the sum of the two child heights is exactly the edge
length of the path joining their deepest leaves through the current node.
The traversal carries the largest such sum in a counter and returns it at
the end.

Recording the candidate inside the recursion is what makes one pass
enough: the turning node of the overall best path can be any node, high
or low, and every node gets its turn as the recursion unwinds through it.
For `root = [8,6,9,0,7]` the leaves settle first (`0` and `7` return 1,
giving node `6` a candidate of `1 + 1 = 2`); node `9` returns 1; finally
the root combines `height(6) = 2` with `height(9) = 1` for a candidate of
3 — the path `0, 6, 8, 9`.

The return value and the recorded candidate are deliberately different
things — a one-sided height for the parent's arithmetic, versus a
two-sided length for the answer — and confusing them is the classic
mistake here. Null children return 0, which makes a single-node tree
score 0 and a two-node tree 1. Besides the counter, memory is just the
recursion stack, whose depth is the tree's height `h`.

**Complexity:** `O(n)` time, `O(h)` space.
