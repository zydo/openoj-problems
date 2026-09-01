# Site Crews I

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
table. `tenure_years` is never `NULL`. Each row describes one worker.

Each test's dataset seeds the `Site` and `Worker` tables before your
query runs.

Report the average tenure of the crew at every site, rounded to two
decimal places.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Site table:
+---------+-----------+
| site_id | worker_id |
+---------+-----------+
| 4       | 2         |
| 4       | 5         |
| 4       | 7         |
| 9       | 2         |
| 9       | 8         |
| 9       | 11        |
| 9       | 3         |
+---------+-----------+
Worker table:
+-----------+-------+--------------+
| worker_id | name  | tenure_years |
+-----------+-------+--------------+
| 2         | Mira  | 5            |
| 3         | Omar  | 6            |
| 5         | Tomas | 1            |
| 7         | Aiko  | 4            |
| 8         | Ravi  | 3            |
| 11        | Lena  | 2            |
+-----------+-------+--------------+
Output:
+---------+----------------+
| site_id | average_tenure |
+---------+----------------+
| 4       | 3.33           |
| 9       | 4.00           |
+---------+----------------+
Explanation: Site 4's crew of Mira, Tomas, and Aiko averages
(5 + 1 + 4) / 3 = 3.33 years. Site 9's four workers average
(5 + 3 + 2 + 6) / 4 = 4.00 years.
```

Write your solution as a single `SELECT` query returning `site_id`
and `average_tenure` — that site's mean `tenure_years`, rounded to
two decimal places — for every site, in any order.
