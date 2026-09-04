# Solutions — Repeat Buyers Inside a Week

## Pair every buyer's orders, keep the pairs inside a week

A buyer qualifies when some two of their order dates are at most 7 days
apart — the pair need not be adjacent in time, and "at most" includes same
day (distance 0) and exactly 7. A self-join of `Orders` with itself on
`buyer_id` enumerates every within-buyer pair once by requiring
`p1.order_id < p2.order_id`, and `julianday` turns each date into a
day number so the window test is one absolute-difference comparison
(`ABS(...) <= 7`) that works regardless of which row holds the earlier date.
`DISTINCT` collapses the surviving pairs back to users, and `ORDER BY
buyer_id` finishes the required shape.

The join is quadratic in each user's purchase count but linear in users, so
it stays cheap for any realistic order log; the empty-table case naturally
returns no rows.

**Complexity:** `O(n²)` time in the worst case (one buyer, n orders),
`O(n)` space.
