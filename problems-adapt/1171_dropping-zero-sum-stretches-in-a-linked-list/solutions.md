# Solutions — Dropping Zero-Sum Stretches in a Linked List

## Prefix Sum Hash Map with Restart

A stretch of consecutive nodes sums to zero exactly when the running prefix
sum repeats: equal sums after node `j` and after node `i` mean everything
between them cancels. One scan with a map from prefix sum to index therefore
locates every zero-sum stretch. Deleting one stretch can weld its neighbours
into a fresh cancelling stretch that spans the gap, so after each deletion
the scan restarts from the front of the shortened list; every pass removes
at least one node, which guarantees the process ends.

The list is flattened into a value array first, which makes slicing and
rescanning trivial. A pass seeds `prefix_to_index = {0: -1}` — the empty
prefix ahead of the first node — and walks the array accumulating `prefix`.
On the first repeat, at current index `i` with earlier index `j`, the slice
`values[j+1..i]` is cut out via `values[:j+1] + values[i+1:]` and the pass
ends flagged for a restart. A pass that finishes with no repeat has reached
a fixed point. The surviving values are finally rebuilt into a fresh chain
behind a dummy head, so no stale node from a deleted stretch leaks out.

The seeded zero entry covers stretches that begin at the very first node —
`[4,-2,3,-5]` dies on the spot when the running sum returns to 0 — and a
lone zero-valued node is the case `j = i - 1`. With at most 1000 nodes the
worst case, one deletion per pass, costs a quadratic number of array steps —
comfortable here. For `[2,5,-5,6]` the interior pair goes in the first pass
and the second pass confirms `[2,6]` fixed.

**Complexity:** `O(n^2)` time, `O(n)` space.
