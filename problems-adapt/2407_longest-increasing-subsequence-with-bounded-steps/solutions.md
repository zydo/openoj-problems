# Solutions — Longest Increasing Subsequence With Bounded Steps

## Value-indexed segment tree

Book the state in value space, not index space: `best[v]` is the length of the
longest qualifying subsequence, among the elements read so far, that ends on
the value `v`. Reading the array left to right preserves index order by
construction — by the time `x` arrives, only earlier elements are on record.
Its predecessor must be a value in `[x - k, x - 1]`: strictly smaller, and
within the step bound. So `best[x]` is one plus the maximum of `best` over that
window, which is a range-maximum query.

An iterative max segment tree indexed by value serves both the window query and
the point write, sized to the next power of two above the `10⁵` value ceiling
(131072 leaves — small maxima are simply covered). The update climbs from the
leaf and stops the moment an ancestor already holds at least the new length, so
recording a shorter subsequence ending on `x` never clobbers a longer one; the
query is the standard bottom-up walk over `[max(1, x - k), x - 1]`, clamped
below because values start at 1.

The answer is the largest length ever written, collected as the scan proceeds.
Each element costs one query and one update, both logarithmic in the value
range — the follow-up's `O(n log m)` with `m` the maximum value. For
`nums = [3,1,4,7,2,5,9]` and `k = 3`, the chain `[1,4,7,9]` grows to length 4
one element at a time through exactly these window queries.

**Complexity:** `O(n log m)` time, `O(m)` space.
