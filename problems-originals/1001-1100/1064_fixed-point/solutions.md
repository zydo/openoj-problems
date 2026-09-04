# Solutions — Fixed Point

## Binary search on arr[i] - i

Because `arr` is strictly increasing (distinct values, ascending order),
consecutive elements differ by at least 1 while the index always advances
by exactly 1, so the sequence `arr[i] - i` is non-decreasing as `i` grows.
That monotonicity lets binary search hunt for the leftmost index where
`arr[i] - i >= 0`: whenever the midpoint's difference is negative, every
index at or before the midpoint is too small to be the answer, since the
difference only grows from there and can't reach zero behind it, so the
search moves past the midpoint; whenever the difference is `>= 0`, the
leftmost qualifying index is at or before the midpoint, so the search
keeps the midpoint as a candidate and narrows the right bound down to it.

The search converges on the smallest index whose `arr[i] - i` is `>= 0`,
but that index only counts as an answer if the difference is exactly `0`
there — the monotonic sequence can step from negative straight past zero
to positive between consecutive indices without ever landing on zero, in
which case no fixed point exists at all. A final check on the converged
index distinguishes a true fixed point from that skip-over case and
produces `-1` when no fixed point is present.

**Complexity:** `O(log n)` time, `O(1)` space.
