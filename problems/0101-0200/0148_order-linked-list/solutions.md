# Solutions — Order Linked List

## Top-Down Merge Sort

What makes this sort the right one for a chain of nodes is that it never asks
for the `k`th element. Splitting, comparing and joining are all pointer work,
so the algorithm runs on the structure it is given rather than on a copy of it.
The shape is the familiar one: cut the chain in two, order each piece by the
same routine, and interleave the two ordered pieces. The interleave keeps a
placeholder node ahead of the growing result, takes whichever of the two front
nodes is smaller, and — when one piece runs dry — hooks the other's remainder
on wholesale. Preferring the first piece when the two fronts tie (`<=`) makes
the ordering stable.

Where the cut goes is the subtle part. Two cursors advance together, one by one
node and one by two, and the fast one is started a node in front. That offset
means the slow cursor stops on the last node of the first half rather than the
first node of the second, so severing the link after it leaves two pieces that
are both strictly shorter than what came in. Length two is the case that would
otherwise loop forever: with the offset it separates into two single nodes, and
single nodes — like the empty chain — are returned as they are.

![The cascade for [7,3,9,5]: split into [7,3] and [9,5], then into singletons, then merge into [3,7] and [5,9] and finally [3,5,7,9].](figures/solution-merge-sort-cascade.svg)

Cutting at the halfway point bounds the depth of the recursion at `log n`, and
each level does a linear amount of relinking, so the time is `O(n log n)` with
no array ever allocated. The only extra memory is the recursion itself. Meeting
the follow-up's constant-memory bar means turning the recursion inside out —
merging runs of length 1, then 2, then 4 in a bottom-up loop — but the merge
step above is unchanged by that rewrite.

**Complexity:** `O(n log n)` time, `O(log n)` space.
