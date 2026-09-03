# Longest Unbroken Streaks

## Description

Table: `DailyLog`

| Column Name | Type    |
| ----------- | ------- |
| member_id   | int     |
| log_date    | date    |
| event       | varchar |

(`member_id`, `log_date`, `event`) is the primary key (unique
combination) for this table. Each row records one event a member
triggered on one calendar day; a member may log several different
events on the same day.

A member holds an unbroken streak over a stretch of consecutive
calendar days when:

- Exactly one event was logged on every day of the stretch (a day
  carrying two or more events can never be part of one).
- The same event was logged on all of those days.

A streak must span at least 5 consecutive days to count. Members may
hold several qualifying streaks — across different events or different
date ranges — but only their longest one is reported.

Return, for every member with a qualifying streak, that streak's event,
its length in days, and its first and last calendar dates, ordered by
`run_length` in descending order, then by `member_id` in ascending
order.

Each testcase's `dataset` seeds the `DailyLog` table: its script inserts
the testcase's `DailyLog` rows before your query runs. The result format
is in the following example.

### Example 1

```text
Input:
DailyLog table:
+-----------+------------+--------+
| member_id | log_date   | event  |
+-----------+------------+--------+
| 6         | 2025-03-01 | browse |
| 6         | 2025-03-02 | browse |
| 6         | 2025-03-03 | browse |
| 6         | 2025-03-04 | browse |
| 6         | 2025-03-05 | browse |
| 6         | 2025-03-06 | browse |
| 6         | 2025-03-07 | browse |
| 6         | 2025-03-08 | browse |
| 6         | 2025-04-01 | draft  |
| 6         | 2025-04-02 | draft  |
| 6         | 2025-04-03 | draft  |
| 6         | 2025-04-04 | draft  |
| 9         | 2025-02-20 | reply  |
| 9         | 2025-02-21 | reply  |
| 9         | 2025-02-22 | reply  |
| 9         | 2025-02-23 | reply  |
| 9         | 2025-02-24 | reply  |
| 12        | 2025-01-05 | mute   |
| 12        | 2025-01-06 | mute   |
| 12        | 2025-01-07 | mute   |
| 12        | 2025-01-07 | unmute |
| 12        | 2025-01-08 | mute   |
| 12        | 2025-01-09 | mute   |
| 3         | 2025-06-01 | pin    |
| 3         | 2025-06-02 | pin    |
| 3         | 2025-06-03 | pin    |
| 3         | 2025-06-06 | pin    |
| 3         | 2025-06-07 | pin    |
+-----------+------------+--------+
Output:
+-----------+--------+------------+------------+------------+
| member_id | event  | run_length | start_day  | end_day    |
+-----------+--------+------------+------------+------------+
| 6         | browse | 8          | 2025-03-01 | 2025-03-08 |
| 9         | reply  | 5          | 2025-02-20 | 2025-02-24 |
+-----------+--------+------------+------------+------------+
Explanation: Member 6 logged browse on the 8 consecutive days from
March 1 through March 8; their April draft run lasts only 4 days, so
the browse streak is their longest. Member 9 sits exactly on the
5-day threshold and qualifies. Member 12 logged both mute and unmute
on January 7, which disqualifies that day and splits the muted days
into runs of 2 and 2 — too short to qualify. Member 3's pin days are
split by the gap between June 3 and June 6, leaving no run of 5.
```

Write your solution as a single `SELECT` query returning `member_id`,
`event`, `run_length`, `start_day`, and `end_day` for every qualifying
member, ordered by `run_length` descending then `member_id` ascending.
