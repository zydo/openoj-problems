# Solutions — Preorder Balances by Title

One aggregation joined back onto the title list answers the question:
each book's `due`, `paid`, `canceled`, and `refunded` figures are the
`SUM`s over that book's preorder rows, zero-filled when it has none.

## LEFT JOIN Titles onto per-title preorder sums

The inner query collapses `Preorders` into one row per `title_id` holding
the four `SUM`s — a book with many preorders folds into that single row,
and a book with no preorders is simply absent from the aggregation.
`LEFT JOIN` then walks `Titles` down that result: matched books pick up
their totals, while a book with no preorder rows at all keeps its place
in the output carrying `NULL`s from the unmatched side, which
`COALESCE(..., 0)` turns into the required zeros. That zero-fill is the
"for every book the shop carries" guarantee — Example 1's `zephyr`
exercises it directly, and a plain inner join would silently drop every
preorder-less book instead.

`ORDER BY name` finishes the query with the required ascending sort on
the book name. The judge compares result multisets, so that ordering is
a statement requirement rather than a comparison one — row order cannot
fail a case.

**Complexity:** `O(t + o log o)` time (aggregation + ordering), `O(t)`
space.
