# Solutions — Mirror Pairs

## Self join on swapped columns

A point qualifies exactly when its mirror image sits somewhere in the
table, so the query pairs every row of `Points` with every row whose
columns are swapped: a self join on the two mirror conditions
`a.x = b.y AND a.y = b.x`. Row `(6, 9)` matches row `(9, 6)` this way,
and a diagonal row like `(6, 6)` matches its own duplicate — which is
why Example 1's two identical `(6, 6)` rows report the point even
though a pair of two rows is present.

The `WHERE a.x <= a.y` clause keeps only the canonical half of each
mirrored pair: of `(6, 9)` and `(9, 6)` exactly one satisfies it, so no
point is reported twice from both directions. Because the table may
contain duplicate rows, one surviving point can still be produced by
several matching row pairs, and `SELECT DISTINCT` collapses those to
the unique points the statement asks for. The final `ORDER BY x, y`
matches the required ascending order on x then y. The self join scans
every ordered pair of rows — quadratic in the table size, with the
small distinct output materialized afterwards.

**Complexity:** `O(n²)` time (row-pair scan), `O(n²)` space.
