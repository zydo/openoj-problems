# Solutions — Hiker Mileage

## Left join, group by hiker, and sort

Every hiker needs a row in the answer, whether or not they ever walked,
so the query begins at `Hikers` and `LEFT JOIN`s `Treks` on the hiker
id. The outer join keeps the whole roster: a hiker with no treks
survives as a single row whose trek columns are null.

Grouping by the hiker (its id, and name alongside) collapses each
hiker's rows into one, and `SUM(t.distance)` totals that hiker's trek
kilometers. That sum is null for a hiker without treks, and the
statement wants 0 reported there, so `COALESCE(SUM(t.distance), 0)`
yields the right `total_distance` for walkers and non-walkers alike.

The requested ordering is a two-key sort: `ORDER BY total_distance
DESC, name ASC` puts the highest totals first and settles equal totals
by name in ascending (alphabetical) order — matching the example.

**Complexity:** `O(H + T)` time to scan and join the two tables, plus
the cost of sorting the `H` result rows; `O(H)` space for the grouping.
