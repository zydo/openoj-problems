# Solutions — Running Totals by House

## Cumulative window partitioned by house

The running total is a cumulative sum: for each row, the sum of
`points` over all rows of the same house whose day is not later than
the current row's day. A window function expresses exactly that —
`SUM(points) OVER (PARTITION BY house ORDER BY round_on)` accumulates
within each house, in day order, without collapsing the rows the way a
plain `GROUP BY` would.

The primary key `(house, round_on)` guarantees one row per house per
day, so the ordered window has no ties to break and each day
contributes exactly once to its house's running sum. Ordering the
final output by `house` then `round_on` satisfies the statement's
ordering requirement; because the window's `ORDER BY round_on` already
computes totals in calendar order, the outer `ORDER BY` merely
presents the same rows in the required sequence.

The window reads each row once, keeping only the partition's
accumulator; with `R` rows in `Rounds` the work and the emitted result
are both linear in `R`.

**Complexity:** `O(R)` time, `O(R)` space.
