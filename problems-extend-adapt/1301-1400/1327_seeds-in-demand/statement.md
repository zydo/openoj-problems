# Seeds in Demand

## Description

A lending library swaps ornamental seeds instead of books. Two tables
describe its stock and its traffic.

Table: `Seeds`

| Column Name | Type    |
| ----------- | ------- |
| seed_id     | int     |
| seed_name   | varchar |
| seed_family | varchar |

`seed_id` is the primary key (column with unique values) for this
table.
This table describes the varieties the library stocks.

Table: `Checkouts`

| Column Name | Type |
| ----------- | ---- |
| seed_id     | int  |
| taken_on    | date |
| quantity    | int  |

This table may have duplicate rows.
`seed_id` is a foreign key (reference column) to the Seeds table.
`quantity` is the number of packets taken on `taken_on`.

Find the names of the seeds for which at least 100 packets were taken
in February 2020, together with that number of packets.

Return the result rows in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Seeds table:
+---------+---------------+-------------+
| seed_id | seed_name     | seed_family |
+---------+---------------+-------------+
| 1       | Marigold      | Flower      |
| 2       | Cherry Tomato | Vegetable   |
| 3       | Basil         | Herb        |
| 4       | Snap Pea      | Vegetable   |
| 5       | Lavender      | Herb        |
+---------+---------------+-------------+
Checkouts table:
+---------+------------+----------+
| seed_id | taken_on   | quantity |
+---------+------------+----------+
| 1       | 2020-02-03 | 60       |
| 1       | 2020-02-21 | 40       |
| 2       | 2020-01-15 | 90       |
| 2       | 2020-02-08 | 99       |
| 3       | 2020-02-14 | 7        |
| 3       | 2020-02-28 | 3        |
| 4       | 2020-03-02 | 120      |
| 5       | 2020-02-10 | 50       |
| 5       | 2020-02-25 | 60       |
| 5       | 2020-03-05 | 80       |
+---------+------------+----------+
Output:
+-----------+---------+
| seed_name | packets |
+-----------+---------+
| Marigold  | 100     |
| Lavender  | 110     |
+-----------+---------+
Explanation:
Seed 1 (Marigold) had 60 + 40 = 100 packets taken in February —
exactly the threshold, so it qualifies.
Seed 2 (Cherry Tomato) reached only 99 packets within February; its
January handout does not count.
Seed 3 (Basil) reached just 7 + 3 = 10 packets.
Seed 4 (Snap Pea) was never taken in February 2020 — its 120 packets
all went out in March.
Seed 5 (Lavender) reached 50 + 60 = 110 packets in February; its March
handout is outside the month.
```

### Example 2

```text
Input:
Seeds table:
+---------+-----------+-------------+
| seed_id | seed_name | seed_family |
+---------+-----------+-------------+
| 9       | Blue Sage | Herb        |
+---------+-----------+-------------+
Checkouts table:
+---------+------------+----------+
| seed_id | taken_on   | quantity |
+---------+------------+----------+
| 9       | 2020-02-05 | 44       |
| 9       | 2020-02-26 | 55       |
+---------+------------+----------+
Output:
+-----------+---------+
| seed_name | packets |
+-----------+---------+
+-----------+---------+
Explanation:
Blue Sage was taken 44 + 55 = 99 times in February — one packet short
of the threshold, so nothing qualifies.
```

Write your solution as a single `SELECT` query returning `seed_name`
and `packets`.
