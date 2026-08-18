# Solutions — Right Smaller Counts

## Fenwick Tree over the Value Range

The naive reading fixes a position and scans everything after it, which is
quadratic. Walking from the right end instead inverts the question: by the
time the walker arrives at position `i`, every value it has already processed
is precisely the suffix to the right of `i`, so `answer[i]` becomes a rank
query — "how many held values are strictly below `nums[i]`?" — and rank
queries are what a Fenwick tree does in logarithmic time.

The value bounds do the coordinate work for free. Since every element lies in
`[-10⁴, 10⁴]`, the solution shifts each value by `10002`, landing the minimum
on slot 2 of a 20005-slot table, and sizes the BIT to cover that whole range;
each slot counts occurrences of its value. The loop body is two operations:
`query(index - 1)` totals every slot strictly below the element's own value —
which is exactly the strictly-smaller count — and `update(index, 1)` then adds
the element for the benefit of positions still further left. Query-then-insert
is also what keeps an element from being counted against itself.

The BIT primitives are the usual low-bit walks: `update` climbs with
`i += i & -i`, adding the delta into each block that covers the slot, while
`query` descends with `i -= i & -i`, summing the disjoint blocks that tile the
prefix. Answers come out right-to-left, so the list is reversed before it is
returned.

Duplicates need no special casing. For `[-2, -2, 7, -5, 0]` the second `-2` is
inserted before the first is processed, yet the first still reports 1 (only
`-5`), because the prefix queried stops one slot short of its own value.
With `n` up to 10⁵ the run is `n` logarithmic steps over a fixed table of
`V = 2·10⁴ + 5` slots.

**Complexity:** `O(n log V)` time, `O(V)` space.
