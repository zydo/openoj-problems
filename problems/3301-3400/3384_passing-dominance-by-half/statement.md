# Passing Dominance By Half

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

`(from_player, clock)` is the primary key for this table.
`from_player` references `roster.player_id`.
Each row is one pass of the match: the player who played the ball, the
clock reading (between `00:00` and `90:00`) at which it was played, and
the player who received it.

Write a query that scores how dominantly each club passed the ball in
each half of the match:

- the match has two halves — the first covers clock readings from
  `00:00` through `45:00`, the second everything after that up to
  `90:00`
- every pass is charged to the club of the player who made it: a pass
  collected by a teammate earns `+1`, a pass collected by an opponent —
  an interception — costs `-1`
- the club's dominance figure for a half is the sum of those points

Return the result table ordered by `club`, then `half_number`, both
ascending.

Every testcase ships its own `dataset`: the setup script fills the
`roster` and `pass_log` tables with that testcase's rows before your
query runs. The result holds exactly one row per club per half — halves
are numbered `1` and `2` — and a club that played no pass in a half is
still reported, with dominance `0`. Half membership reads the raw clock
strings, so a stamp of `45:00` belongs to the first half and anything
after it to the second. Submit a single `SELECT` query returning three
columns — `club`, `half_number`, and `dominance` — ordered by `club`
ascending, then `half_number` ascending.

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
| 4         | Riverside |
| 5         | Riverside |
| 6         | Riverside |
| 7         | Westhill  |
| 8         | Westhill  |
+-----------+-----------+
pass_log table:
+-------------+-------+-----------+
| from_player | clock | to_player |
+-------------+-------+-----------+
| 1           | 04:10 | 2         |
| 2           | 12:30 | 3         |
| 3           | 20:45 | 4         |
| 4           | 33:20 | 5         |
| 5           | 41:59 | 1         |
| 7           | 50:05 | 8         |
| 8           | 58:40 | 7         |
| 2           | 63:15 | 6         |
| 6           | 71:00 | 4         |
+-------------+-------+-----------+
Output:
+-----------+-------------+-----------+
| club      | half_number | dominance |
+-----------+-------------+-----------+
| Northgate | 1           | 1         |
| Northgate | 2           | -1        |
| Riverside | 1           | 0         |
| Riverside | 2           | 1         |
| Westhill  | 1           | 0         |
| Westhill  | 2           | 2         |
+-----------+-------------+-----------+
Explanation: Northgate's first half: 1→2 and 2→3 are kept passes (+1
each), then 3→4 is picked off by Riverside (-1), summing to 1; their
second half holds only the interception 2→6, for -1. Riverside's first
half pairs a kept pass 4→5 with the interception 5→1, netting 0; in the
second half 6→4 lands with a teammate for 1. Westhill never touched the
ball before the break, so their first-half row reports 0, and the two
kept passes 7→8 and 8→7 after it give 2.
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
| 1           | 00:00 | 2         |
| 2           | 44:59 | 3         |
| 3           | 45:00 | 4         |
| 4           | 45:01 | 1         |
| 1           | 89:59 | 2         |
| 2           | 90:00 | 3         |
+-------------+-------+-----------+
Output:
+----------+-------------+-----------+
| club     | half_number | dominance |
+----------+-------------+-----------+
| Eastview | 1           | 0         |
| Eastview | 2           | 0         |
| Lakeside | 1           | 1         |
| Lakeside | 2           | -1        |
+----------+-------------+-----------+
Explanation: the clock strings decide the halves. Eastview opens with a
kept pass at 00:00 but loses 2→3 to an interception before the break —
0 — and repeats exactly that pattern late, 1→2 then 2→3 picked off —
0 again. Lakeside's 3→4 lands exactly on 45:00, which still belongs to
the first half, so they take 1 into the break, and their only second-half
touch is the interception 4→1 at 45:01, for -1.
```
