# Solutions — Rebuild From Subset Sums

## Peeling the Largest Gap Recursively

Sort the multiset first. The top two values differ by exactly one element's
absolute value: the largest subset sum either includes that element or
excludes it, and both sums are present, adjacent once sorted. Call the gap
`diff`. Every sum `x` then has a partner `x + diff` — the same subset with
the element tossed in — so a counter-guided walk over the sorted list that
consumes one `x` and one `x + diff` per step divides the multiset into two
equal halves: `left`, the sums of subsets that avoid the element, and
`right`, the sums of subsets that take it.

The empty subset contributes 0, so whichever half holds the 0 is itself a
faithful subset-sum multiset for the other `n - 1` elements. When 0 sits in
`left`, the element's value is `+diff` and `left` is kept; when it sits in
`right`, the element is `-diff` and `right` survives (those sums already
include it). Both halves come out of the walk in sorted order, so later
rounds skip the re-sort. Each round extracts one element, and after `n`
rounds one sum — necessarily the 0 from the lone empty subset — remains;
the collected elements are the answer. In Example 1 the sorted sums are
`[-2, 0, 3, 5]`: the gap is `5 - 3 = 2`, the walk pairs `-2` with `0` and
`3` with `5`, and since `0` lands in the with-half the element is `-2` and
`[0, 5]` survives; the next round's gap of `5` recovers `+5`, giving
`[-2, 5]`.

Nothing dead-ends: for the sign choice anchored at the 0, the multiset
invariant supplies exactly the multiplicities the walk consumes. Elements
that are 0 make the top two sums equal (`diff = 0`, both halves identical),
and repeated values need no branches — the same peel handles them.

**Complexity:** `O(2ⁿ · n)` time, `O(2ⁿ)` space.
