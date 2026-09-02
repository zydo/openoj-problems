# Solutions — Bestsellers Two Years Running

## Count sales per item and year, then join adjacent-year counts

The whole question lives at the (item, year) grain, so the query first
collapses the table to that grain: `strftime('%Y', sale_date)` reads the
calendar year back out of each date — SQLite stores these dates as ISO-8601
text, so the pattern simply lifts the leading four characters — and one
`GROUP BY item_id, yr` turns every item's sales into a per-year count, cast
to an integer so year arithmetic is numeric. The result, aliased `yearly`,
holds exactly one row per item per year it sold in.

Qualifying is now a two-row property: some pair of `yearly` rows for the
same item whose years differ by exactly one, both tallies at least three. A
self-join states that directly — `yearly a, yearly b` with
`a.item_id = b.item_id AND b.yr = a.yr + 1 AND a.tally >= 3 AND
b.tally >= 3`. The explicit `yr + 1` test matters: a window function's LEAD
would hand back the next year _present in the table_, silently comparing
2019 against 2021 when 2020 had no sales at all, while this join finds
nothing to pair with and correctly rejects the gap.

`DISTINCT` carries the report-each-item-once contract: an item sold heavily
across three straight years produces two qualifying pairs, (y, y+1) and
(y+1, y+2), and both join rows name the same `item_id`, which collapses to
one output row. No `ORDER BY` is needed — the statement accepts the rows in
any order.

Aggregating sweeps the n sales once into g item-year groups; the self-join
then pairs those groups, quadratic in g alone — tiny next to n, since g is
bounded by items times years actually present — and the distinct pass keeps
one row per qualifying item.

**Complexity:** `O(n + g^2)` time for n sales and g item-year groups, `O(g)`
space.
