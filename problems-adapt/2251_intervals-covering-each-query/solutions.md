# Solutions — Intervals Covering Each Query

## Sorted starts and ends with binary search

The window `[start, end]` covers `t` exactly when `start <= t <= end`, so the
count at `t` factors into two independent one-sided counts: how many windows
have `start <= t`, minus how many have `end < t`. Each is a binary search once
the values are sorted — and the two sides can be sorted *separately*, because
no query ever needs to know which start belongs to which end, only the two
totals.

The boundary conventions carry the whole argument. Over sorted `starts`,
`bisect_right(starts, t)` returns the number of starts at most `t` — a window
opening exactly at `t` is included, as it should be. Over sorted `ends`,
`bisect_left(ends, t)` returns the number of ends strictly below `t`, so a
window whose closing instant is exactly `t` is *not* subtracted and correctly
remains counted as open. The choice of `bisect_left` versus `bisect_right` is
precisely the difference between the two inclusivities; everything else is a
subtraction.

On Example 1, moment `9` finds three starts at most `9` (2, 4 and 5) and one
end strictly below it (7), leaving `3 - 1 = 2` open windows — `[4,9]`, whose
closing instant is `9` itself and is therefore not subtracted, and `[5,14]`.

Every query costs one subtraction of two logarithmic lookups, and the
comprehension emits answers in the original `queries` order without sorting or
pairing the queries themselves. With `F` windows and `Q` queries, building the
two sorted arrays is `O(F log F)` and answering everything is `O(Q log F)`.

**Complexity:** `O(F log F + Q log F)` time, `O(F)` space.
