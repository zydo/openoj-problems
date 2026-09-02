# Solutions — Distance Per Rider

## Left-join the trips onto the riders and aggregate

Every rider must appear once, so `Riders` drives the query and trips are
brought in with a `LEFT JOIN`; a rider with no trip keeps their row with a
null on the trip side. Grouping by the rider and summing `miles` then
gives each rider's total, and the null sums produced by riders without
trips collapse to 0 through `COALESCE` — no separate pass over
trip-less riders is needed.

The ordering is a plain one-key sort: because every rider appears exactly
once in the grouped result, sorting by `rider_id` ascending is enough, and
no tie-breaking is ever required. The join fans out by trip count before
the group, so the engine touches each trip row once.

**Complexity:** `O((U + T) log(U + T))` time for `U` riders and `T` trips
(the join fans out every trip once, and grouping plus the final
`rider_id` sort dominate), `O(U + T)` space.
