# Solutions — Workloads Above The Crew Average

## Join assignments to crews, then keep rows above their crew's average

No assignment decides its own fate — the bar it must clear belongs to
its staff member's whole crew. The query joins `Assignments` to `Staff`
on `staff_id`, so every assignment carries its member's crew and name,
and then filters with a correlated scalar subquery: the same join,
restricted to one crew by `e2.crew = e.crew`, folded by `AVG(p2.load)`.
Because the outer row's own assignment always survives that inner
join, the subquery is never empty, and the average runs over exactly
the crew's assigned staff — a member assigned to no job has no load
row and feeds nothing. The strict `p.load > (...)` keeps only
assignments strictly above the bar, so a load sitting exactly on its
crew's average fails the test. `ORDER BY p.staff_id ASC, p.job_id ASC`
dresses the rows in the demanded order.

The comparison rides SQLite doubles: `AVG` returns a REAL even over
integer loads. At this schema's magnitudes that is harmless — integer
sums stay exact well below 2^53 and the division is correctly rounded,
so an average landing on an integer or half-integer (any dyadic
rational) is represented bit-exactly and equality at the boundary
holds exactly, while a non-dyadic average such as 34/3 can never
collide with an integer load at all. Either way `>` decides
identically to exact rational arithmetic on these integer columns.

The correlated subquery re-aggregates the join once per assignment,
quadratic in the number of assigned rows; beyond that scan only the
per-crew aggregates and the result rows occupy space.

**Complexity:** `O(n^2)` time, `O(n)` space.
