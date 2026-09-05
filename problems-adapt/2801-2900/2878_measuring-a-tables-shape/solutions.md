# Solutions — Measuring A Table's Shape

## Two one-row counts, cross joined

The seeded tables already carry the shape one row per unit: `RowLog`
holds exactly one row per row of the data table, and `ColumnLog` holds
exactly one row per column of it. Both requested dimensions are
therefore plain row counts — `COUNT(*)` over `RowLog` for the row total,
`COUNT(*)` over `ColumnLog` for the column total — and each fits in its
own single-row aggregate query.

The subtlety is delivering the two counts side by side in one row, since
each lives in its own query. Bundling each count in a single-row CTE and
cross joining the CTEs does exactly that: an aggregate without a
`GROUP BY` always returns exactly one row — holding `0` when it counts
an empty table — so the cross join fans out to precisely one output row
carrying both totals, which is why even a rowless data table still gets
its `[0, c]` shape reported.

The counts are insert-order independent — a shape keeps its size
however its rows and columns happen to be seeded — so no ordering or
position handling is needed anywhere in the query.

**Complexity:** `O(r + c)` time, `O(1)` space — the two `COUNT(*)`
scans touch each of the `r` data rows and `c` data columns once, and the
output is a single two-value row.
