# Solutions — Order Log III

## Filter Orders down to each item's earliest (item_id, order_year) pair

A subquery groups `Orders` by `item_id` and takes `MIN(order_year)` to
find each item's first year of sale. The outer query then keeps every
`Orders` row whose `(item_id, order_year)` pair matches one of those
first-year pairs — matching on the pair, not just the year, is what
lets an item with several sale rows in its debut year all survive the
filter, since each surviving row still carries its own `units` and
`unit_price` rather than an aggregate.

Computing the per-item minimum year is one pass over `Orders`, and
matching rows back against it is a second pass, so the whole query
scans `Orders` a constant number of times.

**Complexity:** `O(N)` time and `O(N)` extra space, for `N` rows in
`Orders`.
