# Flights Between Two Cities

## Description

Table: `Flights`

| Column Name | Type |
| ----------- | ---- |
| origin      | int  |
| destination | int  |
| minutes     | int  |

This table does not have a primary key (column with unique values); it
may contain duplicates. This table logs the direct flights an airline
operates: `origin` and `destination` are city ids and `minutes` is the
flight time. `origin != destination` holds on every row — no flight
connects a city to itself.

Report the number of flights and the total flight minutes between each
pair of distinct cities (`city1`, `city2`) where `city1 < city2`,
counting flights in either direction.

Return the result table in any order.

Each testcase's `dataset` seeds the `Flights` table: its script inserts
the testcase's `Flights` rows before your query runs. The result format
is in the following examples.

### Example 1

```text
Input:
Flights table:
+--------+-------------+---------+
| origin | destination | minutes |
+--------+-------------+---------+
| 1      | 2           | 90      |
| 2      | 1           | 75      |
| 1      | 3           | 40      |
| 3      | 4           | 110     |
| 3      | 4           | 110     |
| 4      | 3           | 65      |
| 2      | 5           | 200     |
+--------+-------------+---------+
Output:
+-------+-------+--------------+---------------+
| city1 | city2 | flight_count | total_minutes |
+-------+-------+--------------+---------------+
| 1     | 2     | 2            | 165           |
| 1     | 3     | 1            | 40            |
| 2     | 5     | 1            | 200           |
| 3     | 4     | 3            | 285           |
+-------+-------+--------------+---------------+
Explanation:
Cities 1 and 2 are linked by 2 flights totalling 165 minutes
(90 + 75). Cities 1 and 3 share a single 40-minute flight, as do cities
2 and 5. Cities 3 and 4 are linked by 3 flights totalling 285 minutes
(110 + 110 + 65).
```

### Example 2

```text
Input:
Flights table:
+--------+-------------+---------+
| origin | destination | minutes |
+--------+-------------+---------+
| 7      | 3           | 25      |
| 3      | 7           | 25      |
| 7      | 3           | 30      |
| 9      | 2           | 140     |
| 2      | 9           | 160     |
| 2      | 9           | 5       |
| 4      | 8           | 10      |
+--------+-------------+---------+
Output:
+-------+-------+--------------+---------------+
| city1 | city2 | flight_count | total_minutes |
+-------+-------+--------------+---------------+
| 2     | 9     | 3            | 305           |
| 3     | 7     | 3            | 80            |
| 4     | 8     | 1            | 10            |
+-------+-------+--------------+---------------+
Explanation:
Cities 3 and 7 trade three flights in both directions — two out of 7
and one back — totalling 25 + 25 + 30 = 80 minutes. Cities 2 and 9 also
trade three flights, totalling 140 + 160 + 5 = 305 minutes, while
cities 4 and 8 share a single 10-minute hop.
```

Write your solution as a single `SELECT` query returning `city1`,
`city2`, `flight_count`, and `total_minutes` for every pair of cities
with at least one flight between them in `Flights`, in any order.
