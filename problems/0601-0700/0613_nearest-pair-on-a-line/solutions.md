# Solutions — Nearest Pair on a Line

## Self-join with the larger coordinate first

The self-join pairs every `AxisPoints` row with rows having a smaller
`coordinate`. This emits each unordered pair once and makes
`left_point.coordinate - right_point.coordinate` positive, so an absolute
value expression is unnecessary.

`MIN` over those positive differences is the requested `nearest_distance`.
Since coordinates are unique and every dataset has at least two points, the
join has at least one valid pair.

The join tests all unordered point pairs while the aggregate stores one
running value.

**Complexity:** `O(n^2)` time, `O(1)` space.
