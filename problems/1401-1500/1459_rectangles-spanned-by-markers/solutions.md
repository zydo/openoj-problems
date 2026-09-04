# Solutions — Rectangles Spanned By Markers

## Self join, absolute differences, three-key sort

Each candidate rectangle is an unordered pair of markers, and the
output wants every pair once with the smaller id as `first_id` —
exactly what a self join with `a.id < b.id` produces, with no
deduplication pass needed.

The rectangle whose opposite corners are the two markers has area
equal to the product of the coordinate differences' absolute values:
`ABS(a.x - b.x) * ABS(a.y - b.y)`. A zero-area rectangle is a
degenerate pair whose markers share an x or a y; filtering on the
product being nonzero drops both cases in one predicate.

The final `ORDER BY area DESC, first_id ASC, second_id ASC` matches
the three-key tie contract. Nothing aggregates, so the result's
cardinality is simply the number of surviving pairs, and the quadratic
self join is well within bounds for the seeded tables.

**Complexity:** `O(M²)` time for pair generation plus a sort of the
surviving rows, `O(M²)` space.
