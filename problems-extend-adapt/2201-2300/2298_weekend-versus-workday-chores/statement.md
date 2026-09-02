# Weekend Versus Workday Chores

## Description

Table: `Chores`

| Column Name | Type |
| ----------- | ---- |
| chore_id    | int  |
| keeper_id   | int  |
| done_on     | date |

`chore_id` is the primary key (column with unique values) for this table.
Each row records one household chore: the chore's own id, the keeper who
did it, and the day it was finished.

Report, as a single row:

- `rest_day_cnt`, the number of chores finished across the weekend
  (Saturday and Sunday), and
- `work_day_cnt`, the number of chores finished on the working days.

Return the result table in any order.

The weekend split comes from `done_on` alone. SQLite keeps these dates as
ISO-8601 text, and `strftime('%w', done_on)` reads each date's weekday
back out as `'0'` through `'6'`, counting Sunday as `'0'` up to Saturday
as `'6'`. A chore belongs to the weekend exactly when its weekday code is
`'6'` (Saturday) or `'0'` (Sunday); every other code is a working day.

Each testcase supplies its own `dataset`: the DDL seeds the `Chores` table
with that testcase's rows. Write your solution as a single `SELECT` query
returning two columns — `rest_day_cnt` and `work_day_cnt` — aggregated
over the whole table into one row; an empty table reports `[0, 0]`. The
result format is in the following examples.

### Example 1

```text
Input:
Chores table:
+----------+-----------+------------+
| chore_id | keeper_id | done_on    |
+----------+-----------+------------+
| 1        | 4         | 2023-05-01 |
| 2        | 2         | 2023-05-03 |
| 3        | 4         | 2023-05-06 |
| 4        | 7         | 2023-05-07 |
| 5        | 2         | 2023-05-05 |
| 6        | 9         | 2023-05-06 |
+----------+-----------+------------+
Output:
+--------------+--------------+
| rest_day_cnt | work_day_cnt |
+--------------+--------------+
| 3            | 3            |
+--------------+--------------+
Explanation:
Chores 1, 2, and 5 were finished on a Monday, a Wednesday, and a Friday —
working days. Chores 3 and 6 were finished on Saturdays and chore 4 on a
Sunday, so 3 chores landed on the weekend and 3 on the working days.
```

### Example 2

```text
Input:
Chores table:
+----------+-----------+------------+
| chore_id | keeper_id | done_on    |
+----------+-----------+------------+
| 1        | 1         | 2023-12-29 |
| 2        | 1         | 2023-12-30 |
| 3        | 2         | 2024-01-01 |
| 4        | 2         | 2024-01-02 |
+----------+-----------+------------+
Output:
+--------------+--------------+
| rest_day_cnt | work_day_cnt |
+--------------+--------------+
| 1            | 3            |
+--------------+--------------+
Explanation:
Chore 1 was finished on a Friday. Chore 2 was finished on the Saturday of
New Year's weekend, while chores 3 and 4 were finished on the Monday and
Tuesday after it — the holiday does not make a working day count as a
rest day, so the split is 1 and 3.
```
