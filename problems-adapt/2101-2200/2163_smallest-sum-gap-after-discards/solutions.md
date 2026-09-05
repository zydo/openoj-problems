# Solutions — Smallest Sum Gap After Discards

## Two Heaps over Prefix and Suffix Selections

The score `front - back` shrinks when the front part shops cheap and the
back part shops rich. Say the front part's members all sit at or before
index `i` and the back part's after it: the front takes `n` elements from
`nums[0..i]`, the back takes `n` from `nums[i+1..]`, and whatever sits
between the two selections is exactly the `n` discards. So every plan
corresponds to a boundary `i` — legal from `n - 1` through `2n - 1`, so
both sides hold at least `n` elements — paired with the minimum n-element
sum left of it and the maximum n-element sum right of it, and the answer is
the smallest `left_min[i] - right_max[i + 1]` over all boundaries.

Both tables come from bounded heaps, one pass each. Left to right, a
max-heap of size `n` (negatives in Python) holds the `n` smallest values
seen, with a running sum that drops the evicted largest; once `n` values
are aboard, `left_min[i]` records the sum. Right to left, a min-heap of
size `n` symmetrically keeps the `n` largest of the suffix from `i`,
producing `right_max[i]`. Push-then-evict keeps the selections incremental,
so each element costs one `O(log n)` heap operation.

A final linear sweep couples the tables at each legal boundary, as in
example 2 where the boundary after index 2 pairs the cheap {4,6} with the
rich {7,5} for `10 - 12 = -2`, leaving 8 and 2 discarded between them. The
heaps never exceed `n + 1` residents and the tables one entry per index.

**Complexity:** `O(n log n)` time, `O(n)` space, for an array of `3n`
elements.
