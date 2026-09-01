# Solutions — Same-Day Dropoffs I

## One aggregate over a boolean sum

"Same-day" is a per-row property: the two date columns are equal. The
whole problem is one pass over the table — count the rows where that
equality holds, divide by the row count, scale by 100, round.

SQL expresses it without any grouping: `SUM` over a boolean condition
adds 1 for each same-day dropoff and 0 otherwise, so
`SUM(placed_on = requested_on)` is exactly the numerator. The `* 100.0`
before dividing forces decimal arithmetic (an integer/integer division
would truncate), and `ROUND(..., 2)` applies the requested precision to
the final percentage — 5 of 12 same-day orders become 41.67.

**Complexity:** `O(N)` time for the single scan over `N` Dropoffs rows,
`O(1)` space beyond the aggregate.
