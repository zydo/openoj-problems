# Uptime and Outage Streaks

## Description

Table: `Outages`

| Column Name | Type |
| ----------- | ---- |
| outage_day  | date |

`outage_day` is the primary key (column with unique values) for this table.
Each row is a day on which the scheduled run failed.

Table: `Passes`

| Column Name | Type |
| ----------- | ---- |
| pass_day    | date |

`pass_day` is the primary key (column with unique values) for this table.
Each row is a day on which the scheduled run succeeded.

A background service kicks off exactly one run every day, and every run
either fails or succeeds, independently of the others. Each day therefore
appears in exactly one of the two tables.

Write a query that walks through the year from `2019-01-01` to `2019-12-31`
and merges consecutive days with the same outcome into maximal streaks. Each
streak is reported as its `run_state` — `'failed'` when the days in it
failed, `'succeeded'` when they succeeded — together with its first and last
day as `start_day` and `end_day`. Days outside the year are not part of any
streak.

Return the result table ordered by `start_day`.

The result format is in the following example.

### Example 1

```text
Input:
Outages table:
+------------+
| outage_day |
+------------+
| 2018-12-28 |
| 2018-12-29 |
| 2019-03-11 |
| 2019-03-12 |
| 2019-07-04 |
+------------+
Passes table:
+------------+
| pass_day   |
+------------+
| 2018-12-30 |
| 2018-12-31 |
| 2019-03-08 |
| 2019-03-09 |
| 2019-03-10 |
| 2019-03-13 |
| 2019-07-05 |
| 2019-07-06 |
+------------+
Output:
+-----------+------------+------------+
| run_state | start_day  | end_day    |
+-----------+------------+------------+
| succeeded | 2019-03-08 | 2019-03-10 |
| failed    | 2019-03-11 | 2019-03-12 |
| succeeded | 2019-03-13 | 2019-03-13 |
| failed    | 2019-07-04 | 2019-07-04 |
| succeeded | 2019-07-05 | 2019-07-06 |
+-----------+------------+------------+
Explanation: The four December days fall outside the year and are ignored.
March opens with a three-day passing streak, flips to a two-day outage, then
passes again on March 13. July 4 is a one-day outage bookended by two
passing days, and the year closes mid-streak on July 6.
```
