# Solutions — Buyer Scorecard

## Aggregate per customer and break category ties by recency

Every output column is a per-customer aggregate, so the whole answer is
one `GROUP BY t.buyer_id` over the joined rows: joining `purchases`
to `catalog` on `item_id` attaches each purchase's category, after
which `SUM(t.paid)`, `COUNT(*)`, `COUNT(DISTINCT p.category)`, and
`AVG(t.paid)` produce the spend total, transaction count, unique
category count, and average directly. The two derived columns need care:
the loyalty score divides the total by 100, so the divisor is written as
the real literal `100.0` — with integral amounts stored under sqlite's
NUMERIC affinity `SUM` yields an integer, and an integer `/ integer`
would truncate instead of divide. `ROUND(..., 2)` wraps the three
columns the contract names.

The top category cannot come from a plain aggregate because it mixes two
keys: first by purchase count, then — only among categories tied on
count — by recency of the customer's latest purchase in that category.
A correlated subquery answers it per group: for the outer row's
customer it groups that customer's joined rows by category,
`ORDER BY COUNT(*) DESC, MAX(t2.bought_on) DESC` puts the most
frequent category first and breaks count ties toward the latest date,
and `LIMIT 1` keeps exactly that winner. Because the tie-break key is
consulted only after the counts are compared, a category bought once but
yesterday beats one bought once long ago, while a twice-bought category
always beats both.

One pass over the `T` joined rows builds every customer group, and each
group scans its own rows once more inside the correlated subquery, so
the cost is quadratic in the worst-case group size but linear when no
customer dominates; `C` customers leave with `C` result rows.

**Complexity:** `O(T * T/C)` time, `O(C)` space.
