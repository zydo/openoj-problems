# Solutions — Binary Tree Maximum Path Sum

## Post-Order Path-Gain Recursion

Every path in a tree has a unique highest node where it bends: from that node the path extends downward into the left subtree, the right subtree, both, or neither. The recursion exploits this by computing, for each node, the gain of the best path that starts at the node and descends into at most one child, while folding each node's bend candidate into a global `best` tracked outside the recursion.

Concretely, `gain` clamps each child's returned gain at 0 — a negative branch is better left unvisited — then updates `best` with `node.val + left + right`, the best path bending through this node, and returns `node.val + max(left, right)` for the parent to build on. The post-order evaluation resolves both children before the node forms its own candidates, and because every node's bend is considered, paths that never touch the root are covered automatically.

`best` is initialized to negative infinity rather than 0 because a path must contain at least one node: on an all-negative tree the zero clamps make both branches contribute nothing, and the answer is the largest single node value. The recursion depth equals the tree height, which is the only extra storage beyond a couple of scalars.

**Complexity:** `O(n)` time, `O(h)` space.
