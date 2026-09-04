# Solutions — Parking Bills and Busiest Garage

## Seconds per stay, then three grouped views joined per vehicle

Everything the answer needs reduces to one derived column: each stay's
parked seconds. `stay` measures it once with
`strftime('%s', left_at) - strftime('%s', entered_at)` so no later step has
to re-parse timestamps. On top of that single CTE, `totals` groups by vehicle to
sum the paid amounts and — dividing by the same vehicle's summed seconds scaled
`* 3600.0` (float, not integer, so fractional hours survive) — rounds the
quotient with `ROUND(..., 2)`, and `per_lot` groups by vehicle and garage to sum
durations.

Picking `top_garage` is a top-1-per-group problem: `ranked` orders every
vehicle's garages by summed duration descending and `garage_id` ascending, so the
smallest garage id owns row number 1 exactly on ties, as required; keeping
`rn = 1` rows via the join closes the result. The whole query is then one
join of two aggregations of the same base scan followed by an
`ORDER BY t.vehicle_id`.

**Complexity:** `O(n log n)` time, `O(n)` space — `n` stays are
scanned once per aggregate window after sorting, with linear-size
intermediates.
