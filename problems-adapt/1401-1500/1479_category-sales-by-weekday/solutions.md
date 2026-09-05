# Solutions — Category Sales by Weekday

## LEFT JOIN from Wares with one conditional SUM per weekday

The report must contain every category — even the ones that never
sold — so the driving table has to be `Wares`, not `Transactions`: a
`LEFT JOIN` keeps each ware's row when no transaction matches it,
leaving the joined columns `NULL` for those wares. Grouping by
`ware_category` then collapses the join to one row per category.

Each weekday becomes its own column via a conditional aggregate:
`SUM(CASE WHEN STRFTIME('%w', sale_date) = '<d>' THEN quantity ELSE 0
END)`. SQLite's `%w` maps dates to `'0'`=Sunday … `'6'`=Saturday, so
the seven aggregates read Monday-first by asking for `'1'` through
`'6'` then `'0'`. A category with no sales contributes joined rows
whose dates are all `NULL`: every CASE comparison fails and the
aggregate sums only zeros, which is exactly the all-zero report row the
statement asks for. An outer `ORDER BY ware_category` fixes the row
order.

**Complexity:** one join plus one grouped scan of the transactions,
`O(n + m log m)` time for `n` transactions and `m` categories, `O(m)`
space.
