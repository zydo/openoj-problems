# Solutions — Sort Colors

## Two-Pass Counting Sort

With only three possible keys, the multiset of values determines the sorted
result completely, so no comparisons are needed. The first pass sweeps the
array once and tallies occurrences into a fixed `counts` list indexed by the
color value itself — `counts[v]` ends up holding exactly how many times `v`
appears. The second pass reconstructs the array: walking the colors in order
`0, 1, 2`, it overwrites `counts[color]` consecutive slots with that color,
advancing a single write index `index` monotonically from left to right.

Overwriting is safe precisely because the tally pass already captured every
element — nothing readable is destroyed before it has been counted. The
write index and the three per-color loops together emit exactly `n` values,
partitioning the array into a block of `counts[0]` reds, then `counts[1]`
whites, then `counts[2]` blues, which is the required order. Elements
compare equal within each block, so their original arrangement is
irrelevant.

The sort happens in place on `nums` (the only auxiliary state is the
three-slot counter), and the array is returned as the OpenOJ signature
requires, where the LeetCode version instead modifies in place with no
return value. The statement's follow-up teases a one-pass Dutch-national-
flag partition; the counting approach trades that extra pass for noticeably
simpler logic, and both are linear.

**Complexity:** `O(n)` time, `O(1)` space.
