# Solutions — The Busiest Cargo Port

## Combine endpoint contributions

Use `UNION ALL` to turn every route row into one departure contribution and
one arrival contribution. Group that stream by port and sum its voyage
counts, preserving repeated contributions rather than deduplicating them.

A second CTE retains the totals, and a scalar maximum selects every port
tied at the greatest value. SQLite integer sums provide the needed 64-bit
accumulation for large traffic totals.

**Complexity:** `O(r log r)` time and `O(r)` space for grouping `r` route
rows.
