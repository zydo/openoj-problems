# Solutions — The Above-Average Loggers

One grouped pass answers everything: collapse `work_logs` per `dev_id`,
and each group already carries its entry count and points mean — the two
inclusion rules then become a single `HAVING` clause on that same group.

## Group by developer, filter in HAVING

`GROUP BY dev_id` partitions the rows into one group per developer, and
the SELECT list reads each group's own aggregates: `COUNT(*)` is the
total number of entries the developer logged, and `AVG(points * 1.0)`
their average points per entry. The `* 1.0` matters before any rounding:
it promotes the arithmetic to floating point so the mean keeps its
fraction (`400 / 3 = 133.33...`) instead of collapsing to an integer
division result, and `ROUND(..., 2)` then applies the statement's
two-decimal contract on top.

Both inclusion rules test the group itself, so they live together in the
`HAVING` clause rather than anywhere else. `COUNT(*) >= 3` is the entry
floor verbatim. The spike rule — "at least one entry with points greater
than their own average" — needs no self-join or subquery: some entry
exceeds a value exactly when the largest entry does, so within the
already-grouped query `MAX(points) > AVG(points)` decides it. A
developer whose points are all equal to their average (the flat-history
case) has a maximum equal, not greater, and drops out; a developer with
any spike survives. Developers failing either test never form output
rows at all.

Finally `ORDER BY avg_points DESC, dev_id ASC` produces the required
ordering: averages first from high to low, ties broken toward the smaller
id. SQLite evaluates the query as one scan plus one sort over the groups,
holding one accumulator set per developer — linear in the table with
space for the distinct developers.

**Complexity:** `O(n log u)` time, `O(u)` extra space.
