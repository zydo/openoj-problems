# Solutions — Most Common BST Values

## Inorder streaks, two passes

Inorder visits a BST's values in ascending order, so all copies of a value
arrive consecutively: a mode is simply the longest run of equal values in
the walk, and no counter table keyed by value is ever needed. The walk here
is iterative — it carries its own stack of nodes down the left spine —
because the tree may be a single 10^4-node chain, deeper than the recursion
limits this judge's runtimes hand out.

Two passes over that one walk do the whole job. The first pass only
measures: it keeps the value just emitted and how many times it has come
up in a row, and remembers the longest such streak — nothing else is
stored. The second pass walks again with the streak bookkeeping reset and
emits a value at exactly the moment its streak reaches that maximum — once
per mode, and because inorder ascends, already in ascending sorted order.

**Complexity:** `O(n)` time, `O(h)` space for the explicit traversal stack,
where `h` is the tree's height.
