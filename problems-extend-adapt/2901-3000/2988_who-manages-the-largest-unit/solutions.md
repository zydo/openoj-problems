# Solutions — Who Manages the Largest Unit

## Count each unit, then keep the ties at the top

A unit's size is never stored — it is the number of `Staff` rows sharing
its `unit_id` — so the query first materializes one count per unit: a CTE
applies `GROUP BY unit_id` with `COUNT(*)` and produces the pairs
`unit_id, staff_count`. The largest size is a single scalar over that
small table, `(SELECT MAX(staff_count) FROM counts)`, and the outer query
keeps exactly the counts equal to it. That equality — not a `LIMIT 1` —
is what lets ties survive: every unit sharing the maximum stays in play,
which the statement explicitly allows.

The kept rows still have to yield a manager's name, so the outer query
joins `counts` back to `Staff` on `unit_id` and filters
`role = 'Manager'`. Each surviving unit contributes exactly its manager
row, and `ORDER BY unit_id` emits those rows in the order the statement
fixes. The final `SELECT` lists `manager_name` and then `unit_id`,
matching the required column order.

Grouping the `n` staff rows into `u` counts is one aggregation pass, the
scalar maximum scans the `u` counts once, and the join probes the staff
once more; the sort at the end touches only the tied output rows.
**Complexity:** `O(n log n)` time, `O(n)` space.
