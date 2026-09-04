# Solutions — Back Within A Week

## Pair the shopper's rows, measure the date distance

An active shopper is defined existentially: some pair of that shopper's
purchases sits at most 7 days apart. The query therefore pairs rows of the
same shopper and keeps the shoppers for which any pair qualifies. A
self-join matches `Shoppers a` against `Shoppers b` on `shopper_id`, and
the extra join condition `b.rowid > a.rowid` restricts the pairing to two
distinct stored rows, smaller row identity first, so every unordered pair
is examined exactly once. Row identity — not value identity — is the right
tiebreak because the table may contain duplicate records: two
byte-identical rows are still two purchases, and `rowid` is what tells
them apart when no column does.

The `WHERE` clause measures each surviving pair's distance:
`ABS(julianday(a.bought_on) - julianday(b.bought_on)) <= 7`. `julianday`
maps an ISO date to its Julian day number, so the difference is the day
count between the two purchases; `ABS` makes the comparison symmetric in
which row landed in the table first, and `<=` honors both boundaries the
statement fixes — 7 days exactly qualifies, 8 does not, and two rows
sharing a date differ by 0 days and qualify. Because one shopper can own
many qualifying pairs (and duplicated rows always produce one), `SELECT
DISTINCT` collapses them to a single row, giving exactly one `shopper_id`
row per active shopper, in any order.

The engine groups the join on `shopper_id`, then within each shopper
compares every row against that shopper's later-identity rows — a
per-shopper cross product. With `n` total rows the scan is quadratic in
the worst case (one shopper owning the whole table pairs all `n` rows with
each other), linear when every shopper owns one row; only the output's
distinct ids are materialized.

**Complexity:** `O(n²)` time in the worst case (per-shopper pair scan),
`O(n)` space.
