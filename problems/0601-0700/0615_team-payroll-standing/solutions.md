# Solutions — Team Payroll Standing

## Group both averages by month, then compare

The answer's grain is the (month, team) pair, so the query builds the two
averages each at its own grain and joins them on the month. The team side,
`team`, joins `Paycheck` to `Worker` on `worker_id` so every paycheck row
knows its team, then `GROUP BY` the month prefix and `team_id` reduces
each pair to one `AVG(amount)`. The company side, `company`, is the same
grouping over `Paycheck` alone — one average per month over every
paycheck the month holds, whatever team its earner sits in. Joining the
two on the month prefix puts each team average next to the company
average of the same month, and a `CASE` names the relationship: strictly
above reads `'higher'`, strictly below `'lower'`, and exact equality
`'same'`.

The month key does double duty as the output format. `SUBSTR(pay_date, 1,
7)` takes `2020/06/30` down to `2020/06` — the right grain, since
grouping must merge two pay dates on different days of the same month
while keeping `2020/06` apart from `2020/07` — and `REPLACE(..., '/',
'-')` restyles that prefix as the reported `2020-06`. The join also
handles the empty cells by omission: a team with no paycheck rows in a
month has no group on the team side, so it simply contributes no row,
while a `Worker` row without paycheck rows contributes nothing anywhere.
A paycheck row whose worker is missing from `Worker` cannot arise — the
schema makes `worker_id` a foreign key into it — which is what lets the
team side use a plain inner join.

Equality is exact, not approximate: two averages read `same` exactly when
their sums and counts balance, as in the example's July, where every
worker is paid exactly 7000 and both teams tie the company average
exactly — and equal rationals over these magnitudes compare equal as
SQLite reals, so no rounding appears anywhere. Duplicate paycheck rows
are ordinary rows: a worker paid twice in one month weighs twice in both
their team's average and the company's, and repeated amounts matter only
through those sums.

One grouping pass over the `P` rows of `Paycheck` builds each side, and
the join matches the `T` team-month groups against the `M` months.

**Complexity:** `O(P + T + M)` time, `O(T + M)` space.
