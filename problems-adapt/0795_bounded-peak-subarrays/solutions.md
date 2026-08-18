# Solutions — Bounded Peak Subarrays

## Two ceiling sweeps, differenced

A window qualifies when its peak clears `left` and stays under `right`. That is
two conditions on one derived quantity, and derived quantities are hard to
maintain incrementally. Drop one side: let `under(B)` be the number of windows
whose peak never exceeds `B`. A peak lands in the band exactly when it is at
most `right` and *not* at most `left - 1`, so the answer is
`under(right) - under(left - 1)` and only one helper has to be written.

`under(B)` is a single left-to-right walk. Carry `run`, the number of
consecutive entries ending at the current position that are all at most `B`.
When the current entry is at most `B`, extend the streak and add the new `run`
to the tally — those are precisely the windows that end here and stay under the
ceiling, one for each starting point inside the streak. When the entry exceeds
`B`, no window containing it can qualify, so the streak collapses to zero.
Charging every window to its right endpoint means nothing is counted twice and
nothing is missed.

Two details make the subtraction safe. With `left` equal to `0` the second
ceiling is `-1`, which no entry can meet, so the subtracted tally is zero rather
than something wrong. And an entry smaller than `left` is *not* excluded on its
own — it happily sits inside a window whose peak is supplied by a larger
neighbour, which is why the streak keeps running through it.

On `[1,5,2,3,6]` with the band `3..5`, the ceiling-`5` walk yields runs
`1,2,3,4,0` for a tally of `10`, and the ceiling-`2` walk yields `1,0,1,0,0` for
a tally of `2`; the difference is the reported `8`.

**Complexity:** `O(n)` time — two passes over the array — and `O(1)` extra
space.
