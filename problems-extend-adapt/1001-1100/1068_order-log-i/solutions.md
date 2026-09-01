# Solutions — Order Log I

## Join Orders to Items on item_id

Each `Orders` row already names one sale event with its own
`order_year` and `unit_price`, so the report is a straight row-for-row
projection — no grouping or aggregation is needed. Joining `Orders` to
`Items` on `item_id` attaches the matching `item_name` to every sale;
since `item_id` is a foreign key into `Items`, the inner join keeps
every `Orders` row exactly once and never drops or duplicates a sale.

Each `Orders` row is read once and matched to its `Items` row through
an index or hash lookup on `item_id`, so the query runs in one pass
over `Orders` plus the cost of resolving each lookup.

**Complexity:** `O(N + M)` time and `O(1)` extra space, for `N` Orders
rows and `M` Items rows.
