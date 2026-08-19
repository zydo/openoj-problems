# Solutions — Steps to Align Every Value

## Sorting with Prefix Sums and Binary Search

For a target `q`, every element must travel `|nums[i] - q|` steps, so each
question is exactly a sum of absolute differences between `q` and the whole
array. Computing that naively per target costs `O(n * m)` — too slow. Sort
`nums` once and precompute prefix sums; then each target is one binary
search plus constant-time arithmetic.

For target `q`, `bisect_left` returns `j`, the number of elements strictly
below `q`. The below-group must be raised, contributing `q * j -
prefix[j]`; the rest must be lowered, contributing `(prefix[n] -
prefix[j]) - q * (n - j)`. Elements equal to `q` fall on the right side of
the split but cost zero either way, so ties are harmless.

The initial sort dominates; each of the `m` questions costs one
`O(log n)` search followed by `O(1)` arithmetic. Totals reach about
`10^5 * 10^9 = 10^14`, which the fixed-width ports accumulate in 64 bits
and Python integers hold exactly.

Worked on Example 1, `nums = [4,2,7]`, `targets = [3,6]`: sorted, the array
is `[2,4,7]` with prefix sums `[0,2,6,13]`. For `q = 3`, `j = 1`, so the
below-group contributes `3*1 - 2 = 1` and the above-group `(13 - 2) - 3*2
= 5`, totalling 6; for `q = 6`, `j = 2`, giving `12 - 6 = 6` plus `7 - 6 =
1`, totalling 7.

**Complexity:** `O(n log n + m log n)` time, `O(n)` space.
