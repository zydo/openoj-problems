# Solutions — Longest Equal-Sum Span

## Prefix Difference with a First-Occurrence Map

A span `[i, j]` balances exactly when `nums1`'s prefix sum and `nums2`'s
prefix sum move in lockstep across it — that is, when the running difference
`diff = prefix1 - prefix2` takes the same value just before `i` (at index
`i - 1`) and at `j`. So one pass suffices: accumulate the difference
`nums1[k] - nums2[k]` position by position, and for each value it reaches,
remember only the earliest index it was seen at. When the difference
revisits a value at index `k`, the stretch between that first occurrence and
`k` balances, and because the stored index is the earliest possible, every
later revisit measures the longest stretch available from it.

The map needs one seed, `0 -> -1`, standing for the empty prefix: a span
that starts at index 0 is bookended by the difference value 0 _before_ any
element, and recording it at −1 makes its length come out as
`k - (-1) = k + 1` directly. Identical arrays keep the difference pinned at
0 throughout, so the answer is the whole length — Example 1's three-ones
apiece does the same after early wobble. Conversely `[1,1]` against `[0,0]`
pushes the difference to fresh values 1 and 2 with no repetition and no
return to 0, leaving the answer at 0.

Difference values live in `[-n, n]`, so the map never exceeds linear size,
and the single lockstep walk does all the work.

**Complexity:** `O(n)` time, `O(n)` space.
