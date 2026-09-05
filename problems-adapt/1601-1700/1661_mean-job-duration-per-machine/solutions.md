# Solutions — Mean Job Duration per Machine

One pass over a start/end self-join feeds a per-machine average: every
machine's `avg_seconds` is the `AVG` of its `'end'` minus `'start'`
moment differences, fixed to three decimals.

## Self-join start to end, average per machine

Every `(machine_id, job_id)` pair is guaranteed to carry exactly one
`'start'` row and one `'end'` row, so joining `Jobs` to itself on
`machine_id` and `job_id` — one side constrained to
`phase = 'start'`, the other to `'end'` — reassembles each
job as a single row holding both of its moments.
`e.moment - s.moment` is then that job's duration, and
`AVG(...)` under `GROUP BY machine_id` reduces each machine's rows to
its mean job duration in the same aggregate pass.

`ROUND(..., 3)` fixes the result to three decimal places. Measured on
the judge's sqlite, `ROUND` operates on the exact binary value of its
argument and rounds a tie away from zero, so an average of exactly
`0.0625` reports `0.063` while `1.2385` — whose nearest double sits
just below the halfway point — reports `1.238`. The rounded value
travels as a float: an average of exactly `2` seconds is `2.0` on the
wire. Row order needs no pinning — the judge compares result multisets,
which is precisely the statement's "in any order".

**Complexity:** `O(n log n)` time (grouping), `O(n)` space.
