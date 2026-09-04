# Solutions — Store Ledger II

## Match the S8 goods id, then exclude iPhone customers

The customers to report are exactly those who have a `Ledger` row for
the item named `S8` and none for the item named `iPhone`. Resolving
each name to its `goods_id` through the `Goods` table — a scalar
subquery per name — lets the `WHERE` clause test membership directly:
the outer `WHERE` keeps a sale whose `goods_id` equals the `S8` id,
and `customer_id NOT IN` the list of customers who ever bought the
`iPhone` id removes anyone on both sides. `DISTINCT` collapses
multiple `S8` purchases by the same customer into one result row.

The `NOT IN` subquery reads `Ledger` once, filtering to `iPhone`
purchases, so the exclusion list is a plain scan; `customer_id` is
never `NULL` per the table contract, so the anti-membership test is
exact.

**Complexity:** `O(N)` time and `O(B)` space for `N` Ledger rows and
`B` distinct customers of `iPhone`.
