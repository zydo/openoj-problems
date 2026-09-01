# Strong Collaborations

## Description

Table: `Collaborations`

| Column Name | Type |
| ----------- | ---- |
| member1_id  | int  |
| member2_id  | int  |

`(member1_id, member2_id)` is the primary key (combination of columns
with unique values) for this table.
Each row of this table indicates that the members `member1_id` and
`member2_id` worked together.

A collaboration between a pair of members `x` and `y` is strong if `x`
and `y` have at least three mutual collaborators — members who worked
with both `x` and `y`.

Report every strong collaboration together with the number of mutual
collaborators behind it.

Each testcase's `dataset` seeds the `Collaborations` table with that
testcase's rows before your query runs. The result format is in the
following example.

### Example 1

```text
Input:
Collaborations table:
+------------+------------+
| member1_id | member2_id |
+------------+------------+
| 5          | 12         |
| 5          | 19         |
| 5          | 26         |
| 5          | 31         |
| 5          | 40         |
| 12         | 19         |
| 12         | 26         |
| 12         | 31         |
| 12         | 40         |
| 19         | 26         |
| 19         | 34         |
| 26         | 34         |
+------------+------------+
Output:
+------------+------------+--------------+
| member1_id | member2_id | mutual_count |
+------------+------------+--------------+
| 5          | 12         | 4            |
| 19         | 26         | 3            |
+------------+------------+--------------+
Explanation:
Members 5 and 12 worked together and share 4 mutual collaborators
(19, 26, 31, and 40), so their collaboration is strong.
Members 19 and 26 worked together and share 3 mutual collaborators
(5, 12, and 34), so their collaboration is strong.
Members 5 and 19 worked together but share only 2 mutual collaborators
(12 and 26), so their collaboration is not included.
```

Write your solution as a single `SELECT` query returning one row per
strong collaboration — `member1_id`, `member2_id`, and its
`mutual_count` — in any order.
