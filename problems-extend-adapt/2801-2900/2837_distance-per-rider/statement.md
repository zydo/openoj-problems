# Distance Per Rider

## Description

Table: `Riders`

| Column Name | Type    |
| ----------- | ------- |
| rider_id    | int     |
| rider_name  | varchar |

`rider_id` is the column with unique values for this table.
Each row of this table holds a rider's id and their name.

Table: `Trips`

| Column Name | Type |
| ----------- | ---- |
| trip_id     | int  |
| rider_id    | int  |
| miles       | int  |

`trip_id` is the column of unique values for this table.
Each row of this table holds a trip's id, the rider who took it, and the
distance that trip covered.

Write a query that totals up how far each rider has travelled. A rider who
hasn't taken any trip yet counts as having travelled 0. Output each
rider's id, their name, and their total distance.

Return the result table ordered by `rider_id` in ascending order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Riders` rows and its `Trips` rows before your query runs.

The result format is in the following example.

### Example 1

```text
Input:
Riders table:
+----------+------------+
| rider_id | rider_name |
+----------+------------+
| 8        | Kenji      |
| 22       | Lena       |
| 31       | Harriet    |
| 45       | Omar       |
| 50       | Sana       |
+----------+------------+
Trips table:
+---------+----------+-------+
| trip_id | rider_id | miles |
+---------+----------+-------+
| 201     | 31       | 120   |
| 202     | 8        | 75    |
| 203     | 31       | 340   |
| 204     | 22       | 95    |
| 205     | 8        | 210   |
| 206     | 45       | 60    |
+---------+----------+-------+
Output:
+----------+------------+-------------+
| rider_id | rider_name | total_miles |
+----------+------------+-------------+
| 8        | Kenji      | 285         |
| 22       | Lena       | 95          |
| 31       | Harriet    | 460         |
| 45       | Omar       | 60          |
| 50       | Sana       | 0           |
+----------+------------+-------------+
Explanation:
- Rider 31 took two trips of 120 and 340 miles, for a combined 460.
- Rider 8 took two trips of 75 and 210 miles, for a combined 285.
- Rider 22 took one trip of 95 miles, and rider 45 took one trip of 60
  miles.
- Rider 50 never took a trip, so their total stays at 0.
The table is returned ordered by rider_id in ascending order.
```

Write your solution as a single `SELECT` query returning three columns —
`rider_id`, `rider_name` and `total_miles` — one row per rider, sorted by
`rider_id` in ascending order.
