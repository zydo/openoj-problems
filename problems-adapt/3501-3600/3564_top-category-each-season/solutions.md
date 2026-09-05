# Solutions — Top Category Each Season

## Season bucketing with a ranking window

Each receipt lands in exactly one season through the month number of
`sold_on`, computed with `strftime('%m', ...)` and mapped by a `CASE` —
Winter is the wrap-around bucket (12, 1, 2), so it needs its three months
spelled out while the other three seasons are contiguous ranges. Joining
`catalog` attaches the department to every receipt, and grouping by
`(season, department)` folds the join fan-out into one row per bucket with
`SUM(units)` as the popularity score.

The revenue tie-break is computed in integer cents: `ROUND(unit_price * 100)`
snaps each two-decimal price to an exact integer before the sum, so binary
floating-point can never make two receipts with the same nominal revenue
differ by one ulp at comparison time — and the final `total_cents / 100.0`
restores the two-decimal figure. The winner per season falls out of a
`RANK()` window ordered by units descending, cents descending, department
ascending — the lexicographic clause is what makes the rank unique, since
department names never repeat within a bucket — and the outer query keeps
rank 1 and presents the seasons in ascending order.

**Complexity:** `O(S log S)` for `S` receipts (the grouping plus the window's
sort), `O(C)` space for the per-season department buckets.
