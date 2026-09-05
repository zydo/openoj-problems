# Solutions — Positions With K Smaller Values on Each Side

## Two Fenwick sweeps for left and right smaller-counts

Position `i` is sheltered precisely when two independent quantities clear the
bar: the number of strictly smaller values to its left, and the number
to its right. Either quantity is answered online by a Fenwick tree
indexed by value — walk the array once, and before inserting `nums[i]`,
query the prefix sum of everything below it, which is exactly its count
of strictly smaller predecessors.

The right side is the same computation on the reversed array: rerun the
sweep on a fresh tree over reversed order and read the results mirrored.
A position is counted when both of its stored counts reach `k`; equal
values never contribute anywhere because only strict "smaller" prefixes
are ever summed.

Every query and update touches `O(log V)` tree nodes with `V` the value
bound (here at most `n`), and counts are bounded by the array length,
comfortably inside every language's exact integer range.

**Complexity:** `O(n log n)` time across the two sweeps plus a linear
tally, `O(n)` space for the trees and the per-position count arrays.
