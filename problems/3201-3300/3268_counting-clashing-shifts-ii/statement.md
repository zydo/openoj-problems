# Counting Clashing Shifts II

## Description

Table: `ShiftLog`

| Column Name | Type     |
| ----------- | -------- |
| worker_id   | int      |
| clock_in    | datetime |
| clock_out   | datetime |

(`worker_id`, `clock_in`) is the unique key for this table. Each row is
one shift one worker worked: when it started and when it ended, date
and time together. A shift may run past midnight into the next day.

Write a solution that analyzes clashing shifts for every worker. Two
shifts clash when they start on the same date and one shift's
`clock_out` falls strictly later than the other shift's `clock_in`. For
each worker, report:

- `max_clashing_shifts`: the largest number of that worker's shifts
  running at the same moment.
- `total_clash_duration`: the summed length, in minutes, of every
  pairwise overlap.

Every worker with at least one shift is reported — a worker with a
single shift counts as a maximum of one and a total of zero.

Return the result table ordered by `worker_id` ascending.

The judge runs your query against a `ShiftLog` table already seeded with
the testcase's rows — every case brings its own `dataset`. The result
format is in the following example.

### Example 1

```text
Input:
ShiftLog table:
+-----------+---------------------+---------------------+
| worker_id | clock_in            | clock_out           |
+-----------+---------------------+---------------------+
| 2         | 2024-06-10 09:00:00 | 2024-06-10 10:00:00 |
| 2         | 2024-06-10 10:00:00 | 2024-06-10 11:00:00 |
| 4         | 2024-06-10 08:00:00 | 2024-06-10 12:00:00 |
| 4         | 2024-06-10 11:00:00 | 2024-06-10 15:00:00 |
| 4         | 2024-06-10 15:00:00 | 2024-06-10 19:00:00 |
| 7         | 2024-06-11 09:00:00 | 2024-06-11 17:00:00 |
| 7         | 2024-06-12 22:00:00 | 2024-06-13 02:00:00 |
| 7         | 2024-06-12 23:30:00 | 2024-06-12 23:50:00 |
| 7         | 2024-06-13 01:00:00 | 2024-06-13 03:00:00 |
+-----------+---------------------+---------------------+
Output:
+-----------+----------------------+----------------------+
| worker_id | max_clashing_shifts  | total_clash_duration |
+-----------+----------------------+----------------------+
| 2         | 1                    | 0                    |
| 4         | 2                    | 60                   |
| 7         | 2                    | 20                   |
+-----------+----------------------+----------------------+
Explanation: Worker 2's two shifts hand over exactly at 10:00, and an
exact handover is not a clash — the peak is 1 with no overlap minutes.
Worker 4's 08:00–12:00 and 11:00–15:00 shifts run together for one
hour, so at 11:30 two shifts are in progress and the overlap total is
60 minutes; the 15:00–19:00 shift only touches the second one and adds
nothing. Worker 7 has a quiet single shift on June 11, then a night
shift 22:00–02:00 and a short 23:30–23:50 shift on June 12: within that
date the peak is 2 and the overlap is 20 minutes. The 01:00–03:00
overlap with the overnight shift physically happens after midnight, but
the two shifts started on different dates, so the same-date rule keeps
them apart.
```

Write your solution as a single `SELECT` query returning three columns
— `worker_id`, `max_clashing_shifts`, and `total_clash_duration` — one
row per worker, ordered by `worker_id` ascending. A shift that ends
exactly when another starts does not clash with it, since `clock_out`
must be strictly later than the other shift's `clock_in`. The judge
compares result rows as an unordered multiset, so row order does not
affect correctness — produce the demanded order anyway.
