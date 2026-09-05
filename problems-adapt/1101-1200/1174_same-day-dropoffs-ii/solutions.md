# Solutions — Same-Day Dropoffs II

## Filter to first dropoffs, then aggregate the share

The percentage now ranges over _diners_, not rows — each diner
contributes exactly one order to the numerator and the denominator,
whatever the table's size. So the query is two stages: reduce the table
to one row per diner, then run the same boolean-sum percentage as a
flat scan.

The reduction is `MIN(placed_on)` grouped by `diner_id`. Since a
diner's first-order date is guaranteed unique, joining that grouped
result back to `Dropoffs` on `(diner_id, placed_on)` selects exactly
the first-dropoff row of every diner — no more, no fewer. On those
survivors, `SUM(placed_on = requested_on)` counts same-day first
dropoffs; scaling by 100.0 before dividing keeps decimal precision, and
`ROUND(..., 2)` finishes it.

**Complexity:** `O(N log N)` time for the grouped minimum plus join over
`N` Dropoffs rows (SQLite builds a temporary b-tree per grouping),
`O(D)` space for the per-diner minima with `D` diners.
