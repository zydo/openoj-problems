# Solutions — Trial Tallies on Every Platform

## Full cross join of the enum values, left-joined to the counts

Grouping the `Trials` table alone cannot produce the answer, because the
nine `(platform, trial_name)` pairs must all appear — including the ones
no row matches. The query therefore builds the pair grid itself: two
inline subqueries list the three platform values and the three trial
names, and a `CROSS JOIN` forms all nine combinations. A `LEFT JOIN`
then attaches whatever `Trials` rows agree with a pair on both columns.

`GROUP BY p.platform, e.trial_name` collapses the joined rows back to
the nine pairs, and `COUNT(x.trial_id)` tallies only the rows that
actually matched. The null-row trick does the zero-fill: for an
unmatched pair the left join contributes a single row whose `trial_id`
is `NULL`, which `COUNT` ignores — so that pair survives with a zero
instead of disappearing. The output columns come out as `platform`,
`trial_name`, and `trial_count`, and since the statement allows any row
order the result is compared as a set.

The cross join is a constant 3 × 3, the left join sweeps the table once,
and the final grouping covers only the nine fixed pairs.

**Complexity:** `O(n)` time, `O(1)` space.
