# Solutions — Markdowns By Section

## LEFT JOIN items to markdowns, apply the percentage

The answer is one row per item, and an item must appear even when its
section has no row in `Markdowns` — that rules out an inner join, which
would silently drop exactly the rows the statement says keep their list
price. Starting from `CatalogItems` and `LEFT JOIN`ing `Markdowns ON
section` keeps every item and attaches the markdown where one exists;
for the others the markdown columns come back NULL, and
`COALESCE(percent_off, 0)` turns that into "no markdown at all". The
price itself is then a single expression: `list_price * (100 -
percent_off) / 100`, which reads directly as the statement's "list
price minus the markdown percent of the list price". The example walks
it end to end: Audio carries 25%, so items 10, 11, and 13 land on 225,
59.25, and 33.75; Bedding has no row in `Markdowns`, so its `COALESCE`
yields 0 and item 12 stays at 140; Outdoor carries an explicit 0%,
which changes nothing and leaves item 14 at 260.

An alternative shape computes the kept price with a `CASE WHEN
d.section IS NULL THEN p.list_price ELSE ... END`, or unions a matched
join against an anti-join of unmarked-down items; both reach the same
rows but carry more machinery for what `COALESCE` already expresses.
The join is the whole cost: for each item SQLite probes the markdowns
table by the join key, and with an index on `Markdowns(section)` that
is O(N + M) over N items and M markdowns — effectively linear. Without
any index the probe degrades to a scan per item, O(N * M); either way
grouping plays no part here because the output grain is the input
grain.

`ORDER BY item_id` presents the required table. The judge compares result
rows as an unordered multiset, so that ordering is presentation rather than
correctness, but it costs nothing beyond the sort itself.

**Complexity:** `O(N log N)` time with the output sort (`O(N)` without),
`O(N)` space for the result rows.
