# Solutions — K Cheapest Picks From Both Ends

## Two Min-Heaps over the End Groups

A round never consults more than the first `window` and last `window`
survivors, so the untouched middle is invisible until it feeds one of the two
ends. That suggests the working state: one min-heap for the leading group and
one for the trailing group. Entries are `(value, position)` pairs, so the heap
order settles equal values by the smaller position on its own.

Each round compares the two tops with `left[0] <= right[0]` and pops the
winner — the `<=` folds the tie rule into the comparison, because a draw
resolves to the leading side. After a pop, that side's heap refills from the
middle: a pointer walking rightward feeds the front heap and one walking
leftward feeds the back heap, with the two never allowed to cross (`i <= j`),
so no middle element is ever enqueued twice. The `k` rounds accumulate the
popped values.

The degenerate regime is worth splitting off: as soon as `2 * window >= n`,
the two groups overlap and cover everything, so eligibility stops constraining
anything and the process is plain "take the `k` smallest values overall",
settled by one sort. Handling that up front spares the refill logic any
overlap corner cases and is the faster route whenever it applies.

Heapifying the two initial groups is linear; afterwards each round performs a
constant number of `O(log window)` heap operations, and the fallback path is a
single sort — with `k <= n <= 10^5` both stay comfortably inside the limits.

**Complexity:** `O(n log n)` time, `O(n)` space.
