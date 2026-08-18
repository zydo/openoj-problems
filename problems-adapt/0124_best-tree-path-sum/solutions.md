# Solutions — Best Tree Path Sum

## Post-Order Path-Gain Recursion

Classify paths by where they peak. A path's topmost node is the unique place
it bends, if it bends at all: below that node the path runs down one side, and
above it — nowhere. So the maximum over all paths decomposes into a maximum
over nodes of "best path whose top node is this one", and each node can price
that candidate from two smaller quantities.

Those quantities come from a post-order recursion. Define `gain(node)` as the
best sum of a path that starts at `node` and runs downward into at most one of
its subtrees. Each child's gain is clamped at zero before use — a downward
branch totalling below zero improves nothing, and leaving it out is always
legal because a path may stop anywhere. The node's bend candidate is then
`node.val + left + right`, the best path peaking here, and the value handed to
the parent is `node.val + max(left, right)` — the parent's path, if it climbs
through this node, must continue upward on one side only.

The bend candidates cannot travel up the recursion (a bent path cannot be
extended by a grandparent), so the best of them is folded into a running
maximum held outside the recursion, which the sweep updates at every node.
Visiting every node's bend is what covers paths that never come near the root:
in the second example the peak sits at 25, whose candidate `14 + 25 + 9 = 48`
beats anything involving the `-8` root, whose own candidate is
`-8 + 6 + 39 = 37`.

The running maximum starts at negative infinity rather than zero, and the
reason is the non-empty requirement: a tree of nothing but negative values
clamps both branches of every node to nothing, and the answer must still be a
node — on the lone `-3`, the answer is `-3` itself.

One call per node, and the only storage besides a couple of scalars is the
recursion stack, as deep as the tree is tall.

**Complexity:** `O(n)` time, `O(h)` space.
