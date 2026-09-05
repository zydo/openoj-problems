# Climbers Who Leveled Up

## Description

Table: `ClimbLogs`

| Column Name  | Type    |
| ------------ | ------- |
| climber_id   | int     |
| wall         | varchar |
| grade        | int     |
| session_date | varchar |

(`climber_id`, `wall`, `session_date`) is the primary key for this table.
Each row logs one gym visit: a climber topped a given wall on a given
date and earned the recorded grade. `grade` is between 0 and 100
(inclusive).

A climber has leveled up on a wall when both of these hold:

- they have logged that wall on at least two different session dates,
- and the grade from their latest session on that wall is higher than
  the grade from their earliest one.

Report every climber-wall pair that leveled up, together with the two
endpoint grades. Return the result ordered by `climber_id`, `wall` in
ascending order.

The result format is in the following example.

### Example 1

```text
Input:
ClimbLogs table:
+------------+----------+-------+--------------+
| climber_id | wall     | grade | session_date |
+------------+----------+-------+--------------+
| 301        | Slab     | 14    | 2024-03-02   |
| 301        | Slab     | 17    | 2024-04-06   |
| 301        | Overhang | 12    | 2024-03-02   |
| 301        | Overhang | 11    | 2024-04-06   |
| 302        | Slab     | 15    | 2024-03-02   |
| 302        | Slab     | 18    | 2024-04-06   |
| 303        | Slab     | 16    | 2024-03-02   |
| 304        | Overhang | 13    | 2024-03-02   |
| 304        | Overhang | 19    | 2024-04-06   |
+------------+----------+-------+--------------+
Output:
+------------+----------+-------------+--------------+
| climber_id | wall     | first_grade | latest_grade |
+------------+----------+-------------+--------------+
| 301        | Slab     | 14          | 17           |
| 302        | Slab     | 15          | 18           |
| 304        | Overhang | 13          | 19           |
+------------+----------+-------------+--------------+
Explanation:
- Climber 301 on Slab: climbed from grade 14 to 17 — leveled up.
- Climber 301 on Overhang: went from 12 down to 11 — not reported.
- Climber 302 on Slab: climbed from 15 to 18 — leveled up.
- Climber 303 on Slab: a single session, so not eligible.
- Climber 304 on Overhang: climbed from 13 to 19 — leveled up.

The result table is ordered by climber_id, wall.
```

Write your solution as a single `SELECT` query returning four columns —
`climber_id`, `wall`, `first_grade`, and `latest_grade` — one row for
each climber-wall pair whose latest grade is higher than their first,
ordered by `climber_id`, `wall` in ascending order. Each testcase
supplies its own `dataset`: the script seeds the `ClimbLogs` table
before your query runs.
