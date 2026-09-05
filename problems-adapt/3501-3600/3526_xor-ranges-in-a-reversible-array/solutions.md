# Solutions — XOR Ranges in a Reversible Array

## Treap With Split/Merge and Lazy Reversal

Hold the array in a treap — a balanced search tree with no explicit keys,
ordered implicitly by position. Each node draws a random priority (from a
fixed-seed linear congruential generator, keeping runs deterministic) and
carries its subtree size and subtree XOR. XOR suits this augmentation
perfectly: it is associative and every element is its own inverse, so the
combined value of a segment is just the stored field at the root of whatever
piece of the tree covers that segment — nothing beyond size bookkeeping is
needed for rebalancing.

Every operation reduces to split and merge. `split(root, k)` cuts the first
`k` elements from the rest by descending on subtree sizes; `merge` rejoins
two treaps by priority. A Set splits out the lone node at the index and
rewrites its value; an Ask splits out the segment and reads the root's xor
field; a Reverse splits out the segment and flips a lazy `rev` flag on its
root. The flag does its work in `push` — exchange the two children and flip
their flags — immediately before any descent passes through the node, while
`pull` restores size and xor from the children after each structural change.
That laziness is what keeps a reversal at `O(log n)` instead of a rewrite of
the whole segment.

The tree itself grows by merging one node at a time onto the right end,
`O(log n)` per element. Empty subtrees report size 0 and XOR 0, so the split
and merge routines treat boundaries uniformly, and each query stitches its
three pieces back together in the original left-to-right order.

In the second example the same segment is asked before and after being
reversed, and both answers are 6 — exactly the symmetry the subtree-XOR
storage predicts, since reversal changes the tree's shape and not the
multiset of values under any node.

**Complexity:** `O((n + q) log n)` time, `O(n)` space.
