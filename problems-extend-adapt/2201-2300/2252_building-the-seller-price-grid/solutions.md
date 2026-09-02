# Solutions — Building the Seller Price Grid

## Discover the seller list, then aggregate over it

SQLite has no dynamic SQL, so the pivot is built in two stages driven by the judge's `__COLUMNS__` substitution. The first statement is a discovery `SELECT`: it takes `SELECT DISTINCT seller FROM Offers`, and for each seller renders one pivot expression as text — `max(CASE WHEN seller = '...' THEN offer END) AS "..."` — with `quote()` producing a safely escaped string literal for the match and `replace(seller, '"', '""')` producing a safely escaped double-quoted identifier for the alias. `group_concat(... ORDER BY seller)` fuses the expressions into one comma-separated list in lexicographical order, which is exactly the column order the problem demands.

The judge substitutes that list into every `__COLUMNS__` of the remaining statements, so the answer `SELECT` becomes a conventional static pivot: `SELECT item_id, max(CASE WHEN seller = 'North Wing' THEN offer END) AS "North Wing", ... FROM Offers GROUP BY item_id`. Grouping by `item_id` collapses each item's rows into one output row; inside a group, the `CASE` for seller S passes `offer` through only for that seller's row, and `max` over zero matching rows is SQL `NULL` — precisely the "null where the seller does not carry the item" cell. `ORDER BY item_id` fixes the row order to the canonical one the judge compares against.

The discovery scan touches every row once and sorts at most 30 seller names; the substituted answer is one grouped pass over the table evaluating one `CASE` per seller per row.

**Complexity:** O(n·s) time over n seeded rows and s ≤ 30 sellers, O(p·s) space for p items.
