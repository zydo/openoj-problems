# Solutions — Slow-Selling Plants

## Availability filter with a last-year sales subquery

Two independent conditions decide each plant's fate. The recency test
compares `listed_on` against one month before the assumed today,
`2019-05-23`; a plant listed later than that has been on sale for less
than a month and is excluded outright, regardless of sales.

For every plant that passes, the "fewer than 10 units" test sums the
quantities of its shipments dispatched within the last year — between
`2018-06-23` and `2019-06-23` inclusive. A correlated subquery computes
that sum per plant; `COALESCE` turns the no-shipments case into zero so
a plant that never shipped still competes on the same `< 10` threshold.
Shipments outside the window, whether old or in the future, fall
outside the bounds and never contribute.

Only rows passing both filters are returned. Each plant is examined
once and its shipments scanned once for the subquery.

**Complexity:** `O(P + S)` time and `O(1)` extra space, for `P` Plants
rows and `S` Shipments rows.
