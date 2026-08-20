# Solutions — Count Same-Order Triplets

## Fenwick tree over `nums2` positions

A same-order triplet is a set of three values whose relative order agrees
across the two permutations — a common increasing subsequence of length
three. Counting length-three common subsequences splits neatly if you fix
the middle value `y`: the triplets centered on `y` pair any value that
precedes `y` in both arrays with any value that follows `y` in both arrays,
so `y` contributes (common predecessors) × (common successors), and summing
over `y` counts every triplet exactly once, at its middle.

The predecessors need a running count. Sweep `nums1` left to right with a
Fenwick tree indexed by position in `nums2`, inserting each value as it
passes. When the sweep reaches value `y` — say it is the `i`-th value
overall and lives at position `p` in `nums2` — a prefix query over
positions `0..p-1` returns `left`, how many of the `i` values already
processed also precede `y` in `nums2`. The remaining `i - left` processed
values lie after `y` in `nums2`, and since `n - 1 - p` values in total
follow `y` there, the common successors number
`right = (n - 1 - p) - (i - left)`. Add `left * right`, insert `y`, continue.

Walking `nums1 = [0,5,2,4,1,3]` against `nums2 = [2,0,4,1,5,3]`: at `4`
(position 2 in `nums2`) the tree holds 0, 5, 2, of which 0 and 2 sit below
position 2 — `left = 2`, and after it in both arrays stand 1 and 3, so
`right = 2`, contributing 4. The value 5 contributes 1 and the value 1
contributes 3, for the reported total of 8. Each of the `n` steps does two
`O(log n)` tree operations.

**Complexity:** `O(n log n)` time, `O(n)` space.
