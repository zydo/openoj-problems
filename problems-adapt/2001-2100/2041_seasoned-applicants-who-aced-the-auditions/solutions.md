# Solutions — Seasoned Applicants Who Aced The Auditions

## Filter, join, and aggregate

First keep the applicants with at least two years of experience, then join
each surviving applicant to the trials of the same `audition_id`. Grouping
the joined rows by `applicant_id` gives one group per applicant, and
`HAVING SUM(r.marks) > 15` retains only the groups whose total clears the
strict marks bar. The inner join also drops an applicant with no trials,
because that applicant contributes no joined group.

The grouping key is the applicant rather than the audition. This distinction
matters when several applicants share an `audition_id`: each applicant still
produces their own result row, even though the joined trial rows are the
same. Selecting only `applicant_id` returns exactly the requested column,
while the multiset comparison permits any row order.

**Complexity:** `O(A log T + J)` time and `O(A)` space, where `A` is the
number of applicants, `T` is the number of trials, and `J` is the number of
joined rows.
