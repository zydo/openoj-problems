# Gym Regulars

## Description

A climbing gym tracks who walks in the door and when. A member counts
as a regular once they have visited on five or more consecutive days.

Table: `Climbers`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |

`id` is the primary key of this table: each row holds one member's id
and name.

Table: `Visits`

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| visit_date  | date |

This table may contain duplicate rows — a member can check in several
times on the same day, and every check-in writes its own row. `id` is
the member the check-in belongs to and `visit_date` is the day it
happened.

Report the `id` and `name` of every regular: every member whose visits
cover a run of at least five consecutive days. Same-day repeat visits
still leave that day counted once in the run.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Climbers` and `Visits` rows before your query runs. Return
the result table ordered by `id`. The result format is in the
following example.

### Example 1

```text
Input:
Climbers
+----+-------+
| id | name  |
+----+-------+
| 3  | Priya |
| 8  | Marco |
+----+-------+
Visits
+----+------------+
| id | visit_date |
+----+------------+
| 8  | 2021-03-01 |
| 8  | 2021-03-02 |
| 8  | 2021-03-03 |
| 8  | 2021-03-03 |
| 8  | 2021-03-04 |
| 8  | 2021-03-05 |
| 8  | 2021-03-20 |
| 3  | 2021-03-01 |
| 3  | 2021-03-02 |
| 3  | 2021-03-08 |
| 3  | 2021-03-09 |
| 3  | 2021-03-10 |
+----+------------+
Output:
+----+-------+
| id | name  |
+----+-------+
| 8  | Marco |
+----+-------+
Explanation: Marco visited on 2021-03-01 through 2021-03-05 — five
distinct consecutive days (the repeat check-in on 2021-03-03 still
leaves that day counted once), so he is a regular; his later visit on
2021-03-20 stands alone. Priya's visits split into runs of two and
three days with a gap between, so she does not qualify.
```

Write your solution as a single `SELECT` query returning two columns —
`id` and `name` — one row per regular, ordered by `id`.

### Follow up

Could you write a general solution if a regular is a member with `n`
or more consecutive days of visits?

## Hints

### Hint 1

Collapse duplicate check-ins first: a member visiting twice on one day
should hold that day only once in a streak.

### Hint 2

Number each member's distinct dates in ascending order with `ROW_NUMBER`.
Within a run of consecutive days, subtracting the row number from the
date lands on the same day for every member of the run — that constant
date is the streak's key, and a gap produces a different one.

### Hint 3

Group by member and streak key, keep only the groups of five or more
distinct days, then deduplicate the surviving member ids and join
`Climbers` for the names.
