# Solutions — Best Tree Path Sum

Both solutions price every node with the same two quantities — the best path
that bends there, and the best path that descends from it into one side —
and fold the maximum bend over the whole tree. Both visit each node after
its children. The difference is who holds the in-progress work: the
recursive version lets the call stack carry a node's pending combine, one
frame per level, while the explicit-stack version carries those pending
combines in a frame stack of its own and passes finished gains upward
through a second stack of numbers.

## Path Gain Recursion

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

## Explicit Stack

The same post-order, driven by hand. Each node is visited in three phases —
before its children, after the left one, after both — so a frame holding
`(node, phase)` is pushed for each visit, and the loop pops, advances the
phase, and re-pushes: phase 0 reschedules the node as phase 1 and puts the
left child on top; phase 1 reschedules it as phase 2 and puts the right child
on top. Because anything pushed sits above the rescheduled frame, each
subtree runs to completion before its parent's next phase surfaces — the
stack of frames reproduces exactly the ordering the call stack gave the
recursion.

The child gains travel on a second stack of numbers. A subtree that finishes
pushes its root's gain; the parent's combine phase then pops what its
children left. The left child ran first and the right child's subtree piled
its own gains on top, so at a combine the top of the gain stack is the right
child's gain with the left child's just beneath — and a missing child simply
never pushed, so there is nothing to pop for it. The combine itself is the
familiar arithmetic: clamp both gains at zero, offer `val + left + right` to
the running best, and push `val + max(left, right)` back for the parent.

Every node enters the frame stack three times and the gain stack once, so the
sweep is still linear. The two stacks are what the recursion kept in
registers and frames: the frame stack is as deep as the tree (its high-water
mark again the height), and the gain stack holds at most one gain per
awaiting parent — also bounded by the height. Nothing is memoized beyond
that; a chain of 30,000 nodes that would overflow a default call stack in
some settings just makes the frame stack long.

**Complexity:** `O(n)` time, `O(h)` space.
