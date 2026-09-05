# Solutions — Reporting Tree Rollup

## One Recursive Enumeration, Three Aggregates

Every column the query must emit is a fact about the subtree hanging below some
person, so the whole answer can come from a single enumeration of subtree
memberships. The recursive CTE `chain` produces exactly that: its anchor names
each staff member as the root of their own chain at distance 1, and its
recursive arm follows `supervisor_id` links downward, appending one row per
(ancestor, descendant) pair with the distance between them. Nothing downstream
needs to walk the tree again.

Three groupings read off `chain`. Filtering to the chain rooted at the person
whose `supervisor_id` is NULL yields each member's distance from the top — the
reported `depth`. Grouping by root and taking `COUNT(*) - 1` yields `reports`,
because a root's chain lists the root together with every person below them.
Grouping by root while excluding the self-row and summing `salary` yields the
money controlled below; the outer select tacks on the root's own salary to
finish `payroll`.

The outer query starts from `Staff` and left-joins the two aggregate tables, so
people with nobody under them still appear: `COALESCE` fills `reports` with 0
and `payroll` with their salary alone instead of letting the row vanish. The
closing `ORDER BY` sorts by `depth`, then `payroll` descending, then
`staff_name` — judged, so it is spelled out exactly; ordering by output aliases
is accepted here because every sort key is an alias of the final select.

Re-anchoring at every staff member rather than only the top is what makes
`reports` and `payroll` computable for middle managers, at the cost of one
`chain` row per (ancestor, descendant) pair — the sum of all subtree sizes.

**Complexity:** `O(n * d)` time and space, with `n` staff members and tree
height `d`: `chain` holds one row per ancestor-descendant pair.
