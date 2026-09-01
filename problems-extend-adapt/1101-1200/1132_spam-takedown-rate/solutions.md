# Solutions — Spam Takedown Rate

## Per-day percentage over spam reports, then one average

The inner query boils `Interactions` down to one row per day that saw a
spam report. The `WHERE` clause keeps only `'report'` events whose
`detail` reason is `'spam'`; grouping by `event_date` then makes each
group one day's set of spam-reported posts. A `LEFT JOIN` onto
`Takedowns` decorates every row with the post's removal, if any — left,
because a post that still stands has no `Takedowns` row and must survive
the join rather than vanish. Within a group, `COUNT(DISTINCT a.post_id)`
is the day's denominator, while
`COUNT(DISTINCT CASE WHEN r.post_id IS NOT NULL THEN a.post_id END)` is
the removed numerator: the `CASE` collapses to `NULL` (which `COUNT`
skips) for posts with no removal. The join fan-out is harmless — a post
reported twice that day contributes its removal to both copies, and
`DISTINCT` counts it once either way. Multiplying by `100.0` rather than
`100` keeps the division in floating point.

Days with no spam report form no group at all, which is exactly the
statement's rule that they are not part of the average — the example
averages `(50 + 0 + 100) / 3` and ignores the spam-free day entirely.
The outer query averages the daily percentages with `AVG` and rounds to
two decimal places. Takedown dates never enter the computation;
`Takedowns` is consulted only for the existence of a row per post.

**Complexity:** `O(N)` time over the `N` Interactions rows joined once
against a primary-keyed Takedowns lookup, `O(D × P)` space for `D` days
and their distinct spam-reported posts.
