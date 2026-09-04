# Solutions — First Logins Per Day

## First login per user, then filter and count by date

The query works in two stages. The inner subquery reduces `Sessions`
to its `login` rows and groups by `user_id`, keeping each user's
earliest `action_date` as their `first_day` — `MIN` collapses repeat
logins and throws away every non-login action, so what survives is
exactly one day per user: the day that user logged in for the first
time ever. The outer query then drops first days outside the 90-day
window ending 2019-06-30, groups the survivors by `first_day`, and
counts how many users landed in each group.

The window is closed at both ends: `BETWEEN DATE('2019-06-30', '-90
day') AND '2019-06-30'` keeps the day exactly 90 days back as well as
everything newer. The outer `COUNT(*)` is safe because the subquery
already emits one row per user, so every user lands in at most one
`first_day` group — and users whose first day is out of window land in
none, which is why absent days never appear in the output.

**Complexity:** `O(N)` time and `O(U)` space, for `N` Sessions rows
and `U` distinct users — one grouped scan for the minima, one for the
counts.
