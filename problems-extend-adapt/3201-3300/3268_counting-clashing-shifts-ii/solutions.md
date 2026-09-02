# Solutions — Counting Clashing Shifts II

## Pair self-join for the total, event sweep for the peak

The two requested numbers have different shapes, so the query computes them
separately and joins the results per worker. `total_clash_duration` is a
property of shift pairs: `ShiftLog` joins itself on `worker_id`, and
the join conditions keep exactly the clashing pairs — `e1.clock_in <
e2.clock_in` orders the two members of each unordered pair (the unique key
on `(worker_id, clock_in)` makes start times a total order within a
worker), `DATE(e1.clock_in) = DATE(e2.clock_in)` restricts the pair to
one date as the statement requires, and `e1.clock_out > e2.clock_in` is the
clash test itself. The strictness settles the boundary: shifts that merely
touch, one ending exactly when the next starts, contribute nothing. The
intersection of a kept pair runs from the later start to the earlier end,
and its length in minutes is the difference of epoch seconds divided by 60;
`SUM` over each worker's pairs gives the total.

`max_clashing_shifts` is a running-count sweep. A `UNION ALL` turns every
shift into two events — its start carrying `+1` and its end carrying `-1`,
both stamped with the start's date so overnight shifts stay in their own
date group — and `SUM(delta) OVER (PARTITION BY worker_id, day ORDER BY
epoch_seconds, delta)` accumulates the number of shifts in progress.
Ordering by `delta` after the timestamp applies an end before a start at
the same instant, which is what the half-open clash rule demands: a shift
ending at 17:00:00 leaves the count before one starting at 17:00:00 enters
it, so touching shifts never inflate the peak. `MAX` over the running sums
is the answer; a lone worker's single start event yields 1.

A worker with no clashing pairs produces no rows on the join side, so
the totals are attached with a `LEFT JOIN` from the swept workers and
wrapped in `COALESCE(..., 0)`, and every worker appears once. The join
holds each worker's `k` same-date shifts against each other — `Σ k² ≤ N²`
candidate pairs over `N` total shifts — while the sweep sorts `2N` events;
both are bounded by the quadratic pairing.

**Complexity:** `O(N²)` time worst case from the pair join, `O(N log N)`
for the event sort, `O(N)` space beyond the input.
