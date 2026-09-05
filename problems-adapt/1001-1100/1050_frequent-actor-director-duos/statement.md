# Frequent Actor-Director Duos

## Description

Table: `TeamUp`

| Column Name | Type |
| ----------- | ---- |
| actor_id    | int  |
| director_id | int  |
| event_time  | int  |

`event_time` is the primary key (column with unique values) of this
table. Each row records one collaboration event between an actor and a
director; the same pair may appear in many rows.

Report every `(actor_id, director_id)` pair that has worked together at
least three times.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
TeamUp table:
+----------+-------------+------------+
| actor_id | director_id | event_time |
+----------+-------------+------------+
| 3        | 7           | 10         |
| 3        | 7           | 11         |
| 9        | 7           | 12         |
| 3        | 7           | 13         |
| 3        | 8           | 14         |
| 3        | 8           | 15         |
| 2        | 5           | 16         |
| 9        | 7           | 17         |
| 9        | 7           | 18         |
| 9        | 7           | 19         |
+----------+-------------+------------+
Output:
+----------+-------------+
| actor_id | director_id |
+----------+-------------+
| 3        | 7           |
| 9        | 7           |
+----------+-------------+
Explanation:
Actor 3 and director 7 teamed up three times (event times 10, 11, 13),
and actor 9 and director 7 four times; actor 3 with director 8 managed
only two collaborations, and actor 2 with director 5 just one.
```

Write your solution as a single `SELECT` query returning `actor_id` and
`director_id`.
