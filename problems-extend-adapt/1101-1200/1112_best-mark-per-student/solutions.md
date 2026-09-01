# Solutions — Best Mark Per Student

## Rank each student's rows, keep the first

The query settles every student's ordering at once with a window
function: `ROW_NUMBER() OVER (PARTITION BY student_id ORDER BY mark
DESC, course_id)` numbers each student's rows from 1, ordered so the
best `mark` leads and, among equal marks, the smaller `course_id`
follows. That single ORDER BY key encodes the whole tie-break rule, so
row number 1 in a partition is precisely the row the problem asks to
report.

The outer query keeps the rows numbered 1 and sorts them by
`student_id`. Each partition contributes exactly one survivor, so the
final order is a total order over students and the output is
deterministic.

**Complexity:** `O(N log N)` time for the per-partition sort over `N`
Coursework rows, `O(N)` space for the ranked intermediate.
