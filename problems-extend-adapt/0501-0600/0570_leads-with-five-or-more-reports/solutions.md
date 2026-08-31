# Solutions — Leads With Five or More Reports

## Count each lead's direct reports

The lead named by a row lives in the same table: `lead_id` holds the `id`
of that lead, so a lead's direct reports are exactly the rows whose
`lead_id` equals that lead's `id`. `GROUP BY lead_id` gathers those rows
into one group per lead and `HAVING COUNT(*) >= 5` keeps the groups of
five or more, so the subquery
`SELECT lead_id FROM Personnel GROUP BY lead_id HAVING COUNT(*) >= 5`
emits precisely the ids of leads with at least five direct reports. The
outer `WHERE id IN (...)` keeps the `Personnel` rows of those leads, and
the projection is the answer's one column, `name`.

Rows that must not qualify disappear on their own. An employee whose
`lead_id` is null has no lead; those rows form their own group under
`GROUP BY lead_id`, but null never equals an `id`, so that group can never
surface a lead — even when five or more lead-less employees share the
null. Directness needs no enforcement either: the group of a lead counts
only rows that name them, so a mid-level lead with a deep subtree but four
direct reports fails the `HAVING`, while a lead who is themself somebody's
report qualifies like anyone else. Because `id` is the primary key each
qualifying lead owns exactly one row, so the output holds one `name` per
qualifying lead and no duplicates.

One aggregation pass over the `E` rows of `Personnel` materializes the
qualifying ids — at most one per lead, `L` of them — and the outer scan
performs one membership test per row against that id set. Equivalent
shapes reach the same rows: a self-join
`Personnel e JOIN Personnel m ON e.lead_id = m.id GROUP BY e.lead_id
HAVING COUNT(*) >= 5` projecting `m.name`, a windowed
`COUNT(*) OVER (PARTITION BY lead_id)` with a filter, or a correlated
`(SELECT COUNT(*) FROM Personnel e WHERE e.lead_id = Personnel.id) >= 5`
— but the grouped `IN` states the keep-set directly.

**Complexity:** `O(E)` time, `O(L)` space.
