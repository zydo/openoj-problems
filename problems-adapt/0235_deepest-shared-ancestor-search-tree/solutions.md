# Solutions — Deepest Shared Ancestor, Search Tree

## Iterative BST Descent

Ordering is what makes this a walk rather than a search. Standing on any node,
one comparison places a target: below the node's value it can only be on the
left, above it only on the right. So when `p` and `q` both compare the same
way, the node you are standing on is a shared ancestor, but the child on that
side is a deeper one — and you may step to it without ever inspecting the
other side.

The step is only blocked in two situations, and both of them identify the
answer. Either the targets compare in opposite directions, in which case they
sit in different children and no single child holds both; or the current node's
own value is one of the targets, in which case nothing deeper can contain it,
since a node is not inside either of its own children's subtrees. Both
situations are recognised by the same `else` branch, which is why the loop
needs no special case for the ancestor-of-the-other shape.

Every node on the path is visited once, comparisons only, so nothing is
remembered between steps and the auxiliary space is constant. On the tree from
Example 1 the walk begins at `50`: the targets `20` and `70` straddle it, so it
returns immediately. For `p = 20`, `q = 35` it takes one step left — both are
under `50` — and then stops on `20` because the node's value is a target. The
tree carries no balance guarantee, so the path length `h` can be as long as the
node count when the tree degenerates into a chain.

**Complexity:** `O(h)` time, `O(1)` space.
