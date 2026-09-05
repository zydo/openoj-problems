# Solutions — Longest Non-Decreasing Chain at Each Index

## Longest Non-Decreasing Subsequence Tails Array

A chain ending at index `i` picks earlier entries in order with
non-decreasing values, so `ans[i]` is precisely the longest non-decreasing
subsequence of the prefix `heights[0..i]` that terminates at `i`. The
patience-sorting tails structure computes that for every index in a single
sweep: `tails[j]` stores the smallest value any non-decreasing chain of
length `j + 1` has ended on so far. Smallest endings only ever shrink as
work proceeds, which keeps `tails` sorted — exactly the property a binary
search needs.

Equal neighbors are the one twist, and `bisect_right` is the whole answer to
it: the search targets the first tail strictly greater than the arrival, so
a value equal to an existing tail _extends_ that chain instead of replacing
it. An arrival larger than every tail lands past the end and grows the table
by one, starting a new longest chain; otherwise it overwrites the first tail
it can improve, restoring the minimal-ending invariant. Either way, the
insertion index plus one is the length of the best chain ending at this
arrival. In `[4,7,4,9]` the second 4 finds no strictly greater tail before
index 2, extends to length 2, and the 9 then reads position 3 — length 3 —
matching `[4,4,9]`.

The machinery is the standard `O(n log n)` longest-increasing-subsequence
construction with `bisect_right` swapped in for `bisect_left`; that single
substitution is what moves it from strictly increasing to non-decreasing.
Values up to `10⁷` never index anything, so their size is irrelevant.

**Complexity:** `O(n log n)` time, `O(n)` space.
