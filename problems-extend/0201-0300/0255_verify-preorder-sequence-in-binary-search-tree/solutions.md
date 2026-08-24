# Solutions — Verify Preorder Sequence in Binary Search Tree

## Monotonic stack, running lower bound

While the values fall, the walk is descending a left spine; the first larger
value closes it. Every ancestor smaller than that value has just had its left
subtree finished, and the new value must be its right descendant — so the
deepest such ancestor becomes a floor that all later values must clear,
wherever they end up in the tree.

A stack holds the values of the current left spine, which strictly decrease,
and `low` holds the deepest ancestor closed so far. Each incoming value is
first checked against `low`: a smaller value would have to sit in some
ancestor's left subtree, which is already finished, so the answer is `false`
at once. Otherwise the stack is popped while its top is smaller — each pop
moves the value's future position one ancestor to the right and raises `low`
to the popped value — and the newcomer is pushed as the new spine bottom.

A full pass without a violation means every value found a legal place, so the
sequence is the preorder of some binary search tree. The follow-up's constant
space is within reach too: the popped prefix of `preorder` is dead once
popped, so the spine can be written back into the array itself and the
explicit stack dropped, leaving only the index of its top.

**Complexity:** `O(n)` time, `O(n)` space.
