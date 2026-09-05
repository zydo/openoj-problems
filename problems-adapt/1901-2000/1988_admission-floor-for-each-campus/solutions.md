# Solutions — Admission Floor for Each Campus

## Group by campus, take the minimum qualifying points

A campus's floor comes entirely from the `ScoreReport` rows whose
`achievers` count fits inside its `seats`: among those rows the campus
wants the largest `achievers`, and among rows tied on that count it
takes the smallest `points`. The query expresses this as `LEFT JOIN
ScoreReport e ON e.achievers <= s.seats` — the `LEFT` keeps campuses
with no qualifying row at all, while the join condition pairs each
campus with exactly the point values it may announce. `GROUP BY
s.campus_id` then collapses each campus's candidates into one answer.

The step that turns this into a plain `MIN` is the report's
consistency guarantee: a higher `points` value never comes with a
larger `achievers` count. So within any campus's candidate set, the
smallest `points` automatically sits on the row with the most
`achievers` — the row the campus prefers — and ties on the count are
already resolved toward the lower score. `COALESCE(MIN(e.points), -1)`
is therefore the exact floor. The `COALESCE` covers the campus whose
`seats` undercut every `achievers` count in the report: its candidate
set is all-`NULL`, and the required `-1` replaces the null.

Since `campus_id` is unique, each group is a single campus and the
query emits exactly one `(campus_id, points)` row per campus. The join
scans `Campuses × qualifying ScoreReport rows` and the aggregation is a
hash group-by, so the cost is bounded by the two tables' sizes.

**Complexity:** `O(|Campuses| + |ScoreReport| + rows_in_join)` time, `O(rows_in_join)` space.
