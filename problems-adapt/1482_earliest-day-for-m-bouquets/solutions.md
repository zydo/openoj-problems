# Solutions — Earliest Day for m Bouquets

## Binary Search on the Answer

Cutting gets easier with time: a row that yields `m` bouquets on day `d`
still yields them on day `d + 1`, because opening a flower never removes
one. The set of workable days is thus a suffix of the calendar, and the
task reduces to locating its first element — a textbook binary search on
the answer, keeping an unworkable day on one side and a workable one on the
other until the boundary closes.

Scoring a candidate takes one greedy sweep. A counter tracks the length of
the current streak of open flowers — entries whose day is at most the
candidate — and the moment the streak hits `k`, one bouquet is banked and
the counter drops back to zero; a closed flower zeroes it immediately. From
a maximal open block of length `L` this harvests exactly `L div k`
bouquets, the best any selection can do, since no bouquet may straddle a
closed flower and leftover blooms cannot be pooled across blocks. Take
`openDay = [2, 7, 3, 4, 3]` with `k = 2`: on day 3 the blocks are the
three singletons `{0}`, `{2}`, `{4}` — nothing to pair — while on day 4 the
right block grows to length 3 and gives up one bouquet, so day 4 is the
earliest workable day for `m = 1`.

The search interval runs from the earliest to the latest entry of
`openDay`: nothing is open before the first, everything is open by the
last. Before searching, the one impossible case is settled outright — when
`m * k` exceeds `n` the row can never supply enough flowers and the answer
is `-1` — which also guarantees the interval's top is workable whenever the
search runs. With `D` the largest entry, about `log D` sweeps of length
`n` decide everything.

**Complexity:** `O(n log D)` time, `O(1)` space.
