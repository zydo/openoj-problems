# Logged Hours and Peak Overlap

## Description

Table: `Stints`

| Column Name | Type     |
| ----------- | -------- |
| stint_id    | int      |
| worker_id   | int      |
| started_at  | datetime |
| ended_at    | datetime |

(stint_id, worker_id) is the primary key (combination of columns with unique
values) for this table.
Each row is one work stint: its own identifier, the worker who ran it, and
the moments it started and ended.

For every worker, add up the time they were actually working — stretches
covered by two or more overlapping stints count once, not twice — and round
that total down to a whole number of hours. Also report how many stints of
theirs were running at the same instant at the busiest moment of their day.

Return the result table ordered by `worker_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Stints` before your query executes. The result format is in the following
examples.

### Example 1

```text
Input:
Stints table:
+----------+-----------+---------------------+---------------------+
| stint_id | worker_id | started_at          | ended_at            |
+----------+-----------+---------------------+---------------------+
| 1        | 501       | 2024-03-04 09:00:00 | 2024-03-04 10:30:00 |
| 2        | 501       | 2024-03-04 10:00:00 | 2024-03-04 11:45:00 |
| 3        | 501       | 2024-03-04 13:00:00 | 2024-03-04 14:40:00 |
| 4        | 502       | 2024-03-04 08:30:00 | 2024-03-04 12:15:00 |
| 5        | 502       | 2024-03-04 09:00:00 | 2024-03-04 10:00:00 |
| 6        | 502       | 2024-03-04 09:30:00 | 2024-03-04 11:30:00 |
| 7        | 502       | 2024-03-04 11:00:00 | 2024-03-04 13:00:00 |
| 8        | 503       | 2024-03-04 10:00:00 | 2024-03-04 10:20:00 |
| 9        | 503       | 2024-03-04 15:00:00 | 2024-03-04 16:30:00 |
+----------+-----------+---------------------+---------------------+
Output:
+-----------+--------------+-----------+
| worker_id | hours_logged | peak_load |
+-----------+--------------+-----------+
| 501       | 4            | 2         |
| 502       | 4            | 3         |
| 503       | 1            | 1         |
+-----------+--------------+-----------+
Explanation: Worker 501's first two stints share the half hour from 10:00
to 10:30, so their time counts once: 165 + 100 = 265 minutes, which floors
to 4 hours; two stints were open at once during that half hour. Worker 502's
four stints form one unbroken stretch from 08:30 to 13:00 — 270 minutes,
4 hours after flooring — and three of them (4, 5, 6) run simultaneously at
09:30, so the peak is 3. Worker 503's two stints never touch: 20 + 90 = 110
minutes floors to 1 hour, and only one stint was ever open.
```

### Example 2

```text
Input:
Stints table:
+----------+-----------+---------------------+---------------------+
| stint_id | worker_id | started_at          | ended_at            |
+----------+-----------+---------------------+---------------------+
| 10       | 601       | 2024-03-05 23:00:00 | 2024-03-06 02:30:00 |
| 11       | 601       | 2024-03-06 02:15:00 | 2024-03-06 04:45:00 |
| 12       | 602       | 2024-03-05 21:10:00 | 2024-03-05 22:40:00 |
| 13       | 602       | 2024-03-06 01:00:00 | 2024-03-06 03:20:00 |
+----------+-----------+---------------------+---------------------+
Output:
+-----------+--------------+-----------+
| worker_id | hours_logged | peak_load |
+-----------+--------------+-----------+
| 601       | 5            | 2         |
| 602       | 3            | 1         |
+-----------+--------------+-----------+
Explanation: Worker 601's stints overlap across midnight for fifteen
minutes, so the counted time is one run from 23:00 to 04:45 — 345 minutes,
which floors to 5 hours — with a peak of 2 during the overlap. Worker 602's
two stints sit hours apart and sum to 230 minutes, flooring to 3 hours,
with never more than one open at a time.
```

Write your solution as a single `SELECT` query returning three columns —
`worker_id`, `hours_logged`, and `peak_load` — where `hours_logged` counts
overlapping stints only once and floors the total to whole hours, and
`peak_load` is the largest number of the worker's stints running at the
same moment — one row per worker, ordered by `worker_id` ascending.
