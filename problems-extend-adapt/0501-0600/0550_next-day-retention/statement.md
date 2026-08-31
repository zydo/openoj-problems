# Next-Day Retention

## Description

Table: `PlaySession`

| Column        | Type |
| ------------- | ---- |
| player_id     | int  |
| device_id     | int  |
| session_date  | date |
| rounds_played | int  |

`(player_id, session_date)` is the primary key — the combination of columns
that uniquely identifies each row. Every row records one player session in
some game: the player, the device they played on, the date, and how many
rounds they played before logging out (possibly 0).

Write a solution to report the fraction of players who logged in again on
the day right after the day they first logged in, rounded to 2 decimal
places. In other words, count the players who have a session on the day
immediately following their first session, and divide that count by the
number of players in total.

Each test case supplies its own `dataset`: the DDL seeds the `PlaySession`
table with that test case's rows, dates in ISO `YYYY-MM-DD` form. The
result format is shown in the following example.

### Example 1

```text
Input: the PlaySession table from the dataset below.
Output:
fraction
0.5
Explanation: player 1 first played on 2020-06-01 and played again on
2020-06-02, exactly one day later, so player 1 counts. Player 2 first
played on 2019-08-15 and again on 2019-08-16, so player 2 also counts.
Player 3 first played on 2021-11-11 and next on 2021-11-13, two days
later, and player 4 played only once, so neither counts. The fraction is
2/4 = 0.5.
```

Answer with a single `SELECT` query returning one column — `fraction`, the
share of players who played again on the day after their first session,
rounded to two decimal places — as a single row.

## Hints

### Hint 1

The fraction's two counts both live at player granularity: `GROUP BY
player_id` with `MIN(session_date)` yields one first-session row per
player — that player count is the denominator — and the numerator counts
those players whose first-session date is followed, somewhere in their own
rows, by a session exactly one day later.

### Hint 2

"One day later" is calendar arithmetic, not a row offset: in SQLite the
day after `d` is `DATE(d, '+1 day')`, which resolves month ends, year
ends, and leap days to the true next day. Match it inside the player:
join `PlaySession` on both `player_id` and `session_date =
DATE(first_login, '+1 day')` — a session on that date by a different
player must not count.

### Hint 3

`LEFT JOIN` keeps every first-session row even when no next-day session
exists, so the denominator survives; `COUNT(a.player_id)` skips the
unmatched rows' NULLs and yields the numerator. Multiply by `1.0` before
dividing — SQLite's integer `1/3` truncates to `0` — and `ROUND(x, 2)`
rounds the ratio to two decimals, ties going up (`1/8` is exactly `0.125`
and rounds to `0.13`).
