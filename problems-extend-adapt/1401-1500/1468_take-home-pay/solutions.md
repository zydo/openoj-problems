# Solutions — Take-Home Pay

## Per-firm maximum drives the rate, applied with ROUND

The tax rate belongs to the firm, not the worker, so the first step is
a `GROUP BY firm_id` subquery producing each firm's maximum pay.
Joining it back to the raw rows attaches that maximum to every worker
of the firm, and a `CASE` maps it to the rate: below 1000 the `0.0` arm
leaves pays untouched, the `[1000, 10000]` inclusive band takes `0.24`,
and anything above takes `0.49`.

The take-home pay is `ROUND(pay * (1 - rate))` — SQLite's `ROUND`
rounds halves away from zero, which matches the statement's rounding
with `4924.8 → 4925` (and lifts the exact half `637.5` up to `638` as
well). Everything stays in one pass: the group scan is linear, the join
is on the firm key, and the output keeps the original columns with the
pay replaced.

Row order is free ("in any order"), which the multiset comparison
accepts.

**Complexity:** `O(n)` for the grouping plus the join, `O(n)` space.
