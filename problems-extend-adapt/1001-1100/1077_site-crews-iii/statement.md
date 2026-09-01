# Site Crews III

## Description

A building firm tracks who works where. `Site` holds one row per
assignment; `Worker` carries each worker's record.

Table: `Site`

| Column Name | Type |
| ----------- | ---- |
| site_id     | int  |
| worker_id   | int  |

`(site_id, worker_id)` is the primary key (combination of columns
with unique values) of this table. `worker_id` refers to a row of
`Worker`. Each row records that the worker with `worker_id` is
assigned to the site with `site_id`.

Table: `Worker`

| Column Name  | Type    |
| ------------ | ------- |
| worker_id    | int     |
| name         | varchar |
| tenure_years | int     |

`worker_id` is the primary key (column with unique values) of this
table. Each row describes one worker.

Each test's dataset seeds the `Site` and `Worker` tables before your
query runs.

Report the most senior crew members: for every site, the workers
whose `tenure_years` is the highest at that site. If several workers
tie for the top tenure at a site, report all of them.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Site table:
+---------+-----------+
| site_id | worker_id |
+---------+-----------+
| 6       | 1         |
| 6       | 2         |
| 6       | 3         |
| 13      | 1         |
| 13      | 4         |
+---------+-----------+
Worker table:
+-----------+-------+--------------+
| worker_id | name  | tenure_years |
+-----------+-------+--------------+
| 1         | Sana  | 8            |
| 2         | Felix | 3            |
| 3         | Petra | 8            |
| 4         | Jonas | 5            |
+-----------+-------+--------------+
Output:
+---------+-----------+
| site_id | worker_id |
+---------+-----------+
| 6       | 1         |
| 6       | 3         |
| 13      | 1         |
+---------+-----------+
Explanation: At site 6, Sana and Petra share the top tenure of 8
years, so both are reported; Felix is not. At site 13, Sana's 8 years
tops Jonas's 5.
```

Write your solution as a single `SELECT` query returning `site_id`
and `worker_id` for the most senior worker(s) at every site, in any
order.
