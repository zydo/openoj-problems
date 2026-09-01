# Scouting Shortlist

## Description

A competitive league keeps one row per match with the three podium
finishers, plus a roster of its players.

Table: `Matches`

| Column Name | Type |
| ----------- | ---- |
| match_id    | int  |
| champion    | int  |
| runner_up   | int  |
| third_place | int  |

`match_id` is the primary key (column with unique values) for this
table.

`champion`, `runner_up`, and `third_place` hold the player IDs of the
match's first-, second-, and third-place finishers.

It is guaranteed that consecutive matches have consecutive IDs and
that no ID is skipped.

Table: `Players`

| Column Name | Type    |
| ----------- | ------- |
| player_id   | int     |
| email       | varchar |
| handle      | varchar |

`player_id` is the primary key (column with unique values) for this
table.

`email` and `handle` hold the player's contact address and in-game
name.

The scouting staff is building a shortlist of interview candidates.
Report the handle and the email of every player who qualifies through
at least one of these two conditions:

- The player finished on the podium (any of the three spots) in three
  or more consecutive matches.
- The player won three or more different matches outright (not
  necessarily consecutive).

Each testcase's `dataset` seeds the `Matches` and `Players` tables with
that testcase's rows. Return the result table in any order. The result
format is in the following example.

### Example 1

```text
Input:
Matches table:
+----------+----------+-----------+-------------+
| match_id | champion | runner_up | third_place |
+----------+----------+-----------+-------------+
| 301      | 9        | 2         | 4           |
| 302      | 2        | 6         | 3           |
| 303      | 9        | 3         | 2           |
| 304      | 7        | 2         | 4           |
| 305      | 9        | 6         | 2           |
| 306      | 7        | 3         | 6           |
+----------+----------+-----------+-------------+
Players table:
+-----------+----------------------+--------+
| player_id | email                | handle |
+-----------+----------------------+--------+
| 2         | riko@nodeforge.dev   | Riko   |
| 3         | tess@nodeforge.dev   | Tess   |
| 4         | omar@nodeforge.dev   | Omar   |
| 6         | lea@nodeforge.dev    | Lea    |
| 7         | sam@nodeforge.dev    | Sam    |
| 9         | noa@nodeforge.dev    | Noa    |
+-----------+----------------------+--------+
Output:
+--------+----------------------+
| handle | email                |
+--------+----------------------+
| Riko   | riko@nodeforge.dev   |
| Noa    | noa@nodeforge.dev    |
+--------+----------------------+
Explanation:
Riko podiumed in five straight matches (301 through 305), so she makes
the shortlist on the streak condition. Noa never podiumed twice in a
row, but she won matches 301, 303, and 305 outright — three wins, not
necessarily consecutive — so she qualifies on the win condition. Lea
podiumed three times (302, 305, and 306) but never in three
consecutive matches and never won a match; Sam won twice, one short of
three, and never strung three podiums together; Tess and Omar stack
neither a three-match streak nor three wins.
```

### Follow-up

- What if the streak condition asked for a podium in `n` or more
  consecutive matches, with `n` a parameter of a stored procedure?
- Some players skip matches but still place well in the ones they
  enter. How would you restrict both conditions to the matches a
  player actually entered, given one more table listing each match's
  registered players?

Write your solution as a single `SELECT` query returning `handle` and
`email`.
