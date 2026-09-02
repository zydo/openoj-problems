# Solutions — Stacking The Two Campus Rosters

## Stack the two tables with UNION ALL, then order each block

The two rosters are already seeded as the tables `CampusEast` and
`CampusWest` with identical columns, so the stack is one compound
select: `SELECT ... FROM CampusEast UNION ALL SELECT ... FROM
CampusWest` appends every CampusWest row below the CampusEast rows
without comparing or dropping anything — `UNION ALL`, not `UNION`,
because stacking keeps duplicate rows, and the two campuses may even
hold students that agree on all three columns. Wrapping the compound
select in a derived table lets the outer query project only the three
data columns, so the tag column used for ordering never appears in the
result.

A table guarantees no order of its own, so the stacked result must be
sorted explicitly. The dataset contract makes each campus's row order
its ascending `student_no` order, and the tag column marks which campus
a row came from (`1` for CampusEast, `2` for CampusWest), so
`ORDER BY part, student_no` puts all of CampusEast first in ascending
`student_no` order, then all of CampusWest the same way — exactly the
stacked rosters. Sorting by `student_no` alone would be wrong: numbers
may interleave between the campuses and may even repeat across them, so
the campus tag, not the number, decides which block a row lands in.

**Complexity:** `O((n + m) log(n + m))` time, `O(n + m)` space — the
compound select scans all `n + m` rows of the two tables and sorts the
stacked result, which itself holds every row of both rosters.
