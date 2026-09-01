# Solutions — Fruit Stand Daily Balance

## Conditional sum grouped by day

Every day writes two rows under the same key, so one
`GROUP BY sold_on` gathers each day's pair; the balance then needs the
apple row counted positive and the orange row negative. A `CASE`
inside `SUM` does exactly that — `crates` for `'apples'`, `-crates`
for anything else — so the group total comes out as `apples -
oranges` with no self-join.

The contract wants one row per day in calendar order, which the final
`ORDER BY sold_on` supplies; because the column is a real date, the
sort is calendar order rather than string luck. Zero and negative
balances fall out of the arithmetic unchanged — the example's
2021-07-07 with no apple crates and 6 orange crates reports `-6`
exactly as shown.

Two rows per group, `D` groups: the aggregation is one linear pass.

**Complexity:** `O(n)` time for the scan and grouping plus `O(D log
D)` for the final sort, `O(D)` space.
