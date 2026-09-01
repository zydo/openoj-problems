# Solutions — Order Log II

## Group Orders by item_id and sum units

Every row in `Orders` records one sale of some `item_id` in some
`order_year`; grouping the rows by `item_id` collects every sale of a
given item into one bucket, and summing `units` within each bucket
gives the total units sold for that item across all years. An item
with a single sale still forms a group of size one, so the aggregate
collapses to that row's own unit count.

Each `Orders` row is read once and folded into its item's running sum,
so the query runs in a single pass over `Orders`.

**Complexity:** `O(N)` time and `O(P)` extra space, for `N` Orders rows
and `P` distinct items.
