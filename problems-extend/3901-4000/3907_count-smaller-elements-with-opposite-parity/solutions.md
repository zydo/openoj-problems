# Solutions — Count Smaller Elements With Opposite Parity

## Two Fenwick trees over compressed values

Process `nums` from right to left, so the data structure contains exactly
the elements at indices greater than the current one. Coordinate-compress
the values into ascending ranks, then maintain one Fenwick tree for even
values and one for odd values. Each tree stores how many processed values
have each rank.

For `nums[i]`, query the tree of the opposite parity through the rank just
below `nums[i]`; the prefix count is precisely the number of smaller
opposite-parity elements to the right. Store that count in `answer[i]`, then
add the current value's rank to the tree matching its own parity. Querying
only lower ranks correctly excludes equal values.

The answer entries are at most `n - 1`, so 32-bit integers suffice.

**Complexity:** `O(n log n)` time, `O(n)` space.
