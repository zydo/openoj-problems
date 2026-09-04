# Site Crews II

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

Report every site whose crew is the largest — the sites with the most
workers. Several sites can tie for the largest crew; report them all.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Site table:
+---------+-----------+
| site_id | worker_id |
+---------+-----------+
| 12      | 8         |
| 7       | 3         |
| 7       | 4         |
| 7       | 5         |
| 15      | 8         |
| 15      | 9         |
+---------+-----------+
Worker table:
+-----------+-------+--------------+
| worker_id | name  | tenure_years |
+-----------+-------+--------------+
| 3         | Ines  | 2            |
| 4         | Dara  | 7            |
| 5         | Pavel | 4            |
| 8         | Noor  | 5            |
| 9         | Hugo  | 1            |
+-----------+-------+--------------+
Output:
+---------+
| site_id |
+---------+
| 7       |
+---------+
Explanation: Site 7 has three workers, site 15 has two, and site 12
has one. Site 7 alone has the largest crew.
```

Write your solution as a single `SELECT` query returning `site_id`
for every largest-crew site, in any order.
