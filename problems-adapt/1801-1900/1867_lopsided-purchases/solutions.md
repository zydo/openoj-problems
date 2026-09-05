# Solutions — Lopsided Purchases

"Strictly greater than every purchase's average" cannot be folded into
one grand row-average: each purchase's average weights its sum by its
own item count, so the binding threshold is the largest of the
per-purchase fractions `sum/count`, not `grand_sum/grand_rows`. The
exact, division-free way to compare against all of them at once is to
require the smallest value of `max_units * item_count_j - total_units_j`
across every purchase `j` to stay positive.

## Cross-join per-purchase stats, keep the min margin positive

Aggregate twice: once per candidate purchase for its `MAX(units)`, and
once per purchase (as `a`) for its `SUM(units)` and `COUNT(*)`. The
cross join pairs every candidate with every average, and grouping by the
candidate collapses those pairings into one
`MIN(max_units * item_count - total_units)` — the tightest integer
margin. A purchase is lopsided exactly when that minimum is strictly
positive, which is the same as its max beating every average under exact
fraction arithmetic; repeating-decimal averages and near-ties never get
a chance to mislead, because no division is ever taken.

Two aggregation passes plus a purchases-times-purchases comparison.

**Complexity:** `O(R + P²)` time (`R` rows, `P` purchases), `O(P)` space.
