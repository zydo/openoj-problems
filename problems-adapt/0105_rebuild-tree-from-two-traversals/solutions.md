# Solutions — Rebuild Tree From Two Traversals

## Divide and Conquer with an Inorder Index Map

At any point during reconstruction, the next not-yet-used `preorder` entry
is the root of whatever subtree is being assembled. Finding that value
inside `inorder` then divides the remaining work: everything to its left
there belongs under the left child, everything to its right under the right
child, because that is exactly what the inorder order means. Recursing over
the two inorder ranges reassembles the whole tree.

Two refinements take this from quadratic to linear. First, a hash map from
each value to its inorder position answers the split question in constant
time, replacing a per-call scan. Second, `preorder` is never sliced: one
cursor shared across the whole recursion reads it strictly forward, one
value per call. Preorder enumerates a subtree's root, then its entire left
side, then its entire right — which is precisely the sequence in which the
recursion requests roots, so the cursor never has to jump.

![Preorder's first value 5 is located in inorder at position 1, splitting [1] to the left and [7, 9, 12] to the right; the cursor then feeds 1 before 9, 7 and 12.](figures/solution-preorder-inorder-split.svg)

An empty inorder range (`low >= high`) is the recursion's base case, and it
is how absent children come out as `None` without special handling.
Uniqueness of values — guaranteed by the constraints — is what makes each
map lookup name exactly one split point.

**Complexity:** `O(n)` time, `O(n)` space — the position map holds `n`
entries, and the recursion stack is the tree's height, `O(n)` at the worst
for a tree that is one long chain.
