# Solutions — First-Day Return Rate

## First login per user, then left-join the next day

A user's first-login day is their earliest `login_date`, so the first
step groups `Logins` by `user_id` and takes `MIN(login_date)`. That
gives one row per user; counting those rows per date answers "how many
users logged in for the first time on each day".

The return rate then asks, for each first-login day, how many of those
users came back exactly one day later. A `LEFT JOIN` of the first-login
rows back onto `Logins` matches each user's first-login day against a
row whose date is `first_login + 1 day`. Because
`(user_id, login_date)` is a primary key, a user has at most one login
row per date, so the join can match each user at most once and never
double-counts. `SUM` over the matched rows counts the users who
returned, and dividing by the new-user count and rounding to two
decimals gives the first-day return rate.

The grouping and the join each touch every `Logins` row once, so the
query runs in one pass over the table.

**Complexity:** `O(N)` time and `O(N)` space, for `N` Logins rows.
