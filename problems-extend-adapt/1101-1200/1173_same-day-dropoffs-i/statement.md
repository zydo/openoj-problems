# Same-Day Dropoffs I

## Description

Table: `Dropoffs`

| Column Name  | Type |
| ------------ | ---- |
| dropoff_id   | int  |
| diner_id     | int  |
| placed_on    | date |
| requested_on | date |

`dropoff_id` is the primary key (column with unique values) of this
table.
The table holds one row per food order: the diner who placed it, the
date it was placed, and the date the diner asked for it to be dropped
off (the order date itself or later).

A dropoff is called same-day when the requested date is the day the
order was placed; otherwise, it is called scheduled.

Report the percentage of same-day dropoffs in the table, rounded to 2
decimal places.

The result format is shown in the following example.

### Example 1

```text
Input:
Dropoffs table:
+-------------+----------+------------+--------------+
| dropoff_id  | diner_id | placed_on  | requested_on |
+-------------+----------+------------+--------------+
| 1           | 4        | 2019-09-01 | 2019-09-03   |
| 2           | 7        | 2019-09-01 | 2019-09-01   |
| 3           | 4        | 2019-09-04 | 2019-09-05   |
| 4           | 9        | 2019-09-05 | 2019-09-05   |
| 5           | 7        | 2019-09-07 | 2019-09-09   |
| 6           | 9        | 2019-09-08 | 2019-09-08   |
| 7           | 2        | 2019-09-10 | 2019-09-12   |
| 8           | 2        | 2019-09-11 | 2019-09-11   |
| 9           | 5        | 2019-09-12 | 2019-09-14   |
| 10          | 8        | 2019-09-14 | 2019-09-14   |
| 11          | 5        | 2019-09-15 | 2019-09-16   |
| 12          | 8        | 2019-09-16 | 2019-09-18   |
+-------------+----------+------------+--------------+
Output:
+-----------------+
| same_day_share  |
+-----------------+
| 41.67           |
+-----------------+
Explanation: The dropoffs with ids 2, 4, 6, 8, and 10 are same-day,
which is 5 of the 12 orders — 41.666... rounded to 41.67.
```

Write your solution as a single `SELECT` query returning
`same_day_share`.
