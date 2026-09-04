# Solutions — Count Subarrays With Sum K

## Prefix-Sum Hash Map

Let `P[j]` denote the total of the first `j` entries, with `P[0] = 0`. The total
of the slice spanning positions `i..j` is `P[j+1] - P[i]`, so a slice reaches
`k` exactly when two prefix totals differ by `k`. Counting slices therefore
becomes counting pairs of prefix totals at distance `k` — and pairs can be
counted one endpoint at a time.

The scan carries the current prefix total and a frequency table of every prefix
total produced so far. Arriving at a new position, the number of qualifying
slices that end there is the number of earlier prefixes equal to `current - k`,
which the table answers in constant expected time. Adding that to the total and
then inserting `current` keeps the table strictly behind the cursor, so no slice
is ever paired with itself — an ordering that matters only when `k` is zero,
which is precisely the case a hand test is least likely to cover.

The table starts holding `{0: 1}`. That entry stands for the empty prefix, and
it is what lets a slice that begins at position `0` find its partner; drop it
and every such slice disappears from the count.

Nothing in the argument assumed the entries were positive. With negatives in
play the prefix totals wander up and down, which rules out sliding a window, but
the table only ever tests two sums for equality and is indifferent to the order
they appeared in. Zeros and a `k` of zero need no special case either.

**Complexity:** `O(n)` time, `O(n)` space.
