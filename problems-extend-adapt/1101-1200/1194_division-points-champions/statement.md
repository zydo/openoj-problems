# Division Points Champions

## Description

A karting league runs head-to-head races and awards points for every
finish, splitting its racers into divisions for the season. Two tables
hold the year's records.

Table: `Racers`

| Column Name | Type |
| ----------- | ---- |
| racer_id    | int  |
| division_id | int  |

`racer_id` is the primary key (column with unique values) of this
table.
Each row of this table indicates the division of each racer.

Table: `Races`

| Column Name   | Type |
| ------------- | ---- |
| race_id       | int  |
| first_racer   | int  |
| second_racer  | int  |
| first_points  | int  |
| second_points | int  |

`race_id` is the primary key (column with unique values) of this table.
Each row is the record of one race: `first_racer` and `second_racer`
carry the `racer_id` of the two entrants, and `first_points` and
`second_points` carry the points each of them earned. The two racers in
a race always belong to the same division.

A division's champion is the racer whose points add up to the most over
the whole season. On a tie in total points, the champion is the racer
with the lower `racer_id`.

Find the champion of every division.

Return the result table in any order.

The result format is in the following examples.

### Example 1

```text
Input:
Racers table:
+----------+-------------+
| racer_id | division_id |
+----------+-------------+
| 7        | 1           |
| 12       | 1           |
| 23       | 1           |
| 31       | 1           |
| 5        | 2           |
| 18       | 2           |
| 44       | 2           |
| 61       | 3           |
| 62       | 3           |
+----------+-------------+
Races table:
+---------+-------------+--------------+--------------+---------------+
| race_id | first_racer | second_racer | first_points | second_points |
+---------+-------------+--------------+--------------+---------------+
| 1       | 7           | 12           | 6            | 3             |
| 2       | 23          | 31           | 4            | 4             |
| 3       | 12          | 7            | 2            | 9             |
| 4       | 5           | 18           | 5            | 5             |
| 5       | 44          | 18           | 1            | 8             |
+---------+-------------+--------------+--------------+---------------+
Output:
+-------------+----------+
| division_id | racer_id |
+-------------+----------+
| 1           | 7        |
| 2           | 18       |
| 3           | 61       |
+-------------+----------+
Explanation: In division 1, racer 7 banked 6 + 9 = 15 points, clear of
the field. Division 2 belongs to racer 18 with 13. Division 3 held no
races at all, so both of its racers sit on 0 points and the lower id,
61, takes it.
```

### Example 2

```text
Input:
Racers table:
+----------+-------------+
| racer_id | division_id |
+----------+-------------+
| 9        | 1           |
| 14       | 1           |
| 20       | 1           |
| 33       | 2           |
| 41       | 2           |
+----------+-------------+
Races table:
+---------+-------------+--------------+--------------+---------------+
| race_id | first_racer | second_racer | first_points | second_points |
+---------+-------------+--------------+--------------+---------------+
| 10      | 9           | 20           | 10           | 3             |
| 11      | 14          | 33           | 4            | 6             |
| 12      | 9           | 14           | 0            | 6             |
| 13      | 41          | 33           | 7            | 2             |
+---------+-------------+--------------+--------------+---------------+
Output:
+-------------+----------+
| division_id | racer_id |
+-------------+----------+
| 1           | 9        |
| 2           | 33       |
+-------------+----------+
Explanation: Racers 9 and 14 both finish on exactly 10 points, and the
tie goes to the lower id, 9. In division 2, racer 33's 8 edges out
racer 41's 7.
```

Write your solution as a single `SELECT` query returning columns
`division_id, racer_id`.
