# Solutions — Nurseries With Lopsided Stock

## Window ranking of the price extremes per nursery

Each nursery needs two rows out of its own stock slice — the one with the
highest price and the one with the lowest price — plus a plant count, so
the whole extraction is one windowed pass over `stock`:
`ROW_NUMBER()` partitioned by `nursery_id` and ordered by price (descending
for the expensive end, ascending for the cheap end) labels both extremes,
and `COUNT(*) OVER (PARTITION BY nursery_id)` carries the nursery's plant
count alongside. The `stock_id` tie-break in each `ORDER BY` only matters
if two plants in a nursery shared a price; it keeps the pick deterministic
without changing any well-defined case.

Joining both extreme rows back to `nurseries` assembles the output row: the
nursery's details, the two plant names, and the skew
`cheapest_quantity / priciest_quantity`, computed as
`c.quantity * 1.0 / e.quantity` so the division is real-valued rather than
integer, then rounded by `ROUND(..., 2)`. The `WHERE` clause applies the
contract's two filters — strict `e.quantity < c.quantity` for the lopsided
condition itself (equal stock does not qualify) and `product_count >= 3`
for the minimum assortment — and the final `ORDER BY` presents rows by
descending skew with the nursery-name tie-break; the judge compares rows
as an unordered multiset, so that ordering is fidelity to the statement
rather than a correctness requirement.

**Complexity:** `O(s log s)` time for `s` stock rows (the window sorts),
`O(s)` space.
