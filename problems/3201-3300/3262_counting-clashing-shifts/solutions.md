# Solutions — Counting Clashing Shifts

## Self-join same-worker shifts, count each clashing pair once

A clash is a property of two rows, so the query pairs rows: `ShiftLog`
joins itself on `worker_id`, and the `WHERE` clause keeps exactly the
clashing pairs — `s1.clock_in < s2.clock_in` orders the two members of
each pair, and `s1.clock_out > s2.clock_in` is the clash test the
statement states: one shift's `clock_out` strictly later than the other
shift's `clock_in`. The strictness settles both boundaries — two shifts
that merely touch, one ending exactly when the next starts, do not
clash, and no pair is compared against itself because equal start times
would fail the ordering term.

The unique key `(worker_id, clock_in)` is what makes one pass enough:
two shifts of one worker can never share a start time, so the ordering
term splits every unordered pair into exactly one directed match, and
`COUNT(*)` totals genuine pairs rather than each pair twice. `GROUP BY
s1.worker_id` collapses each worker's matches into one row, and a worker
with no matching pair produces no group at all — which is exactly the
required filtering, since only workers with at least one clashing pair
are reported.

For each worker the join holds that worker's `k` shifts against each
other — `k²` candidate pairs worst case, `Σ k² ≤ N²` over `N` total
shifts — and grouping keeps one row per reported worker.

**Complexity:** `O(N²)` time worst case, `O(E)` space beyond the input
for the `E` reported workers.
