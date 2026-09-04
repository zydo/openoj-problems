# Solutions — Monthly Payments I

## One Group By with Conditional Aggregates

All six output columns are functions of a single grouping key — the
month extracted from `paid_on` plus the country — so one `GROUP BY`
produces every row. The two unconditional columns come straight from
`COUNT(*)` and `SUM(amount)`.

The approved columns are the same aggregates wearing a filter. Rather
than joining or subquerying, each carries its own condition inside:
`SUM(status = 'approved')` adds 1 only on approved rows, and
`SUM(CASE WHEN status = 'approved' THEN amount END)` accumulates just
their amounts, declined rows falling through to NULL where `SUM`
ignores them. Wrapping that conditional sum in `COALESCE(..., 0)`
matters for all-declined groups — a country-month with no successful
payment reports a 0 total rather than a null. The month itself is
`strftime('%Y-%m', paid_on)`, the first seven characters of the ISO
date, already shaped the way the output wants it.

**Complexity:** `O(N log N)` time for the grouped aggregation over `N`
payments (SQLite builds a temporary b-tree on the group key), `O(G)`
space for the `G` produced groups.
