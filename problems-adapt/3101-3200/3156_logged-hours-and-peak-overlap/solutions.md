# Solutions — Logged Hours and Peak Overlap

## Sweep the interval endpoints with window aggregates

Two per-worker aggregates over raw rows, each computed by one ordered window
pass. The busy time is the length of the union of a stint list: when stints are
processed in start order, only each stint's intersection with work already
accounted for must be dropped. `ordered` reads, above every row, the running
`MAX(ended_at)` of all earlier stints of the same worker — `ROWS BETWEEN
UNBOUNDED PRECEDING AND 1 PRECEDING` — and `busy` keeps from
`ended_at - started_at` the part that lies beyond that frontier
(`prev_end`); on the first stint of a worker `prev_end` is null. Because the
frontier only grows as rows stream past, a longer earlier stint correctly masks
a later one that starts inside it, so nested and chained overlaps are handled
in a single scan without self-joins.

The concurrency peak falls out of the classic endpoint sweep: `events` turns
every stint into a +1 step at its start and a -1 step at its end,
`sweep` accumulates those steps per worker with a `SUM(...) OVER` window in
moment order — the running total is exactly how many stints are open at that
instant — and `peak` takes the maximum of that level per worker (the floor
of 1 is implicit: every worker's first event is its own +1). Finally the two
aggregates join on `worker_id`, seconds are floored to hours by integer
division (`SUM(seg_secs) / 3600`, both sides integers), and the result orders
by `worker_id`.

**Complexity:** `O(n log n)` time, `O(n)` space — the window functions sort
the `n` rows twice (by start time, by moment), everything else is linear.
