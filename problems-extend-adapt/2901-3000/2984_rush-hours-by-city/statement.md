# Rush Hours By City

## Description

Table: `Dials`

| Column Name | Type     |
| ----------- | -------- |
| caller_id   | int      |
| receiver_id | int      |
| dialed_at   | datetime |
| city        | varchar  |

`(caller_id, receiver_id, dialed_at)` is the primary key (a combination
of columns with unique values) for this table. Each row records one
phone dial: who called, who picked up, when it happened, and in which
city.

For every city, find its rush hours — the hours of the day that carry
the most dials for that city. When several hours tie for a city's
highest count, every one of those hours is a rush hour for that city.

The hour of a dial is the hour-of-day component of `dialed_at`, a value
from 0 through 23; dials made in the same hour on different dates count
toward the same hour group.

Return columns `city`, `peak_hour`, and `dial_count`, with the rows
ordered by `peak_hour` descending and then by `city` descending.

Every testcase carries its own `dataset`: the DDL loads the `Dials`
table with that testcase's rows. The example below shows the result
format.

### Example 1

```text
Input:
Dials table:
+-----------+-------------+---------------------+--------+
| caller_id | receiver_id | dialed_at           | city   |
+-----------+-------------+---------------------+--------+
| 3         | 9           | 2022-03-04 08:12:40 | Denver |
| 9         | 3           | 2022-03-09 08:55:03 | Denver |
| 5         | 2           | 2022-03-17 08:30:00 | Denver |
| 2         | 7           | 2022-03-02 19:41:19 | Denver |
| 7         | 5           | 2022-03-21 19:04:56 | Denver |
| 4         | 1           | 2022-03-11 10:22:31 | Reno   |
| 1         | 4           | 2022-03-25 16:07:48 | Reno   |
+-----------+-------------+---------------------+--------+
Output:
+-------+-----------+------------+
| city  | peak_hour | dial_count |
+-------+-----------+------------+
| Reno  | 16        | 1          |
| Reno  | 10        | 1          |
| Denver| 8         | 3          |
+-------+-----------+------------+
Explanation:
For Denver:
  - Its three 08:xx dials fall on three different dates but share the
    hour of day, so hour 8 holds 3 dials — the city maximum. The 19:xx
    pair only reaches 2, so it is not a rush hour.
For Reno:
  - Hours 16 and 10 hold one dial each, tying for the city maximum, so
    both are rush hours.
The output is ordered by peak_hour descending, then city descending.
```

### Example 2

```text
Input:
Dials table:
+-----------+-------------+---------------------+--------+
| caller_id | receiver_id | dialed_at           | city   |
+-----------+-------------+---------------------+--------+
| 10        | 20          | 2023-06-01 05:09:12 | Umbra  |
| 20        | 10          | 2023-06-02 05:44:00 | Umbra  |
| 11        | 21          | 2023-06-05 05:15:15 | Umbra  |
| 21        | 11          | 2023-06-06 02:02:02 | Umbra  |
| 22        | 12          | 2023-06-07 02:30:30 | Umbra  |
| 12        | 22          | 2023-06-08 23:59:59 | Vesper |
| 13        | 23          | 2023-06-09 09:00:00 | Vesper |
+-----------+-------------+---------------------+--------+
Output:
+--------+-----------+------------+
| city   | peak_hour | dial_count |
+--------+-----------+------------+
| Vesper | 23        | 1          |
| Vesper | 9         | 1          |
| Umbra  | 5         | 3          |
+--------+-----------+------------+
Explanation:
For Umbra:
  - Hour 5 holds 3 dials, more than any other hour (the 02:xx pair
    only reaches 2), so it is the city's single rush hour.
For Vesper:
  - Hours 23 and 9 hold one dial each and tie for the city maximum, so
    both are rush hours.
```

Write your answer as one `SELECT` query producing the three columns
`city`, `peak_hour`, and `dial_count`, in that order, with the rows
ordered by `peak_hour` and then `city`, both descending.
