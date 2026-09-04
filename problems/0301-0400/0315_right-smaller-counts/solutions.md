# Solutions — Right Smaller Counts

Both solutions turn the quadratic pair scan into logarithmic bookkeeping:
every crossing pair — a position and a strictly smaller value after it — is
counted exactly once. The merge sort earns that by reorganizing: as
positions sort by value, each left-half element is credited the right-half
values placed before it, so the answers fall out of the merge itself. The
Fenwick tree keeps the array in place instead and walks it from the right
end, asking each element's question directly — how many seen values are
strictly below mine? — a rank query the bounded value range turns into a
prefix sum.

## Merge-Sort Divide-and-Conquer Counting

The divide-and-conquer reading sorts an array of positions keyed by their
values — positions, because the answer is one count per position and
sorting bare values would erase it. Merge sort halves the array, and the
halving is itself the bookkeeping device: every index in the right half
sits after every index in the left half, so a left element's
smaller-to-the-right count decomposes into what its own half contributes —
recursion's business — plus the right-half values strictly below it, which
the merge step reads off for free because both halves are already sorted
when it runs.

The tally rides on the merge cursor. When a left-half element is placed,
every right-half element already written out compared smaller against it —
the left run is sorted, so anything that outranked an earlier head also
outranks this one — and `result[position] += j - mid` credits them all at
once, `j - mid` being the count of right-half placements so far. The
comparison is `<=`: on equal values the left element places first, so an
equal right-hand value is never counted against it, which is precisely the
statement's "equal is not smaller" rule. A drain loop after the main sweep
credits any remaining left elements with the entire right half. Each
crossing pair is weighed at the one merge whose divide separates it —
never before, never again — so nothing is missed or double-counted.

Recursion depth is the sort's height — about seventeen frames at
`n = 10⁵` — and the left-half copy plus the position workspace are the
only extra storage. For `[-2, -2, 7, -5, 0]` the equal `-2`s place
left-first at every merge they share, so each reports only `-5` below it,
agreeing with the Fenwick tree's `[1, 1, 2, 0, 0]`.

**Complexity:** `O(n log n)` time, `O(n)` space.

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
