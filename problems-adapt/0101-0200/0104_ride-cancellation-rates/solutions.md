# Solutions — Ride Cancellation Rates

## Two Joins and a 0/1 Average

Both counters in the rate must ignore rides touched by a banned member, so
the query joins `Members` into `Rides` twice — through `rider_id` (alias
`uc`) and through `driver_id` (alias `ud`) — with `banned = 'No'` written
into each join's condition. A ride whose rider or driver is banned simply
loses its row to the inner joins, which removes it from numerator and
denominator in one stroke — precisely the definition. The `WHERE` clause
pins `ride_date` to the three target days before any grouping happens, so
nothing outside the window can surface later.

One row per surviving ride means one `GROUP BY ride_date` row per day that
had traffic. The aggregation avoids maintaining two counts: the `CASE`
expression hands out 1 for anything not `completed` and 0 otherwise, and
`AVG` over those flags *is* cancelled-over-total, since both
`cancelled_by_client` and `cancelled_by_driver` fall on the 1 side.
`ROUND(..., 2)` finishes the output; the query never needs a `HAVING`,
because a group exists only where rows existed.

Each ride row is touched a constant number of times — two joins, one
aggregation — so with hash joins and hash grouping the whole query is
linear in the table sizes (sort-based plans add a log factor). Working
storage is the joined rows plus the per-day groups. SQLite's `ROUND`
returns a number, so `0.00` and `0` judge as equal.

**Complexity:** `O(R + M)` time and space for `R` rides and `M` members.
