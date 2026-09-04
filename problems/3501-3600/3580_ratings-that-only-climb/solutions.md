# Solutions — Ratings That Only Climb

## Window-Rank Recent Appraisals

The whole contract lives in each employee's three most recent rows of
`appraisals`, so the first pass ranks appraisals per staff member with
`ROW_NUMBER() OVER (PARTITION BY staff_id ORDER BY held_on DESC)` —
recency 1 is the newest appraisal — and keeps only `recency <= 3`. The second
pass re-orders those survivors oldest-to-newest and applies `LEAD(score)`,
so each score sits next to the score that follows it in time: the two
differences inside a three-appraisal window are exactly the "each appraisal
better than the previous" test, and `MIN(next_score - score) > 0` requires
both to be positive. The newest row's `LEAD` is `NULL`; SQLite aggregates
ignore `NULL`, so it never spoils the minimum.

One grouped pass then finishes the job. `COUNT(*) = 3` within the window
enforces the "at least three appraisals" rule, because the ranked CTE only
carries `min(3, appraisal count)` rows per staff member, and with the strict
increase already established `MAX(score) - MIN(score)` is necessarily
newest minus oldest — the score gain. Joining `staff` supplies the name, and the final `ORDER BY` presents the rows by descending score
with the ascending-name tie-break; the judge compares rows as an unordered
multiset, so that ordering is fidelity to the statement rather than a
correctness requirement.

**Complexity:** `O(R log R)` time for `R` appraisals (the ranking sorts each
staff member's appraisals), `O(R)` space.
