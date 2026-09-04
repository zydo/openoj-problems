# Solutions — Minimum Tree Monitors

Both approaches walk the tree in postorder and distill each subtree into one
of three facts about its root — it holds a monitor, it is covered without
one, or it waits uncovered for its parent. The dynamic program is the general
machinery: it prices every state as the cheapest monitor count achievable for
that subtree and combines child prices by recurrence, so optimality holds by
construction rather than by argument. The greedy sharpens the same walk into
a single state per node and one forced move — place a monitor exactly when a
child reports being uncovered — with each placement provably unavoidable.

## Three-State Postorder DP

Each subtree root is summarized by three numbers: the fewest monitors that
cover the whole subtree while the root itself holds one, the fewest while it
is covered without holding one, and the fewest that leave everything covered
except the root, which waits for its parent. That third state is the device
that makes the recurrence work — deferring one node's coverage upward is
exactly the option a global optimum may want, so it gets a table entry
rather than a judgment call.

The combinations follow from what a monitor observes. One placed at the node
sees both children, so each child contributes the cheapest of its three
states. Covering the node without its own monitor requires a child to hold
one — take the cheaper side — while the other child must already be covered
from below, since nothing here can help it. Staying uncovered forbids
monitors at the node and at both children, because a child's monitor would
cover the node, so both children must manage from below. A missing child
folds in as free-but-never-the-monitor-holder, and leaves fall out of the
recurrence as `(1, impossible, 0)` with no special case.

No counter and no placement decision exist anywhere — three numbers simply
flow up the postorder, each node's triple being exactly the entry a
tabulated program would memoize. They ride the recursion itself, so the only
storage beyond the input is the call stack, which grows with the tree's
height `h`. The root has no parent to wait for, so the answer is the smaller
of its first two states.

**Complexity:** `O(n)` time, `O(h)` space.

## Postorder Greedy with Three States

Classify each subtree root after visiting its children. The three states are
unobserved, holding a monitor, and observed without holding one. A missing
child reports the last state, ensuring that leaves do not place wasteful
monitors on themselves.

If either child is unobserved, place a monitor at the current node. This is
forced: only the child, the current node, or the child's children could cover
that child, and the completed child subtree contains no suitable monitor. If
a child already holds a monitor, the current node is observed. With two
observed children and no child monitor, the current node remains unobserved so
that its parent can cover it efficiently.

After the postorder traversal, add one monitor if the root is still
unobserved. Each decision is local and each node is visited once.

**Complexity:** `O(n)` time and `O(h)` recursion space for tree height `h`.
