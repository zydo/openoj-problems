# Solutions — Counting Big Spenders

Only the receipts above the threshold matter, and only the set of
customers behind them — the whole table collapses into a single count.

## Count distinct customers after filtering receipts

Filter `Receipts` down to the receipts whose `total` is strictly above
`500`, then count the distinct `customer_id` values that survive the
filter. The `WHERE` clause enforces the threshold, while `DISTINCT`
collapses a customer who holds several big receipts to a single
contribution. The aggregate always returns one row — `0` when the table
is empty or no receipt qualifies.

The table is scanned once, and the engine only has to hold the set of
qualifying customer identifiers while counting. With `N` receipts and
`C` qualifying customers, that working set is bounded by `C`.

**Complexity:** `O(N)` time (one linear scan of `Receipts`), `O(C)`
extra space.
