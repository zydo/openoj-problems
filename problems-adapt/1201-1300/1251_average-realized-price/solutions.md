# Solutions — Average Realized Price

## Join each sale to its pricing window, then weigh and divide

A sale belongs to exactly one pricing window — the one covering its
`sold_on` — so the join condition carries both the item match and the date
range `BETWEEN from_date AND to_date`. Because an item's windows never
overlap, each `Sales` row meets at most one `Tariffs` row and no sale is
double counted.

The realized price is the revenue-weighted average:
`SUM(quantity * unit_price) / SUM(quantity)` over each item's joined rows,
`ROUND(..., 2)` as the statement asks. The `* 1.0` keeps the division in
real arithmetic rather than integer division.

Items with no sales (or none inside any window) keep their `Tariffs` row
through the left join, but both sums come out null — `NULLIF` guards the
zero-denominator case and `COALESCE` maps the null result to the `0` the
statement assigns to unsold items.

**Complexity:** `O(p + u)` rows joined and aggregated for `p` pricing
windows and `u` sales; `O(g)` space for the `g` item groups.
