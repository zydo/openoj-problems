# Solutions — Uptime In Whole Days

## Walk each host's event stream and sum the start-to-next-event spans

A run is delimited by consecutive events of one host in timestamp
order, so `LEAD(...) OVER (PARTITION BY host_id ORDER BY event_time)` —
two of them, for the neighbor's time and state — turns the log into
per-row pairs. A row contributes only when it is a `start` whose
immediate successor is a `stop`; that single predicate drops dangling
events and any start an intervening record interrupts. The span length
is computed in whole seconds with `STRFTIME('%s', next) -
STRFTIME('%s', now)`, keeping every duration exact regardless of how
far apart the timestamps fall.

Aggregation is then one line: `SUM(secs) / 86400`. The division runs on
a 64-bit integer total, and SQLite's integer division truncates toward
zero — which for positive sums is precisely the demanded rounding down
to full days, so ~51.5 hours collapses to `2` and a sub-day log to `0`.

**Complexity:** `O(N log N)` time, `O(N)` space — `N` log rows sorted
once per partition by the window ordering; the fold is linear.
