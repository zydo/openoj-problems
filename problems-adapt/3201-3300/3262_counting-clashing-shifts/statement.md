# Counting Clashing Shifts

## Description

Table: `ShiftLog`

| Column Name | Type |
| ----------- | ---- |
| worker_id   | int  |
| clock_in    | time |
| clock_out   | time |

(`worker_id`, `clock_in`) is the unique key for this table. Each row is
one shift one worker worked that day: when it started and when it
ended.

Two shifts clash when they overlap in time — one shift's `clock_out`
falls strictly later than the other shift's `clock_in`. Write a
solution that counts, for every worker, how many pairs of that worker's
shifts clash. A worker whose shifts never clash is left out of the
result entirely.

Return the result table ordered by `worker_id` ascending.

The judge runs your query against a `ShiftLog` table already seeded with
the testcase's rows — every case brings its own `dataset`. The result
format is in the following example.

### Example 1

```text
Input:
ShiftLog table:
+-----------+----------+-----------+
| worker_id | clock_in | clock_out |
+-----------+----------+-----------+
| 3         | 07:00:00 | 09:30:00  |
| 3         | 08:30:00 | 11:00:00  |
| 3         | 10:00:00 | 12:30:00  |
| 5         | 06:00:00 | 14:00:00  |
| 5         | 09:00:00 | 10:00:00  |
| 5         | 13:00:00 | 15:00:00  |
| 5         | 14:30:00 | 16:00:00  |
| 6         | 08:00:00 | 10:00:00  |
| 6         | 10:00:00 | 12:00:00  |
| 6         | 12:00:00 | 14:00:00  |
| 9         | 11:00:00 | 13:00:00  |
| 9         | 12:30:00 | 15:30:00  |
+-----------+----------+-----------+
Output:
+-----------+-----------------+
| worker_id | clashing_shifts |
+-----------+-----------------+
| 3         | 2               |
| 5         | 3               |
| 9         | 1               |
+-----------+-----------------+
Explanation: Worker 3's first shift (07:00–09:30) clashes with the
second (08:30–11:00), and the second clashes with the third
(10:00–12:30); the first and third do not touch — 2 clashing pairs.
Worker 5's long 06:00–14:00 shift clashes with both the 09:00–10:00 and
the 13:00–15:00 shift, and that 13:00–15:00 shift also clashes with
14:30–16:00 — 3 clashing pairs. Worker 6's shifts hand over back to
back (each ends exactly when the next starts), and an exact handover is
not a clash, so worker 6 has no clashing pair and does not appear.
Worker 9's two shifts overlap once — 1 clashing pair.
```

Write your solution as a single `SELECT` query returning two columns —
`worker_id` and `clashing_shifts` — one row for every worker with at
least one clashing pair of shifts. Shifts that merely touch, one ending
exactly when the next begins, do not clash.
