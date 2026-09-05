# Longest Unbroken Passing Run

## Description

Table: `roster`

| Column Name | Type    |
| ----------- | ------- |
| player_id   | int     |
| club        | varchar |

`player_id` is the unique key for this table.
Each row names one player taking part in the match and the club that
player represents.

Table: `pass_log`

| Column Name | Type    |
| ----------- | ------- |
| from_player | int     |
| clock       | varchar |
| to_player   | int     |

`(from_player, clock)` is the unique key for this table.
`from_player` references `roster.player_id`.
Each row is one pass of the match: the player who played the ball, the
clock reading (between `00:00` and `90:00`) at which it was played, and
the player who received it.

Write a query that measures the longest unbroken passing run each club
put together during the match:

- a pass counts for its maker's club only when the receiver plays for
  the same club
- consecutive successful passes stack into a run, and a single
  interception — a pass collected by an opponent — ends the run
- an intercepted pass earns nothing for anyone; it only cuts the
  passer's club run short

Return the result table ordered by `club` in ascending order.

Every testcase ships its own `dataset`: the setup script fills the
`roster` and `pass_log` tables with that testcase's rows before your
query runs. Replay each club's own passes — the ones its players made —
in clock order, ties broken by `from_player` and then `to_player`: a
pass that reaches a teammate extends the club's current run, a pass
that reaches an opponent ends it. A club's accounting never includes
passes made by other clubs. Every club listed in `roster` appears once
with its longest run — `0` when it never strung passes together.
Submit a single `SELECT` query returning two columns — `club` and
`longest_streak` — ordered by `club` ascending.

The result format is shown in the examples below.

### Example 1

```text
Input:
roster table:
+-----------+-----------+
| player_id | club      |
+-----------+-----------+
| 1         | Northgate |
| 2         | Northgate |
| 3         | Northgate |
| 4         | Northgate |
| 5         | Riverside |
| 6         | Riverside |
| 7         | Riverside |
| 8         | Riverside |
| 9         | Westhill  |
| 10        | Westhill  |
+-----------+-----------+
pass_log table:
+-------------+-------+-----------+
| from_player | clock | to_player |
+-------------+-------+-----------+
| 1           | 02:00 | 2         |
| 2           | 04:00 | 3         |
| 3           | 06:00 | 4         |
| 4           | 08:00 | 5         |
| 1           | 10:00 | 2         |
| 2           | 12:00 | 3         |
| 5           | 14:00 | 6         |
| 6           | 16:00 | 7         |
| 7           | 18:00 | 8         |
| 8           | 20:00 | 6         |
| 6           | 22:00 | 9         |
| 9           | 24:00 | 5         |
+-------------+-------+-----------+
Output:
+-----------+----------------+
| club      | longest_streak |
+-----------+----------------+
| Northgate | 3              |
| Riverside | 4              |
| Westhill  | 0              |
+-----------+----------------+
Explanation: Northgate strings together 1→2, 2→3 and 3→4 before 4→5 is
picked off by Riverside, and their later spell 1→2, 2→3 reaches only 2
— longest run 3. Riverside reels off 5→6, 6→7, 7→8 and 8→6 in a row
for a run of 4 before 6→9 is cut out. Westhill's only entry in the log
is the interception 9→5, so they never complete a pass and report 0.
```

### Example 2

```text
Input:
roster table:
+-----------+----------+
| player_id | club     |
+-----------+----------+
| 1         | Eastview |
| 2         | Eastview |
| 3         | Lakeside |
| 4         | Lakeside |
+-----------+----------+
pass_log table:
+-------------+-------+-----------+
| from_player | clock | to_player |
+-------------+-------+-----------+
| 1           | 01:00 | 2         |
| 3           | 02:00 | 4         |
| 2           | 03:00 | 1         |
| 4           | 04:00 | 3         |
| 1           | 05:00 | 3         |
| 3           | 06:00 | 1         |
| 2           | 07:00 | 4         |
| 4           | 08:00 | 2         |
| 1           | 09:00 | 2         |
| 2           | 10:00 | 1         |
| 1           | 11:00 | 2         |
+-------------+-------+-----------+
Output:
+----------+----------------+
| club     | longest_streak |
+----------+----------------+
| Eastview | 3              |
| Lakeside | 2              |
+----------+----------------+
Explanation: the two clubs trade blows. Eastview's early 1→2, 2→1
makes a run of 2 before 1→3 is intercepted, and after both sides trade
cut-out passes Eastview closes with 1→2, 2→1, 1→2 — a run of 3.
Lakeside's 3→4, 4→3 spell gives them 2, and their two later attempts
both reach Eastview shirts, so 2 stands.
```
