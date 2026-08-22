# Solutions — Count Same-Order Triplets

Both methods pin the count on the middle value `y`: a triplet survives
both arrays exactly when its middle has some number of common
predecessors before it and common successors after it, so each `y`
contributes the product of the two counts and the answer sums over `y`.
The Fenwick tree gathers the counts online, sweeping `nums1` and
prefix-querying a small order-statistics structure at every value it
passes. The merge sort gathers them wholesale — the divide-and-conquer
that orders the positions already compares every cross-half pair, and
the tallies ride along with the sorting work.

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

## Merge-sort dominance counting

Every count the Fenwick sweep computes is a dominance count — a pair of
values whose order agrees in both arrays — and a merge sort compares
exactly those pairs on its way to sorting. Reduce first: replace each
`nums1[i]` by its position in `nums2`, so the input becomes one array
`a` with `a[i] < a[j]` saying that the values at `i` and `j` read in the
same order in both arrays. The middle-value split then asks, per index
`i`, for two of these counts at once: earlier indexes carrying smaller
positions (common predecessors) and later indexes carrying larger ones
(common successors).

The merge delivers one tally, `smaller_after[i]` — later indexes with
smaller positions. Whenever a merge places an element of the left half,
the right-half elements already placed are all smaller (the merge
outputs ascending) and, the halves being index ranges, all later, so the
element picks up the count of right-half placements so far. Every pair
of indexes meets at exactly one recursion level — the one whose split
separates them — so after the sort `smaller_after[i]` holds exactly the
later-and-smaller count, and both factors follow by subtraction: `a[i]`
positions in all are smaller than `a[i]`, so common predecessors number
`a[i] - smaller_after[i]`; `n - 1 - i` indexes in all are later, so
common successors number `(n - 1 - i) - smaller_after[i]`. One final
pass over the indexes multiplies and sums.

Walking the six-value example again, `nums1 = [0,5,2,4,1,3]` against
`nums2 = [2,0,4,1,5,3]`: the reduction gives `a = [1,4,0,2,3,5]`, and
the tallies left behind read `smaller_after = [1,3,0,0,0,0]` — only the
values 0 and 5 are ever overtaken by a later value. The value 4 then
reads `left = 2`, `right = 2`, contributing 4; the value 5 and the value
1 contribute `1 × 1` and `3 × 1`; the total is again 8. The sort performs
its `O(n log n)` comparisons regardless, so the tallying is bookkeeping
on work already done, and the workspace plus the position and count
arrays are the only storage.

**Complexity:** `O(n log n)` time, `O(n)` space.
