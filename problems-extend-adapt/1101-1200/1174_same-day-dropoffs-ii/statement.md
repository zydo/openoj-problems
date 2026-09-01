# Same-Day Dropoffs II

## Description

Table: `Dropoffs`

| Column Name  | Type |
| ------------ | ---- |
| dropoff_id   | int  |
| diner_id     | int  |
| placed_on    | date |
| requested_on | date |

`dropoff_id` is the column of unique values of this table.
The table holds one row per food order: the diner who placed it, the
date it was placed, and the date the diner asked for it to be dropped
off (the order date itself or later).

A dropoff is called same-day when the requested date is the day the
order was placed; otherwise, it is called scheduled.

A diner's first dropoff is the one they placed on their earliest date.
It is guaranteed that a diner has precisely one first dropoff.

Report the percentage of same-day dropoffs among the first dropoffs of
all diners, rounded to 2 decimal places.

The result format is shown in the following example.

### Example 1

```text
Input:
Dropoffs table:
+-------------+----------+------------+--------------+
| dropoff_id  | diner_id | placed_on  | requested_on |
+-------------+----------+------------+--------------+
| 1           | 2        | 2019-08-09 | 2019-08-09   |
| 2           | 1        | 2019-08-01 | 2019-08-01   |
| 3           | 2        | 2019-08-02 | 2019-08-04   |
| 4           | 3        | 2019-08-03 | 2019-08-03   |
| 5           | 4        | 2019-08-05 | 2019-08-06   |
| 6           | 5        | 2019-08-04 | 2019-08-04   |
| 7           | 3        | 2019-08-20 | 2019-08-22   |
| 8           | 4        | 2019-08-15 | 2019-08-15   |
| 9           | 5        | 2019-08-06 | 2019-08-08   |
| 10          | 6        | 2019-08-07 | 2019-08-09   |
| 11          | 7        | 2019-08-08 | 2019-08-10   |
+-------------+----------+------------+--------------+
Output:
+-----------------+
| same_day_share  |
+-----------------+
| 42.86           |
+-----------------+
Explanation: The first dropoffs are id 2 for diner 1 (same-day), id 3
for diner 2 (scheduled — their later order id 1 is same-day but does
not count), id 4 for diner 3 (same-day), id 5 for diner 4 (scheduled),
id 6 for diner 5 (same-day), id 10 for diner 6 (scheduled), and id 11
for diner 7 (scheduled). Three of seven first dropoffs are same-day:
42.857... rounded to 42.86.
```

Write your solution as a single `SELECT` query returning
`same_day_share`.
