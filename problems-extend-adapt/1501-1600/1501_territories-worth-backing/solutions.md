# Solutions — Territories Worth Backing

## Count every call once per participating territory, then compare territory averages to the global one

A single call can belong to two territories at once — the dialer's and
the receiver's — so the row the aggregation should really reason about
is not a `Dials` row but a (territory, minutes) pair, one per side of
the call. The CTE `dial_sides` builds exactly that. Each half of the
`UNION ALL` joins `Dials` to `Subscribers` — first on `dialer_id`,
then on `receiver_id` — and resolves a participant's territory by
matching the first three characters of their `phone` against
`Territories.dialing`. Using `UNION ALL` rather than `UNION` keeps both
halves even when they name the same territory: a call between two
subscribers of one territory contributes that territory's average
twice, which is exactly what the screening rule asks for.

`dial_sides` then feeds two aggregations. The outer query groups by
`territory` and takes `AVG(minutes)` per group, while the `HAVING`
clause compares each group average against the ungrouped
`(SELECT AVG(minutes) FROM dial_sides)` — deliberately computed over
the doubled rows rather than the raw `Dials` table, so a call between
two territories counts once toward each territory's average and twice
toward the global one. SQLite evaluates that scalar subquery once,
since nothing in it correlates with the outer grouping.

The CTE materializes `2C` rows for `C` calls, each aggregate scans it
once, and at most one result row survives per distinct territory.

**Complexity:** `O(C)` time, `O(C)` space.
