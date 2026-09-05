# Solutions — Buyers of the Entire Catalog

## One Group per Buyer, Sized Against the Catalog

This is a classic relational-division query. Group `Purchases` by
`buyer_id` and compare the number of distinct items each buyer bought
against the size of the full catalog, computed once with the scalar
subquery `(SELECT COUNT(*) FROM Catalog)`. `COUNT(DISTINCT item_id)`
collapses duplicate purchase rows before counting, so a buyer whose
log repeats an item is judged exactly the same as one who bought it
once. Since `item_id` only ever references a real row of `Catalog`, a
buyer's distinct item count can never exceed the catalog size — it
reaches equality only when they have bought everything, so `HAVING`
keeps precisely the buyers who bought everything and drops the rest.

Each `Purchases` row is read once and folds into a per-buyer
accumulator, so with hash grouping the query runs in one linear sweep
over the table (sort-based plans add a log factor); the catalog-size
subquery is evaluated once and reused as a constant.

**Complexity:** `O(N + P)` time and `O(C)` space, for `N` Purchases
rows, `P` Catalog rows, and `C` distinct buyers.
