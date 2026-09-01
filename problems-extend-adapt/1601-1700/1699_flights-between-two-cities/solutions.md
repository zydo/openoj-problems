# Solutions — Flights Between Two Cities

One grouping answers the question: collapse `Flights` on the unordered
city pair — normalized so the smaller id always lands in `city1` — and
each group's `flight_count` and `total_minutes` are the plain `COUNT(*)`
and `SUM(minutes)` over its rows.

## Normalize each row to least/greatest, then group

Each flight is stored from its origin's side: the same pair may appear
as `origin = 7, destination = 3` in one row and the reverse in another,
so grouping on the raw columns would split it in two. The query
canonicalizes every row first: `CASE WHEN origin < destination THEN
origin ELSE destination END` yields the least of the two ids and the
mirrored `CASE` its greatest — SQLite carries no scalar `LEAST`/
`GREATEST`, so the two `CASE` expressions spell the normalization out.
Because `origin != destination` holds on every row, the two expressions
name the pair unambiguously, with `city1 < city2` by construction.

`GROUP BY` on both expressions then folds every row of a pair into one
group — whichever direction each flight flew — so `COUNT(*)` counts
every flight and `SUM(minutes)` totals them all. The table has no
primary key and may contain duplicates, and duplicates count
individually: Example 1's (3, 4) pair holds three rows, two of them
identical 110s, and reports `flight_count` 3 with `total_minutes` 285.
The statement allows the result in any order, so the query carries no
`ORDER BY` — the judge compares result multisets, and row order cannot
fail a case.

**Complexity:** `O(n log n)` time (grouping), `O(p)` space.
