# Solutions — Rebuild BST From Preorder

## Range-Guarded Single Pass

The naive reading of the array asks, at every node, where the left block stops
and the right block starts — a search that costs a scan per node. Carrying a
permitted range instead answers that question for free. One cursor moves
forward through the array and never moves back; a recursive call charged with
range `(low, high)` looks at the value under the cursor and only claims it if
the range admits it. A value outside the range means this branch of the tree is
complete, so the call returns an empty subtree without disturbing the cursor,
and control unwinds to the ancestor that can use the value.

![preorder = [20, 9, 4, 15, 26, 33], every node tagged with the range that let it in.](figures/solution-bst-bounds.svg)

Claiming value `v` creates the node, and the two child calls inherit the halves
of the range that the search-tree property allows: `(low, v-1)` on the left,
`(v+1, high)` on the right. The outermost call starts unrestricted. Because a
preorder walk emits a node, then its whole left side, then its whole right side,
asking for the left child before the right child lines the recursion up with the
array, and each value ends up in the one slot the ordering rules leave open for
it. Running the cursor off the end of the array closes any branches still open.

The input being a real preorder walk is what guarantees no value gets rejected
forever. Every element is claimed once and every call does a comparison and an
increment, so the running time is linear in the number of values. The stack is
the only extra memory: proportional to the height, which degrades to the full
length when the values arrive in sorted order and collapse the tree into a
chain.

**Complexity:** `O(n)` time, `O(n)` space in the worst case for the recursion stack (`O(h)` for balanced trees).
