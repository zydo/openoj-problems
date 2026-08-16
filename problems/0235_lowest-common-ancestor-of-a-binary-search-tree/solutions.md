# Solutions — Lowest Common Ancestor of a Binary Search Tree

## Iterative BST Descent

The BST ordering property turns LCA into a walk. Every value in a node's left subtree is smaller than the node and every value in its right subtree is larger, so from any node you can tell which side any target lies on: if both `p` and `q` are smaller than the current node, the LCA must lie in the left subtree; if both are larger, it lies in the right subtree.

The first node where the two targets no longer sit on the same side is the answer. Every strict ancestor of that node has both targets inside one child subtree, so it is a common ancestor but not the lowest; at the split node the targets are separated into different subtrees — or the node's own value equals `p` or `q`, in which case it is an ancestor of the other target and of itself, which the LCA definition allows. Walking down from the root therefore lands exactly on the LCA.

The loop needs no stack, no recursion, and no parent pointers — just two comparisons per level, which makes the auxiliary space constant. In this judge the targets are given as values and the answer is the LCA's value, so the node's `val` is returned directly. The tree is not assumed balanced, so the height `h` can be as large as the node count on a degenerate tree.

**Complexity:** `O(h)` time, `O(1)` space.
