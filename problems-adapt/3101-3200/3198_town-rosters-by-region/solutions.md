# Solutions — Town Rosters By Region

## One grouped string per region with an order-carrying concatenation

The whole problem is a single grouping: rows share a `region`, and the
group's towns must come back as one `'town, town, town'` string. SQLite's
`GROUP_CONCAT(town, ', ')` does exactly this once the second argument
pins the separator to a comma plus a space — the default is a bare comma,
which would not match the example. The `ORDER BY town` inside the
aggregate is what fixes the join order: towns are appended lowest-first,
realizing "ordered by ... town in ascending order" independently of the
order rows happen to sit in the table.

Grouping by `region` collapses each region into one row, and since only one
output row per region can exist, ordering those rows by `region` ascending
satisfies both required levels of order at once. Names compare under
SQLite's default binary collation — plain character-code order — which is
precisely the ordinary ascending comparison the statement asks for on
diacritic-free names like these; that is why shorter prefixes (`Spring`
before `Springfield`) and hyphenated names sort exactly as expected.

**Complexity:** `O(R log R)` time for sorting `R` table rows (the
aggregation then walks them once) and `O(R)` space for the output strings.
