# Solutions — Swap Shop II

## Rank each seller's sales by date, keep row 2, compare brands

The inner query numbers every sale within its seller, oldest first:
`ROW_NUMBER() OVER (PARTITION BY seller_id ORDER BY trade_date)`. The
guarantee that a seller never sells twice on one day makes `trade_date`
a total order inside each partition, so row 2 is unambiguously the
second listing they sold. Joining `Listings` on `listing_id` in the same
pass decorates each ranked sale with the brand that changed hands.

Filtering to `rn = 2` leaves one row per seller with at least two sales;
comparing that row's `listing_brand` against the seller's
`preferred_brand` decides `yes`/`no` through a CASE. Sellers with fewer
than two sales never produce a row 2, and the final **left** join back
onto `Members` is what carries them into the output anyway — a
`COALESCE` maps the missing match to `no`, which also covers the members
who never sold anything at all. Buying is irrelevant here; only the
seller side of each trade matters.

**Complexity:** `O(T log T)` for the per-partition date sort over `T`
Trades rows, plus `O(M)` for the member join — `O(T)` space for the
ranked intermediate.
