# Solutions — Out-Earning The Boss

## Self-join Staff on reportsTo

The manager named by a row lives in the same table: `reportsTo` holds the
`staffId` of that manager, so pairing each staff member with their manager is
a join of `Staff` with itself. `Staff e1 JOIN Staff e2 ON e1.reportsTo =
e2.staffId` reads the table as two copies — `e1` walking the staff members,
`e2` supplying the matched manager's row — and `WHERE e1.salary > e2.salary`
keeps exactly the pairs where the member out-earns the manager. The
projection is the answer's one column, `e1.name AS OutEarner`.

Rows that must not qualify disappear on their own. A member whose
`reportsTo` is null — a manager-less executive like the example's Ravi —
carries a join key that matches no `e2.staffId`, and an inner join never
emits them; a `reportsTo` naming an id that is not in the table meets the
same fate, so no existence check is needed. Strictness does the remaining
filtering: a member who exactly ties their manager fails `>`, and because
`staffId` is the primary key each member matches at most one manager row, so
the output holds one row per qualifying member and no duplicates.

The join builds one lookup over the `E` rows and probes it once per member
— a hash join, or an index on `staffId`, makes each probe constant time — so
the whole query is a linear pass that materializes only the join structure
and its output.

**Complexity:** `O(E)` time, `O(E)` space.
