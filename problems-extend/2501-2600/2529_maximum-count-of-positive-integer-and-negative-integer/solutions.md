# Solutions — Maximum Count of Positive Integer and Negative Integer

## Binary search for the two boundaries

Sorting hands us the counts almost for free. The negative integers are a
prefix of `nums` — everything before the first element that is not below
zero — and the positive integers are a suffix, everything from the first
element that reaches one onward. Zeros, which belong to neither group,
occupy whatever sits between those two boundary points.

So two lower-bound style binary searches settle it in `O(log n)`: one at
`0` gives `neg`, the length of the all-negative prefix, and one at `1`
gives the index where the positive suffix begins, so `pos` is `n` minus
that index. The answer is simply the larger of the two. An all-positive,
all-negative, or all-zero array degenerates cleanly to one empty side and
the search returns an endpoint.

Counting linearly would also pass at these constraints, but the follow-up
asks for logarithmic time and this delivers it: ~20 comparisons per
boundary even at `n = 2000`. Counts are bounded by the array length, so
32-bit arithmetic suffices everywhere and JavaScript numbers stay exact
far below `2⁵³`.

**Complexity:** `O(log n)` time, `O(1)` space.
