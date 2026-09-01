# Solutions — Monthly Rainfall Grid

## Group by station, conditionally sum into month columns

A pivot in SQL is one `GROUP BY` with an expression per output column.
The rows collapse onto their station; each of the twelve rainfall
columns is produced by a conditional aggregate that looks at only its
own month: `SUM(CASE WHEN month = 'Jan' THEN rainfall END)`. Rows of
other months contribute nothing (the `CASE` falls through to NULL,
which `SUM` ignores), and a station with no January row at all sums
over zero rows, leaving the column NULL — exactly the required empty
cell.

Because `(station_id, month)` is the primary key, at most one row per
station can match any given month's predicate, so the conditional
`SUM` is a pure selection — no arithmetic across multiple rows ever
happens. `GROUP BY station_id` guarantees one output row per station.

**Complexity:** `O(N · 12)` predicate evaluations for `N` Stations rows
— `O(N)` time overall per group pass, `O(S)` space for the grouped
result with `S` stations.
