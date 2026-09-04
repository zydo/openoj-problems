# Solutions — Shelf Price on a Date

## Latest applicable marking, unioned with the never-marked products

For each product the answer is its newest marking among those dated on
or before 2019-08-16. The first arm of the query does exactly that:
`ROW_NUMBER() OVER (PARTITION BY sku ORDER BY marked_on DESC)` numbers
each product's already-filtered markings newest-first, and keeping
`rn = 1` yields one row per product with an applicable marking.

The second half handles the starting price. A product whose **earliest**
marking postdates the as-of date has no applicable row at all, yet still
belongs in the output at price 10 — product 3 in the example. That arm
groups by product and emits `10` exactly when
`MIN(marked_on) > '2019-08-16'`, which is precisely the
"never marked on time" condition. A plain `UNION` glues the arms: their
product sets are disjoint, so the dedup is a formality, and the result
carries every mentioned product exactly once.

**Complexity:** `O(N log N)` for the per-product date sort over `N`
Prices rows plus one grouped scan, `O(N)` space for the ranked
intermediate.
