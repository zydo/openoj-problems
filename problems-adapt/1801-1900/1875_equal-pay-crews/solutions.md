# Solutions — Equal-Pay Crews

Two facts must be settled before any row can be output: which wages
occur at least twice, and the dense rank of those wages among
themselves. One query over a wage-level derived table answers both at
once.

## Wage-level ranking join

Aggregate `Crew` by `wage` and keep only the groups with
`COUNT(*) >= 2`; within that filtered set, number each wage with
`DENSE_RANK() OVER (ORDER BY wage ASC)` to get its `squad_id`. Joining
this small derived table back to `Crew` on `wage` reattaches the member
columns, and members whose wage never reappears fall out of the join
naturally.

Because the rank is computed after the filter, a unique wage can never
consume a rank number — exactly the rule that non-squad wages stay out
of the ranking. The final `ORDER BY squad_id, crew_id` produces the
required output order; the comparison is order-sensitive because the
statement pins one.

**Complexity:** `O(r log r)` time for `r` rows, `O(r)` additional space.
