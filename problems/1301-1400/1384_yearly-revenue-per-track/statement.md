# Yearly Revenue per Track

## Description

Table: `Tracks`

| Column Name | Type    |
| ----------- | ------- |
| track_id    | int     |
| track_name  | varchar |

`track_id` is the primary key (column with unique values) for this table.
`track_name` is the name of the track.

Table: `Licenses`

| Column Name   | Type |
| ------------- | ---- |
| track_id      | int  |
| licensed_from | date |
| licensed_to   | date |
| daily_rate    | int  |

`track_id` is the primary key (column with unique values) for this table.
`licensed_from` and `licensed_to` are the inclusive start and end dates of
one licensing period, and `daily_rate` is the revenue the track earns for
each day of that period.
Every licensing period lies between 2018 and 2020.

Write a query that reports how much revenue each track earned in each
year, with columns `track_id`, `track_name`, `report_year` (as an
integer), and `total_amount`. A year's amount is `daily_rate` multiplied
by the number of days of the licensing period that fall inside that year.

Return the result table ordered by `track_id` and `report_year`.

### Example 1

```text
Input:
Tracks table:
+----------+-------------+
| track_id | track_name  |
+----------+-------------+
| 1        | Aurora      |
| 2        | Ballad Nine |
| 3        | Cascade     |
+----------+-------------+
Licenses table:
+----------+---------------+-------------+------------+
| track_id | licensed_from | licensed_to | daily_rate |
+----------+---------------+-------------+------------+
| 1        | 2019-03-10    | 2019-04-19  | 5          |
| 2        | 2018-11-20    | 2020-01-15  | 4          |
| 3        | 2020-05-01    | 2020-05-01  | 12         |
+----------+---------------+-------------+------------+
Output:
+----------+-------------+-------------+--------------+
| track_id | track_name  | report_year | total_amount |
+----------+-------------+-------------+--------------+
| 1        | Aurora      | 2019        | 205          |
| 2        | Ballad Nine | 2018        | 168          |
| 2        | Ballad Nine | 2019        | 1460         |
| 2        | Ballad Nine | 2020        | 60           |
| 3        | Cascade     | 2020        | 12           |
+----------+-------------+-------------+--------------+
Explanation: Aurora was licensed from 2019-03-10 to 2019-04-19, a stretch
of 41 days, so it earned 41 * 5 = 205. Ballad Nine was licensed from
2018-11-20 to 2020-01-15, which covers 42, 365 and 15 days in 2018, 2019
and 2020, worth 168, 1460 and 60 at its rate of 4 per day. Cascade ran on
the single day 2020-05-01 and earned 12.
```
