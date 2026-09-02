# Volunteers Who Fell Short

## Description

Table: `Volunteers`

| Column Name  | Type |
| ------------ | ---- |
| volunteer_id | int  |
| pledge_hours | int  |

`volunteer_id` is a column with unique values for this table.

Each row holds a volunteer's id and the minimum number of hours they
pledged to work this month.

Table: `Shifts`

| Column Name  | Type     |
| ------------ | -------- |
| volunteer_id | int      |
| clock_in     | datetime |
| clock_out    | datetime |

`(volunteer_id, clock_in, clock_out)` is the primary key (combination of
columns with unique values) for this table.

Each row is one work session: `clock_in` is when the volunteer started
and `clock_out` is when they stopped. All times fall in October 2022,
and `clock_out` may land on the day after `clock_in` — a session that
runs past midnight.

Volunteers serve in sessions. A session's length is its minute count
rounded up: a session of 51 minutes and 2 seconds counts as 52 minutes.
A volunteer's total is the sum of their sessions' rounded-up minutes.

Write a solution to report the ids of the volunteers who fell short of
their pledge — whose total worked minutes are fewer than their pledged
hours. Volunteers with no sessions at all have worked nothing and fall
short as well.

Return the result table in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Volunteers table:
+--------------+--------------+
| volunteer_id | pledge_hours |
+--------------+--------------+
| 1            | 3            |
| 2            | 8            |
| 3            | 1            |
+--------------+--------------+
Shifts table:
+--------------+---------------------+---------------------+
| volunteer_id | clock_in            | clock_out           |
+--------------+---------------------+---------------------+
| 1            | 2022-10-03 08:00:00 | 2022-10-03 09:30:10 |
| 1            | 2022-10-05 22:59:00 | 2022-10-05 23:00:00 |
| 2            | 2022-10-10 07:00:00 | 2022-10-10 11:00:01 |
| 2            | 2022-10-11 07:00:00 | 2022-10-11 11:00:00 |
+--------------+---------------------+---------------------+
Output:
+--------------+
| volunteer_id |
+--------------+
| 1            |
| 3            |
+--------------+
Explanation: Volunteer 1 served twice: 90 minutes and 10 seconds rounds
up to 91 minutes, and the one-minute session rounds to 1, for a total
of 92 minutes — short of their 3 pledged hours (180 minutes).
Volunteer 2 served 4 hours and 1 second (241 minutes after rounding)
plus exactly 4 hours (240 minutes), totalling 481 minutes against a
pledge of 480, so they keep their standing. Volunteer 3 never showed
up and falls short of their single pledged hour.
```

### Example 2

```text
Input:
Volunteers table:
+--------------+--------------+
| volunteer_id | pledge_hours |
+--------------+--------------+
| 7            | 2            |
| 8            | 1            |
+--------------+--------------+
Shifts table:
+--------------+---------------------+---------------------+
| volunteer_id | clock_in            | clock_out           |
+--------------+---------------------+---------------------+
| 7            | 2022-10-20 23:30:00 | 2022-10-21 01:30:00 |
| 8            | 2022-10-09 10:00:00 | 2022-10-09 10:00:59 |
+--------------+---------------------+---------------------+
Output:
+--------------+
| volunteer_id |
+--------------+
| 8            |
+--------------+
Explanation: Volunteer 7's session crosses midnight and lasts exactly
120 minutes, meeting the 2-hour pledge precisely, so they are not
reported. Volunteer 8's 59-second session rounds up to a single minute,
far short of 60.
```
