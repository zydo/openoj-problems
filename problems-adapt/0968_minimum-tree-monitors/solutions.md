# Solutions — Minimum Tree Monitors

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
