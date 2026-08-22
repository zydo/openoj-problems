# Solutions — Select Kth Smallest In A Search Tree

## Recursive Inorder with an Early Stop

The same walk in its plain recursive dress: left subtree, node, right
subtree. The countdown travels as shared state — a `nonlocal` in the Python
closure, an `int[]` cell in Java, a reference parameter in C++, a `&mut` pair
in Rust — and each visited node lowers it by one; the visit that empties it
records its value as the answer. The tree itself is never written to.

The stop happens on the way in, not the way out: the helper's first check
returns at once once the countdown has emptied, so after the kth visit nothing
further descends and the stack unwinds through the calls already made. The
work is the path to the kth value plus the k visits, exactly as in the
iterative twin.

What the recursive form pays is call-stack depth: it is bounded by the height,
which on a fully skewed tree is the node count itself. That is the concrete
reason the iterative variant exists — with the stack in hand the same walk
cannot overflow, whatever shape the input takes.

**Complexity:** `O(h + k)` time, `O(h)` space for the call stack (worst case `n` on a chain).

## Iterative Inorder with an Early Stop

The tree already knows the sorted order: walking a search tree inorder —
everything left, then the node, then everything right — emits the values from
smallest upward. So the kth smallest is the kth value that walk produces, and
the only remaining question is how to stop the walk early instead of
materialising the whole list.

The traversal runs on an explicit stack. From the current node, push and slide
down left links until the left edge runs out; then pop — the popped node is
the next value in order — count it, and continue from its right child. The
count starts at `k` and falls by one per pop; the pop that brings it to zero
is the answer, and the method returns that node's value on the spot. Whatever
the walk had not yet reached is larger and is never visited.

The stack is what buys the space bound: it holds one descending path, so the
auxiliary space tracks the tree's height rather than its size, and no
recursion-depth ceiling can bite on a long chain like
`[2,null,4,null,6,null,8]`. Work done is the initial descent plus the k pops —
`h + k` steps in total. For the follow-up's mutating tree, caching each node's
subtree size would replace the walk with a guided descent, answering in time
proportional to the height alone.

**Complexity:** `O(h + k)` time, `O(h)` space.
