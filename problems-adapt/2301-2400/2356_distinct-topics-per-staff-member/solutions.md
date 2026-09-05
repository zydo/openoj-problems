# Solutions — Distinct Topics per Staff Member

## Group the rows per staff member, deduplicate topics in the count

The answer lives at the staff-member grain while the input sits at the
teaching-assignment grain, so `GROUP BY staff_id` collapses each staff
member's rows into one and the aggregate does the counting — but with a
set, not a multiset: `COUNT(DISTINCT topic_id)` first folds the group's
topic ids into distinct values and only then counts them. That
distinctness is the whole problem: staff member 11's topic 301 appears
once for unit 7 and again for unit 9, and plain `COUNT(topic_id)` would
report 3 assignments where only 2 distinct topics exist.

Because `comparison` is a multiset over two columns, any row order is
accepted; nothing needs an `ORDER BY`. Staff members exist in the answer
only through `Timetable`, so an empty table forms no groups and reports
nothing, and every surviving group has at least one row behind it — its
count is never zero.

Grouping sweeps the n assignment rows once, charging constant hash work
per row into the distinct sets; the k ≤ n staff-member groups are
emitted directly, no sort on top.

**Complexity:** `O(n)` time, `O(n)` space.
