# Solutions — Dish Appeal and Poor Ratings

## One grouped pass with two aggregates

Both requested statistics are per-`category` averages, so a single
`GROUP BY category` computes them together. Appeal averages the ratio
`rating / placement`; writing the division as `rating * 1.0 / placement` keeps
it in floating point, since an integer division would truncate every ratio to
zero before the average ever sees it.

The poor share is an average too — of the 0/1 indicator
`rating < 3`. SQLite treats a comparison as an integer, so `AVG(rating < 3)`
is already the fraction of poorly rated dishes; multiplying by 100 scales it
to a percentage. `ROUND(..., 2)` applies to both columns exactly as the
statement asks.

Because the table may carry duplicate rows and every row contributes
independently to both aggregates, no de-duplication is wanted — the plain
per-row aggregates are the definition.

**Complexity:** `O(n)` time over the `n` input rows, `O(g)` space for the `g`
distinct categories.
