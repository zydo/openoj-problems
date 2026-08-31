# First Login Device

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

Write a solution to report, for each player, the device they used on their
first session — the device named on the player's earliest-dated
`PlaySession` row.

Return the result table in any order.

Each test case supplies its own `dataset`: the DDL seeds the `PlaySession`
table with that test case's rows, dates in ISO `YYYY-MM-DD` form. The
result format is shown in the following example.

### Example 1

```text
Input: the PlaySession table from the dataset below.
Output:
player_id  device_id
4          10
5          20
6          31
Explanation: player 4 first played on 2021-06-15 using device 10; player 5
played only once, on 2020-01-01 with device 20; player 6 first played on
2021-12-25 with device 31 — their 2022-09-09 session used device 30, but a
later session is not the first.
```

Answer with a single `SELECT` query returning two columns — `player_id`
and `device_id`, the device of that player's first session — one row per
player.

## Hints

### Hint 1

The row to report per player is their earliest-dated `PlaySession` row:
`(SELECT player_id, MIN(session_date) FROM PlaySession GROUP BY player_id)`
computes exactly those (player, first-date) pairs.

### Hint 2

Match whole rows, not bare dates: compare the pair `(player_id,
session_date)` against the grouped pairs — SQLite row values allow
`(a, b) IN (SELECT x, y ...)` — so each player matches their own first
session row and the `device_id` of that row is the answer.

### Hint 3

`(player_id, session_date)` is the primary key, so the earliest-dated row
is unique per player: exactly one output row per player follows with no
`DISTINCT`. `rounds_played` never enters the answer — a first session with
`rounds_played = 0` still carries its device.
