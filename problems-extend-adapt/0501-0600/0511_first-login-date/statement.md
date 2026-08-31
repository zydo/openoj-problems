# First Login Date

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

Write a solution to find each player's first session date — the earliest
`session_date` on file for that player.

Return the result table in any order.

Each test case supplies its own `dataset`: the DDL seeds the `PlaySession`
table with that test case's rows, dates in ISO `YYYY-MM-DD` form. The
result format is shown in the following example.

### Example 1

```text
Input: the PlaySession table from the dataset below.
Output:
player_id  first_login
7          2021-05-01
8          2020-11-20
9          2022-01-10
Explanation: player 7 played on 2021-05-01 and 2021-05-04, so their first
login is 2021-05-01; player 8 played on 2020-11-20 and 2021-03-14, so
their first login is 2020-11-20; player 9 played only on 2022-01-10.
```

Answer with a single `SELECT` query returning two columns — `player_id`
and the first-login date `first_login` — one row per player.

## Hints

### Hint 1

One output row per player, keyed on the player alone: `GROUP BY player_id`
collapses each player's whole login history into one group, and the first
login is that group's `MIN(session_date)`.

### Hint 2

No date parsing is needed: `session_date` values are ISO `YYYY-MM-DD`
strings, whose zero-padded fixed-width fields make lexicographic order
identical to calendar order, so `MIN` over the text is already the earliest
date.

### Hint 3

`device_id` and `rounds_played` never enter the answer — a row with
`rounds_played = 0` is still a session — and the judge compares rows as an
unordered multiset, so no `ORDER BY` is needed.
