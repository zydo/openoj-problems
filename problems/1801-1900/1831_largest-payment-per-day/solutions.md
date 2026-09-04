# Solutions — Largest Payment Per Day

A payment belongs to a calendar day, not to the moment it happened:
`2022-11-05 09:12:44` and `2022-11-05 18:40:02` are the same day,
while `23:59:59` and the next midnight are different days. So the
first step is to reduce each `paid_at` value to its date prefix, group
by it, and find the largest `value` inside each group.

## Rank rows per day, keep rank 1

The query partitions all rows by the date prefix of `paid_at`
(`SUBSTR(paid_at, 1, 10)` — the stored timestamps are zero-padded
`YYYY-MM-DD HH:MM:SS`, so the first ten characters are exactly the
calendar day), orders each partition by `value` descending, and tags
each row with its `RANK()`. Ranking rather than row-numbering is what
makes the tie rule free: every payment tied for a day's largest value
shares rank 1, and the outer filter `rnk = 1` keeps all of them. That
is precisely the example's 2022-11-06 case — payments `33` and `34`
both carry value `300`, one a second after midnight and one a second
before the next, so both survive. The final `ORDER BY payment_id ASC`
satisfies the statement's required output order; the comparison is
order-sensitive here because the statement pins one.

The window pass is one scan plus a sort per partition — `O(N log N)`
overall for `N` payments, `O(N)` extra space for the tagged rows,
which is far inside the limits at any realistic table size. Days with
a single payment fall out trivially (rank 1 of a one-row partition,
the example's 2022-11-07), and an empty input produces no groups and
no rows.

**Complexity:** `O(N log N)` time, `O(N)` space.
