# Solutions — Rebalance a BST

## In-order flatten, then midpoint rebuild

Two facts pair up neatly here. An in-order walk of a search tree lists its
values in ascending order; and a sorted run of values turns into a balanced
search tree by taking the middle element as the root and repeating on each
half — no split can leave more than half the remaining values on one side, so
subtree depths stay within one of each other everywhere. Rebalancing is thus a
flatten followed by a rebuild.

![The right chain 3 → 6 → 9 → 12 and the tree the midpoint rebuild produces from it.](figures/solution-rebalance.svg)

The flatten is written iteratively, with an explicit stack: descend left as
far as possible while pushing, then pop a node, emit its value, and continue
from its right child. Ten thousand nodes fed in as one straight line —
precisely the shape this task punishes — would overflow recursive traversal,
and the explicit stack sidesteps that.

The rebuild is the recursive `build(lo, hi)`: `mid = (lo + hi) // 2` becomes
the new node, the left child comes from `values[lo..mid-1]` and the right from
`values[mid+1..hi]`, with an empty range yielding `None`. Recursing on halves
keeps its depth logarithmic, so the recursion that would be dangerous in phase
one is safe in phase two. For the chain `[3, null, 6, null, 9, null, 12]`,
the walk collects 3, 6, 9, 12 and `build(0, 3)` crowns `values[1] = 6`,
leaving 3 on the left and 9 (with 12 beneath) on the right.

A one-node tree rebuilds to itself, and the whole construction touches each
value a constant number of times.

**Complexity:** `O(n)` time, `O(n)` space.
