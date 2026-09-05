# Solutions — Crew Sizes

## Window count partitioned by crew

Every paddler needs the size of the crew they belong to, which is
exactly a count of rows grouped by `crew_id` — but the count must
appear alongside every original row rather than collapsing the group.
A window function does both in one pass.

`COUNT(*) OVER (PARTITION BY crew_id)` computes, for each row, the
number of rows sharing that row's `crew_id` without reducing the
result set, so each member row survives untouched with its crew size
attached. No join or subquery is needed, and the statement allows any
output order, so no ordering clause is required.

The window pass reads every row of the table once and holds no
materialized grouping structure beyond the partition, so the work is
linear in the number of members.

**Complexity:** `O(M)` time and `O(M)` space where `M` is the number
of members.
