# Solutions — Climbers Who Leveled Up

## Group by pair, then join back the two endpoint rows

"First" and "latest" are keyed by `session_date`, not by row order, so the
query starts by collapsing each `(climber_id, wall)` pair to its two
endpoint dates: a `GROUP BY` subquery emits `MIN(session_date)`,
`MAX(session_date)`, and `COUNT(DISTINCT session_date)` per pair. The dates are
`YYYY-MM-DD` strings, so their ordinary string order is the chronological
order — `MIN` and `MAX` on the text column pick the first and last visit
directly, and because `(climber_id, wall, session_date)` is the primary
key exactly one grade row sits on each endpoint date.

The outer query then joins the base table twice — once on the first date
(`f`), once on the last date (`l`) — to fetch the two grades the result
must show. Filtering happens in the `WHERE` clause: `dates >= 2` enforces
"sessions on at least two different dates", and `l.grade > f.grade` enforces
"latest strictly higher than first". An equal or dropping pair drops out,
and so does any pair with a single visit, where `first_date` and
`last_date` would coincide. The final `ORDER BY climber_id, wall`
presents the rows in the required ascending order.

**Complexity:** `O(S log S)` time for `S` logged rows (grouping plus the
presentation sort), `O(P)` space for the `P` distinct climber-wall
pairs.
