# Solutions — House Robber III

## Post-order tree DP with rob/skip pairs

Whether a house is worth robbing depends only on its immediate neighbors in the tree, so the optimal plan for a subtree is fully described by two numbers: the best loot if the subtree's root is robbed, and the best loot if it is skipped. Computing these two values for every node in a single post-order traversal solves the problem without any global state, because a parent's answer depends on its children's pairs and nothing else.

The recurrence is direct. Robbing a node forbids robbing both children, so `rob_here = node.val + left_skip + right_skip`. Skipping a node leaves each child free to do whichever is better for itself, so `skip_here = max(left_rob, left_skip) + max(right_rob, right_skip)`. The recursion bottoms out at `None` with the pair `(0, 0)`, and the final answer is the larger component of the root's pair. Returning a tuple per call is what makes this efficient: a naive solution that asked children separately for "best including grandchildren" and "best excluding this node" would recompute subtrees and blow up exponentially, whereas pairing the two values means each node's subtree is evaluated exactly once.

Edge cases are handled by the base case and the `max` wrappers: a single-node tree returns its own value, nodes with value 0 never distort the choice, and skewed (linked-list-like) trees simply deepen the recursion — with up to 10^4 nodes the recursion stack is bounded by the tree height, which is O(n) in the worst case.

**Complexity:** `O(n)` time, `O(h)` space for the recursion stack (where `h` is the tree height).
