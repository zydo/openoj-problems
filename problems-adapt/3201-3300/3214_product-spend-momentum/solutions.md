# Solutions — Product Spend Momentum

## Lag each product's yearly total back one transaction year

The answer is two reductions of the same table. The first collapses
sales to years: `strftime('%Y', logged_at)` pulls the year
out of the datetime — time-of-day never enters it — a `CAST` to integer
makes it sort numerically, and `GROUP BY item_id, year` with
`SUM(amount)` leaves exactly one row per product-year with transactions.
The second reduction runs down that yearly table: `LAG(total_spend) OVER
(PARTITION BY item_id ORDER BY year)` carries each row the total of
the partition's previous row, and because the partition is one product
and the order is its ascending years, "previous" means the closest
earlier year that has transactions. Years with no transactions have no
row, so they are skipped and the comparison spans the gap; a product's
first year gets null, and the partition boundary keeps one product's
history from ever contaminating another's.

The rate line is arithmetic plus two deliberate NULL flows. With no
earlier year, `LAG` returns null and `(curr - prev) * 100.0 / prev`
propagates null into `ROUND`, which hands it through untouched. With a
zero previous-year total, SQLite evaluates `x / 0` to null rather than
an error, so those rows report null too — both boundaries fall out of
the expression instead of needing branches. The `* 100.0` before the
division forces real arithmetic (SQLite's integer `/` truncates), and
`ROUND(..., 2)` rounds exact binary ties away from zero: measured on this
judge's engine, `3.125` rounds to `3.13`, `-3.125` to `-3.13`, while a
amount like `1.005` — whose double is really `1.00499…` — rounds to `1.0`.
An equivalent shape reaches the same rows with a correlated subquery,
`(SELECT total_spend FROM yearly y2 WHERE y2.item_id = y1.item_id
AND y2.year = (SELECT MAX(year) FROM yearly y3 WHERE y3.item_id =
y1.item_id AND y3.year < y1.year))`, which states the skip-the-gap
rule explicitly; the window form says it in one clause.

The aggregation reads the `N` transactions once and materializes `G`
product-year rows; the window function sorts each product's years, and
nothing beyond the yearly table survives.

**Complexity:** `O(N + G log G)` time, `O(G)` space.
