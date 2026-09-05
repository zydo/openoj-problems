# Solutions — Towns With Pricier Homes

## Per-town average against a scalar market average

The query groups `Homes` by `town` and filters the groups with a
`HAVING AVG(asking_price) > (SELECT AVG(asking_price) FROM Homes)`. The
subquery is uncorrelated, so it runs once: it reduces the whole table to
the single market-wide average, and each group's average is then compared
against that one scalar. `HAVING` (not `WHERE`) is the right filter
because the condition is about an aggregate of the group, not about an
individual row.

A town's rows all share one output value, so grouping collapses each town
to exactly one candidate row; the ones whose average strictly exceeds the
market figure survive, ties are dropped by the strict `>`, and
`ORDER BY town` emits the winners in the ascending order the statement
fixes. An empty table leaves no groups, hence no rows.

The inner scan and the grouping scan each touch every row once; with `N`
homes and `T` towns that is two linear passes plus an `O(T log T)` sort
of the group keys.

**Complexity:** `O(N + T log T)` time, `O(T)` space.
