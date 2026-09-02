# Doubling Every Salary

## Description

Table: `StaffWages`

| Column Name | Type    |
| ----------- | ------- |
| row_no      | int     |
| staff_name  | varchar |
| annual_wage | int     |

`row_no` is the primary key for this table.
Each row of this table records one staff member's wage entry: the
person's name and annual wage, together with the entry's 1-based row
number.

The company has approved a pay rise: every wage on the books is
doubled.

Write a query that reports the adjusted wage list: each staff member's
name alongside their doubled wage.

Each testcase supplies its own `dataset`: the script seeds the
`StaffWages` table with that testcase's rows before your query runs.

The result format is in the following example.

### Example 1

```text
Input:
StaffWages table:
+--------+------------+-------------+
| row_no | staff_name | annual_wage |
+--------+------------+-------------+
| 1      | Ines       | 41250       |
| 2      | Dmitri     | 68900       |
| 3      | Kofi       | 55325       |
+--------+------------+-------------+
Output:
+------------+-------------+
| staff_name | annual_wage |
+------------+-------------+
| Ines       | 82500       |
| Dmitri     | 137800      |
| Kofi       | 110650      |
+------------+-------------+
Explanation:
Each stored wage has been multiplied by 2: 41250 becomes 82500,
68900 becomes 137800, and 55325 becomes 110650.
```

Write your solution as a single `SELECT` query returning exactly two
columns, `staff_name` then `annual_wage`, one row per staff member,
ordered by ascending `row_no` — the wage list's own row order. The
`annual_wage` output column carries the adjusted values: each stored
wage is replaced by its doubled value.

## Hints

### Hint 1

The stored rows never change — the doubling happens in the output. A
SELECT-list entry `annual_wage * 2 AS annual_wage` computes each row's
doubled wage and re-uses the column's own name for the result, so the
report keeps the original column layout while every wage value in it
is doubled.
