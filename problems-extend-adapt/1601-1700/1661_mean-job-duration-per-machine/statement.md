# Mean Job Duration per Machine

## Description

A fabrication line tracks its work in a single table: every machine
runs a set of numbered jobs, and each job logs two rows — one when it
starts and one when it ends.

Table: `Jobs`

| Column Name | Type  |
| ----------- | ----- |
| machine_id  | int   |
| job_id      | int   |
| phase       | enum  |
| moment      | float |

`(machine_id, job_id, phase)` is the primary key (a combination of
columns with unique values) of this table. `machine_id` identifies a
machine on the line, `job_id` identifies one of that machine's jobs,
`phase` is a category of type `('start', 'end')`, and `moment` is a
float giving the time in seconds at which that phase happened.

A job's duration is its `'end'` moment minus its `'start'` moment.
The `'start'` moment never comes after the `'end'` moment, and every
`(machine_id, job_id)` pair is guaranteed to carry exactly one row of
each phase.

Report each machine's mean job duration — the total duration of all
its jobs divided by how many jobs it ran — rounded to three decimal
places, returned as `avg_seconds` alongside `machine_id`.

The result table may be returned in any order.

Each testcase's `dataset` seeds the `Jobs` table: its script inserts
the testcase's `Jobs` rows before your query runs. The result format
is in the following example.

### Example 1

```text
Input:
Jobs table:
+------------+--------+-------+--------+
| machine_id | job_id | phase | moment |
+------------+--------+-------+--------+
| 5          | 0      | start | 0.25   |
| 5          | 0      | end   | 1.75   |
| 8          | 0      | start | 0.5    |
| 8          | 0      | end   | 2.75   |
| 5          | 1      | start | 2.0    |
| 5          | 1      | end   | 3.5    |
| 12         | 0      | start | 1.25   |
| 12         | 0      | end   | 1.5    |
| 8          | 1      | start | 3.0    |
| 8          | 1      | end   | 3.0    |
| 5          | 2      | start | 4.0    |
| 5          | 2      | end   | 4.5    |
+------------+--------+-------+--------+
Output:
+------------+-------------+
| machine_id | avg_seconds |
+------------+-------------+
| 5          | 1.167       |
| 8          | 1.125       |
| 12         | 0.25        |
+------------+-------------+
Explanation:
Machine 5 ran three jobs lasting 1.5, 1.5, and 0.5 seconds, for a
mean of 3.5 / 3 = 1.167 seconds. Machine 8 ran two jobs lasting 2.25
and 0.0 seconds, for a mean of 2.25 / 2 = 1.125 seconds. Machine 12
ran a single job lasting 1.5 - 1.25 = 0.25 seconds, so its mean is
0.25 seconds.
```

### Example 2

```text
Input:
Jobs table:
+------------+--------+-------+--------+
| machine_id | job_id | phase | moment |
+------------+--------+-------+--------+
| 2          | 0      | start | 0.5    |
| 2          | 0      | end   | 1.0    |
| 3          | 0      | start | 0.25   |
| 3          | 0      | end   | 0.25   |
| 2          | 1      | start | 1.0    |
| 2          | 1      | end   | 2.0    |
| 2          | 2      | start | 2.0    |
| 2          | 2      | end   | 3.5    |
+------------+--------+-------+--------+
Output:
+------------+-------------+
| machine_id | avg_seconds |
+------------+-------------+
| 2          | 1.0         |
| 3          | 0.0         |
+------------+-------------+
Explanation:
Machine 2's three jobs last 0.5, 1.0, and 1.5 seconds, averaging
3.0 / 3 = 1.0 second. Machine 3's only job starts and ends at the
same moment, so its duration — and therefore its machine's mean — is
0.0 seconds.
```

Write your solution as a single `SELECT` query returning `machine_id`
and `avg_seconds` — the average of the `'end'` minus `'start'` moment
differences across each machine's jobs, rounded to three decimal
places — for every machine, in any order.
