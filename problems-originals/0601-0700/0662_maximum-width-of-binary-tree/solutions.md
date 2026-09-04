# Solutions — Maximum Width of Binary Tree

## Breadth-first search, re-based heap indices

Number the nodes the way a complete binary tree would be numbered: the root
gets index 0, and the children of index `i` get `2i` and `2i + 1`. Under that
numbering a level's width is exactly its last index minus its first index plus
one — the null nodes between the end-nodes are counted by the arithmetic,
never materialized — and a queue that drains one level per round hands over
each level in index order, so the two ends of the queue are the end-nodes the
definition speaks of. A one-node level has width 1, a chain keeps every level
a one-node level, and the answer is the maximum over the rounds.

The trap is that heap indices double every level, so on a sparse-but-deep tree
they grow exponentially: a one-sided chain of 3000 nodes — well inside the
constraints — ends at raw index `2^2999`, far past the 64 bits every integer
in the judge's languages has, and the 32-bit guarantee covers only the answer,
not the indices along the way. The fix is to re-base each level before
doubling: subtract the level's first index from every node's index, so a
stored index never exceeds twice its level's width. A width is a difference
between two indices of one level, and a shift by the level's own constant
leaves every such difference unchanged — the measured widths, and only those,
survive intact. Even re-based, a child index can reach twice the level's
width — one bit past the 32-bit answer itself — so the indices stay 64-bit.

The traversal iterates in every language, which the breadth-first shape
supplies for free: there is no recursion to cap, and a 3000-node chain is just
3000 ordinary queue rounds. The queue never holds more than one level, so a
dense tree costs its widest level, and a sparse one — where the width lives in
the gaps, not the nodes — costs almost nothing.

**Complexity:** `O(n)` time, `O(width)` space.
