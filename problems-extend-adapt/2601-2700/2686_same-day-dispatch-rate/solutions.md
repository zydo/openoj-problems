# Solutions — Same-Day Dispatch Rate

## Group by order date, count the same-day share

The task slices the table into one group per distinct `placed_on` and asks,
inside each group, for the share of rows that were wanted the very day they
were placed. `GROUP BY placed_on` forms those groups; within a group the
expression `placed_on = wanted_on` evaluates to 1 exactly for the same-day
rows — SQLite has no separate boolean type — so `SUM` counts them while
`COUNT(*)` sizes the group. `100.0 *` that count divided by the group size
is the percentage; writing the literal as `100.0` rather than `100` keeps
the division in floating point, which matters for groups of three where
integer division would truncate `200 / 3` to 66 before rounding ever runs.

`ROUND(..., 2)` pins each share to two decimal places, and the value is
emitted as `same_day_pct` next to its `placed_on`. The trailing
`ORDER BY placed_on` sorts the groups ascending — one output row per
distinct date makes that order total, and the dates are stored as ISO
`YYYY-MM-DD` text, whose lexicographic order is the chronological order.
A date with no same-day dispatches still produces its row, the sum being 0
and the percentage rounding to 0.0; an empty table yields no rows at all.

**Complexity:** `O(n + d log d)` time — one scan over the `n` dispatch rows
plus a sort of the `d` distinct dates — and `O(d)` space for the groups.
