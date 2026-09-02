# Solutions — Reporting Lines From The Top

## Recursively expand the reporting tree from the CEO

The hierarchy is a tree stored as parent links, so the query is a recursive
walk: the anchor picks the one row whose `reports_to` is null — the CEO,
whose `reports_to` never matches any `staff_id`, which is exactly what
makes `WHERE reports_to IS NULL` select it and nothing else — and each
recursive step joins `staff` back against the rows gathered so far on
`e.reports_to = s.staff_id`, emitting every employee's direct reports
with the level counter incremented. The anchor also carries the CEO's
pay down the recursion in its own column, so no row ever has to look
the CEO up again: the final projection computes `pay - ceo_salary` per
subordinate.

The CEO themself enters the recursion only as the level-0 seed, and the
outer `WHERE depth > 0` projects that seed away — what remains
is precisely the direct and indirect subordinates. `ORDER BY
depth, report_id` presents the rows level by level, ids
ascending within a
level, as the statement asks; the judge compares rows as an unordered
multiset, so that ordering is fidelity to the statement rather than a
correctness requirement. The recursion terminates because every employee
except the CEO reports to exactly one manager, so each step consumes one
tree level and can never revisit a row.

Visiting each of the `N` employees once costs `O(N)`; ordering the result
dominates at `O(N log N)` time, and the recursion holds at most one tree
level plus the materialized walk — `O(N)` space.

**Complexity:** `O(N log N)` time, `O(N)` space.
