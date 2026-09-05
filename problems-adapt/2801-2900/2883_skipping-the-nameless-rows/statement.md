# Skipping The Nameless Rows

## Description

Table: `ClassRoster`

| Column Name  | Type    |
| ------------ | ------- |
| seat         | int     |
| student_no   | int     |
| student_name | varchar |
| student_age  | int     |

`seat` is the primary key for this table.
Each row of this table records one student on a class roster: the
student's id, name, and age, together with the row's 1-based seat on
the roster.

A few of the recorded students never supplied a name, so their
`student_name` is missing.

Write a query that keeps only the rows that actually have a name: the
result should list every named student's id, name, and age, and every
row whose name is missing is left out.

Each testcase supplies its own `dataset`: the script seeds the
`ClassRoster` table with that testcase's roster rows before your query
runs, storing a row's missing name as SQL `NULL`.

The result format is in the following example.

### Example 1

```text
Input:
ClassRoster table:
+------+------------+--------------+-------------+
| seat | student_no | student_name | student_age |
+------+------------+--------------+-------------+
| 1    | 214        | Priya        | 11          |
| 2    | 87         | NULL         | 13          |
| 3    | 156        | Marco        | 12          |
| 4    | 342        | NULL         | 10          |
| 5    | 269        | Sana         | 14          |
+------+------------+--------------+-------------+
Output:
+------------+--------------+-------------+
| student_no | student_name | student_age |
+------------+--------------+-------------+
| 214        | Priya        | 11          |
| 156        | Marco        | 12          |
| 269        | Sana         | 14          |
+------------+--------------+-------------+
Explanation:
The students on seats 2 and 4 have no name on file, so their rows are
dropped; the three named students remain, in seat order.
```

Write your solution as a single `SELECT` query returning exactly three
columns, `student_no` then `student_name` then `student_age`: every
roster row that has a name, in ascending `seat` order — the roster's
own row order.

## Hints

### Hint 1

The only column that can be missing here is `student_name`, so the
whole filter is one `NULL` test: `WHERE student_name IS NOT NULL`
keeps exactly the rows that have a name. A table guarantees no order
of its own, so follow the filter with `ORDER BY seat` to keep the
roster's original row order.
