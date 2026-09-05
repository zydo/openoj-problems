# Solutions — The Priciest Order

## Join the lines to their unit prices, rank orders, keep the winner's rows

The answer needs two grains at once — the order total that decides the
winner and the line detail the output reports — so `Orders` is joined
to `Catalog` on `item_id`, putting each line's unit price next to it.
`GROUP BY order_id` then collapses the joined rows into one row per
order whose aggregate `SUM(price * quantity)` is exactly the order
total from the explanation. Ranking those totals with a window function
keeps every order visible while they are compared:
`RANK() OVER (ORDER BY total DESC, order_id ASC)` hands the shared top
rank to all highest-priced orders in ascending id order, so the winner
— highest total, smallest id on ties — is precisely whichever row holds
rank 1. Filtering to that rank inside an outer query (window functions
cannot sit in `WHERE`) yields one surviving order id; joining back to
the priced lines selects only its rows.

Because `comparison` is a multiset over three columns, any row order is
accepted; nothing needs an `ORDER BY`. Every line references an item in
`Catalog`, so the inner join preserves all lines, while never-ordered
items contribute no join row and stay absent. The dataset always
contains at least one order line, so some order exists and the answer
is never empty.

Joining and grouping sweep the n order lines once against the p priced
items; ranking sorts the k <= n order totals, and emitting the winner's
m rows costs no more than another pass over the join.

**Complexity:** `O(n log n)` time, `O(n + p)` space.
