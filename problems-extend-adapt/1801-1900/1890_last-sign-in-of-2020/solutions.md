# Solutions — Last Sign-In Of 2020

The task narrows the rows to the year 2020 and then collapses each
surviving visitor to their largest timestamp — one filtered
aggregation over the `SignIns` table.

## Filtered MAX group by

Select `visitor_id` and `MAX(seen_at) AS latest_seen` from `SignIns`
where `seen_at` lands inside 2020 (`>= '2020-01-01'` and
`< '2021-01-01'`), grouped by `visitor_id`. The half-open interval
keeps the boundary semantics exact: a sign-in at 2020-12-31 23:59:59
is in, the 2021 New Year moment is out.

Grouping by `visitor_id` folds each visitor's surviving rows into one
bucket, and `MAX(seen_at)` picks the latest among them. The timestamps
are stored as ISO-8601 strings, so the string maximum is also the
chronological maximum — no parsing or date arithmetic is needed.
Visitors with no 2020 sign-in never enter a grouped result, which is
exactly the exclusion the statement demands.

**Complexity:** `O(n log n)` time, `O(n)` space, where `n` is the
number of rows in `SignIns`.
