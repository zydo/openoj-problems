# Solutions — Average Cart Size

## Weighted total over occurrence total, rounded once

Each row compresses `k` identical carts, so the mean's numerator is the
weighted item total `SUM(items_per_cart * cart_count)` and its
denominator is the plain cart total `SUM(cart_count)` — exactly the two
sums the examples' arithmetic spells out. The query aggregates both in
one pass over `Carts` and divides.

The `* 1.0` matters: `SUM` over integer columns stays integer, and
integer division would truncate `44 / 20` to `2` before `ROUND` ever
sees it. Scaling the numerator first forces a real division, so
`ROUND(..., 2)` rounds the true quotient to two decimals — `2.20` for
Example 1. Being a plain aggregate, the query returns exactly one row
for every dataset, and `null` when the table is empty, which is the
output shape the contract fixes.

Both sums are single scans with running accumulators; nothing beyond
three scalars is materialized.

**Complexity:** `O(n)` time, `O(1)` extra space.
