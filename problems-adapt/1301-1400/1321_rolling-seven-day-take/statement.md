# Rolling Seven-Day Take

## Description

A market stall records every settled bill in one table. `Bill` holds
one row per bill: the guest who paid, the day it was settled, and how
much it came to.

Table: `Bill`

| Column Name | Type    |
| ----------- | ------- |
| guest_id    | int     |
| guest       | varchar |
| settled_on  | date    |
| charge      | int     |

In SQL, `(guest_id, settled_on)` is the primary key (combination of
columns with unique values) for this table.
`settled_on` is the day the guest with id `guest_id` settled a bill,
and `charge` is the amount on it.

You run the stall and want to sense how it is trending before
committing to a bigger pitch (at least one bill is settled every day).

Compute the moving average of the stall's daily take over a seven-day
window — the current day plus the six days before it. The daily take
of a day is the sum of that day's `charge` values, and
`average_charge` is rounded to two decimal places.

Return the result rows ordered by `settled_on` in ascending order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Bill table:
+----------+-------+------------+--------+
| guest_id | guest | settled_on | charge |
+----------+-------+------------+--------+
| 1        | Ren   | 2024-03-01 | 100    |
| 2        | Ada   | 2024-03-02 | 60     |
| 3        | Lev   | 2024-03-02 | 40     |
| 4        | Mona  | 2024-03-03 | 90     |
| 5        | Kip   | 2024-03-04 | 75     |
| 6        | Faye  | 2024-03-05 | 120    |
| 7        | Gil   | 2024-03-06 | 55     |
| 8        | Nell  | 2024-03-07 | 80     |
| 1        | Ren   | 2024-03-07 | 45     |
| 2        | Ada   | 2024-03-08 | 95     |
+----------+-------+------------+--------+
Output:
+------------+--------+----------------+
| settled_on | charge | average_charge |
+------------+--------+----------------+
| 2024-03-07 | 665    | 95.0           |
| 2024-03-08 | 660    | 94.29          |
+------------+--------+----------------+
Explanation:
The first window runs from 2024-03-01 to 2024-03-07. Its daily takes
sum to (100 + 100 + 90 + 75 + 120 + 55 + 125) = 665, so
average_charge is 665/7 = 95.0.
The second window runs from 2024-03-02 to 2024-03-08. Its daily takes
sum to (100 + 90 + 75 + 120 + 55 + 125 + 95) = 660, so
average_charge is 660/7 = 94.29.
```

### Example 2

```text
Input:
Bill table:
+----------+-------+------------+--------+
| guest_id | guest | settled_on | charge |
+----------+-------+------------+--------+
| 1        | Ren   | 2024-06-01 | 30     |
| 2        | Ada   | 2024-06-02 | 25     |
| 3        | Lev   | 2024-06-03 | 45     |
| 4        | Mona  | 2024-06-04 | 20     |
| 5        | Kip   | 2024-06-05 | 60     |
| 6        | Faye  | 2024-06-06 | 15     |
| 7        | Gil   | 2024-06-07 | 50     |
+----------+-------+------------+--------+
Output:
+------------+--------+----------------+
| settled_on | charge | average_charge |
+------------+--------+----------------+
| 2024-06-07 | 245    | 35.0           |
+------------+--------+----------------+
Explanation:
The stall's first complete week ends on 2024-06-07 with a total take
of 245 over the seven days, an average of 35.0 per day. Earlier days
have no full seven-day window behind them, so they produce no row.
```

Write your solution as a single `SELECT` query returning `settled_on`,
`charge`, and `average_charge`.
