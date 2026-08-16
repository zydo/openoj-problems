# Solutions — Kth Smallest Element in a Binary Search Tree

## Iterative In-Order Traversal with Early Stop

In-order traversal of a BST visits values in ascending sorted order, so the kth value visited is exactly the kth smallest element in the tree. The solution performs an in-order traversal with an explicit stack instead of recursion, counting visits and returning the moment the counter reaches zero — the unvisited remainder of the tree is never touched.

The explicit-stack discipline is the standard simulation of recursion: from the current node, push the node and descend left as far as possible; when the left spine is exhausted, pop a node (this is the "visit"), decrement `k`, and continue from its right child. If `k` hits zero right after a pop, that popped node's value is the answer.

Doing this iteratively keeps the auxiliary space proportional to the tree height rather than the traversal length, and avoids recursion-depth limits on skewed trees with up to 10⁴ nodes. The work done is one descent from the root plus the k visits, so the running time depends on the tree's shape: `h + k`, where `h` is the height (worst case `n` for a degenerate chain). For the follow-up of frequent queries on a mutating tree, augmenting each node with its subtree size would answer in `O(h)` per query.

**Complexity:** `O(h + k)` time, `O(h)` space.
