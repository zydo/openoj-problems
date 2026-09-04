# Solutions — Binary Tree Inorder Traversal

## Iterative inorder with an explicit stack

The recursive formulation of inorder traversal walks left, visits, then walks right, and the recursion itself remembers the path back up. Doing it iteratively means owning that memory explicitly: a stack of nodes plays the role of the call stack, holding exactly the ancestors whose left subtrees are still being descended into, while a cursor `node` names the next subtree to process. The loop runs while either operand of the traversal remains — a subtree to enter or an ancestor to come back to.

Each round starts by descending the left spine: the inner loop pushes every node it passes and steps left until it falls off the tree. That makes the stack top the leftmost unvisited node of the current subtree; popping it yields the next value in inorder order. The cursor then jumps to the popped node's right child, so that entire right subtree is traversed — by the very same rules — before any ancestor below it on the stack is visited. Empty tree, single node, and skewed chains all fall out of the invariant with no special cases, and nothing recurses, so a deep chain cannot overflow any call stack.

**Complexity:** `O(n)` time — each node is pushed and popped exactly once — and `O(h)` space for the stack, where `h` is the tree's height: `O(n)` worst case for a skewed chain, `O(log n)` for a balanced tree.
