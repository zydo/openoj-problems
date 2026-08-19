# Solutions — Largest Sum of Non-Adjacent Tree Edges

## Two-State Post-Order DP on the Tree

This is a maximum-weight independent set over the edges of a tree, and two
DP states per node tame it. Let `dp0[u]` be the best sum collectable inside
`u`'s subtree when the edge joining `u` to its parent is not picked, and
`dp1[u]` the best when it is. The parent edge's weight is charged to the
parent, so state 1 is purely restrictive: with the parent edge taken, `u`
may take no child edge at all, and `dp1[u]` is just the sum of `dp0[c]`
over `u`'s children. The answer sits at the root as `dp0[0]`.

In state 0 the node is free to take exactly one child edge at most. Start
from `base`, the sum of all `dp0[c]` — the plan where no child edge is
taken — and ask what switching one child `c`'s edge on would cost or earn:
the change is `dp1[c] + w - dp0[c]`, since turning `c`'s parent edge on
forces `c` into state 1. Apply only the largest such gain, and only when it
is positive: that clamp is what lets negative weights through without
ceremony — a losing edge is simply never switched on — and it is also what
makes "pick nothing, score 0" available everywhere. On
`edges = [[-1,-1],[0,4],[0,9],[1,3],[1,5]]`: node 1 keeps `dp0 = 5` (its
weight-5 child beats the weight-3 one), the root's base is that 5 plus
node 2's 0, and switching node 2's edge on adds `9`, giving 14.

One implementation worry decides the shape of the code: `n` reaches `10⁵`
and nothing stops the tree from being one long chain, so recursion would
die on the stack. Instead, build children lists, walk a stack-based preorder
from the root, and process that listing in reverse — every child is then
finalized before its parent consumes it. A single-node tree has no edges and
returns 0 immediately.

**Complexity:** `O(n)` time, `O(n)` space.
