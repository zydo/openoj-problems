# Solutions — Construct Binary Tree from Preorder and Inorder Traversal

## Divide and Conquer with an Inorder Index Map

The first unconsumed value of `preorder` is always the root of the subtree
being built. Locating that value inside `inorder` splits the work cleanly:
every inorder entry to the left of it belongs to the left subtree, every
entry to the right belongs to the right subtree, because inorder visits
left subtree, root, right subtree. Recursing on the two inorder ranges
reconstructs the entire tree.

Two details make this linear. A hash map from each value to its inorder
index turns the split lookup into `O(1)` instead of a linear scan. And
instead of slicing `preorder` apart, a single shared cursor consumes it
strictly left to right, one value per recursive call. That works because
preorder lists a subtree's root, then its whole left subtree, then its
whole right subtree — exactly the order in which the recursion asks for
root values. The recursion carries only `(low, high)` bounds on `inorder`
and picks the root from the cursor.

![Preorder's first value 3 is located in inorder at position 1, splitting [9] to the left and [15, 20, 7] to the right; the cursor then feeds 9 before 20, 15 and 7.](figures/solution-preorder-inorder-split.svg)

The base case `low >= high` marks an empty inorder range, which is how
missing children come out as `None` without any special casing. Values
are unique per the constraints, so each hash-map lookup identifies exactly
one split point.

**Complexity:** `O(n)` time, `O(n)` space — the index map holds `n`
entries and the recursion stack reaches tree height `h`, which is `O(n)`
in the worst case of a degenerate chain.
