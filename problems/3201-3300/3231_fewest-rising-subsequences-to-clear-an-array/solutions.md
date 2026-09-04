# Solutions — Fewest Rising Subsequences to Clear an Array

## Longest non-increasing subsequence

Every operation deletes values that strictly rise, so two entries `x >= y`
read in that order can never leave together. A non-increasing chain — each
value at least as large as the next — therefore demands one operation per
member. Dilworth's theorem says this obstacle is the whole story: the array
splits into exactly as many rising subsequences as its longest non-increasing
chain has elements, so the chain's length is the answer, both a certificate
of difficulty and a schedule.

The length comes from patience sorting run on negated values. Keeping `-x`
and placing with a right-hand binary search lets equal values land on the same
pile, which is precisely the switch from "longest strictly rising" to "longest
non-increasing" on the original numbers. Each element either founds a new pile
or sits over the leftmost pile top it can cover; the piles stay ordered, and
their count is the wanted length.

One linear pass with a binary search per element replaces any quadratic
reasoning about deletion orders. The extremes behave as expected: a fully
rising input such as `[2,6,11,30]` collapses into a single pile, while the
repeated 8s in `[3,8,8,5]` keep opening piles because equal values never
rise.

**Complexity:** `O(n log n)` time, `O(n)` space.
