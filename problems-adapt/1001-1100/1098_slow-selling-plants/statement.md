# Slow-Selling Plants

## Description

An online nursery keeps its catalog in `Plants` and every dispatched
order in `Shipments`.

Table: `Plants`

| Column Name | Type    |
| ----------- | ------- |
| plant_id    | int     |
| name        | varchar |
| listed_on   | date    |

`plant_id` is the primary key (column with unique values) of this
table. Each row gives the name of one plant the nursery sells and the
day it was listed in the catalog.

Table: `Shipments`

| Column Name | Type |
| ----------- | ---- |
| shipment_id | int  |
| plant_id    | int  |
| quantity    | int  |
| shipped_on  | date |

`shipment_id` is the primary key (column with unique values) of this
table. `plant_id` is a foreign key (reference column) to the `Plants`
table. Each row records one dispatched order: how many units of which
plant shipped, and on what day.

Assume today is `2019-06-23`.

Report the plants that have shipped fewer than 10 units in the last
year — between `2018-06-23` and `2019-06-23` inclusive — ignoring any
plant that was listed less than one month ago.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Plants table:
+----------+-----------------+------------+
| plant_id | name            | listed_on  |
+----------+-----------------+------------+
| 1        | Monstera        | 2015-03-14 |
| 2        | Fiddle-Leaf Fig | 2018-11-02 |
| 3        | Maidenhair Fern | 2019-06-15 |
| 4        | Snake Plant     | 2019-05-24 |
| 5        | Peace Lily      | 2012-07-30 |
+----------+-----------------+------------+
Shipments table:
+-------------+----------+----------+------------+
| shipment_id | plant_id | quantity | shipped_on |
+-------------+----------+----------+------------+
| 1           | 1        | 3        | 2018-08-05 |
| 2           | 1        | 4        | 2019-01-12 |
| 3           | 2        | 12       | 2019-02-20 |
| 4           | 3        | 6        | 2019-06-18 |
| 5           | 4        | 9        | 2019-06-01 |
| 6           | 5        | 8        | 2017-05-05 |
| 7           | 5        | 9        | 2018-09-09 |
+-------------+----------+----------+------------+
Output:
+----------+------------+
| plant_id | name       |
+----------+------------+
| 1        | Monstera   |
| 5        | Peace Lily |
+----------+------------+
Explanation:
Plant 1 (Monstera) shipped 3 + 4 = 7 units inside the last year, so it
qualifies. Plant 2 (Fiddle-Leaf Fig) shipped 12 units, and plants 3
(Maidenhair Fern) and 4 (Snake Plant) were listed less than one month
before 2019-06-23, so none of them qualify. Plant 5 (Peace Lily) moved
8 units back in 2017, outside the window, and 9 units inside it, so it
qualifies as well.
```

Write your solution as a single `SELECT` query returning `plant_id`
and `name`.
