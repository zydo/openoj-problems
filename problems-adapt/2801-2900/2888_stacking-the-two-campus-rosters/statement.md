# Stacking The Two Campus Rosters

## Description

Table: `CampusEast`

| Column Name  | Type    |
| ------------ | ------- |
| student_no   | int     |
| student_name | varchar |
| student_age  | int     |

Table: `CampusWest`

| Column Name  | Type    |
| ------------ | ------- |
| student_no   | int     |
| student_name | varchar |
| student_age  | int     |

The two tables hold the same three columns: each row of either table is
one student of that campus, with the student's number, name, and age.

Write a query that stacks the two rosters into one result: every row of
`CampusEast`, then every row of `CampusWest` beneath it — one block per
campus, each block in ascending `student_no` order.

Each testcase supplies its own `dataset`: the script seeds both tables
with that testcase's rows before your query runs. In every dataset the
`student_no` values are distinct within each campus, and a campus's row
order is its ascending `student_no` order; `student_no` values may
repeat across the two campuses and may interleave between them. Rows
may be listed in any order inside the dataset's INSERT statements, so a
correct query cannot assume the scan order of either table matches its
roster order.

The result format is in the following example.

### Example 1

```text
Input:
CampusEast table:
+------------+--------------+-------------+
| student_no | student_name | student_age |
+------------+--------------+-------------+
| 3          | Iris         | 9           |
| 11         | Mateo        | 12          |
| 19         | Sana         | 7           |
+------------+--------------+-------------+
CampusWest table:
+------------+--------------+-------------+
| student_no | student_name | student_age |
+------------+--------------+-------------+
| 6          | Tobias       | 14          |
| 21         | Wren         | 10          |
+------------+--------------+-------------+
Output:
+------------+--------------+-------------+
| student_no | student_name | student_age |
+------------+--------------+-------------+
| 3          | Iris         | 9           |
| 11         | Mateo        | 12          |
| 19         | Sana         | 7           |
| 6          | Tobias       | 14          |
| 21         | Wren         | 10          |
+------------+--------------+-------------+
Explanation:
All three CampusEast rows come first, ordered by ascending student_no,
followed by the two CampusWest rows in their own ascending student_no
order.
```

Write your solution as a single `SELECT` query returning exactly three
columns, `student_no` then `student_name` then `student_age`: all of
`CampusEast`'s rows followed by all of `CampusWest`'s rows, each
campus's rows in ascending `student_no` order — the two rosters stacked
into one result.

## Hints

### Hint 1

`UNION ALL` appends one select's rows below another's without comparing
or dropping anything — exactly the stacking step, unlike plain `UNION`,
which would deduplicate. Because a table carries no order of its own,
tag each branch with a constant (`1` for CampusEast, `2` for
CampusWest), then `ORDER BY` that tag first and `student_no` second to
restore each campus's ascending `student_no` order inside its block.
