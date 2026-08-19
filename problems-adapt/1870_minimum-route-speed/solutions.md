# Solutions — Minimum Route Speed

## Binary search on speed with exact fractions

Fix an integer speed `s` and the finishing time is already decided: every
segment except the last has a successor that may only be entered on a whole
hour, so it consumes `ceil(dist[i] / s)` hours, waiting included; the final
segment ends the route outright and costs exactly `dist[-1] / s`. Raising
`s` cannot raise any term, so "finishes inside the budget" is an
upward-closed property of `s` — once a speed is fast enough, every faster
one is too. That monotonicity is an invitation to bisect: search the
smallest feasible speed over `[1, S]`, with `S = 10^7` the guaranteed
answer ceiling, and answer `-1` when even `S` misses the deadline.

The feasibility test is where the subtlety lives. `hour` is parsed through
`Fraction(str(hour))`, which reads the decimal text rather than inheriting
the binary floating-point error of the literal, and from there every
comparison is an exact rational comparison: `ceil(Fraction(d, speed))` for
the waiting segments, `Fraction(dist[-1], speed)` for the last, all against
the rational budget. Skimp on this and a boundary test — finishing at
exactly the deadline — can compare the wrong way and shift the bisected
answer by one.

The search itself is the ordinary shrinking interval: `on_time(mid)` pulls
the upper edge down, else the lower edge climbs, and the interval closes on
the minimal feasible speed. One feasibility test is one pass over the
array.

**Complexity:** `O(n log S)` time, `O(1)` space.
