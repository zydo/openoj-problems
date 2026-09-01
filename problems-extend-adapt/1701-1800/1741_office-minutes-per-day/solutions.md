# Solutions — Office Minutes per Day

One grouping answers the question: fold `Attendance` on the
(`work_day`, `worker_id`) pair, and each group's `total_minutes` is the
sum of its rows' per-entry durations, `clock_out - clock_in`.

## Group per worker per day and sum the durations

Every row already carries the duration it represents — `clock_out -
clock_in` is the minutes one office visit lasted. `GROUP BY work_day,
worker_id` collapses all of a worker's rows on one day into a single
group, and `SUM(clock_out - clock_in)` totals those durations, so the
repeated enter/leave cycles the statement allows add up inside the group:
example 1's worker 4 on `2023-03-06` totals `(45 - 10) + (180 - 120) = 95`
across two rows. Nothing is double-counted or lost — the (`worker_id`,
`work_day`, `clock_in`) primary key makes each row a distinct visit, so
every row contributes its duration exactly once.

`work_day AS day` renames the grouped date to the output column the
answer asks for and positions it first, so each result row comes out as
(`day`, `worker_id`, `total_minutes`). The statement allows the result in
any order, so the query carries no `ORDER BY` — the judge compares result
multisets, and row order cannot fail a case.

**Complexity:** `O(n)` time, `O(g)` space (g groups).
