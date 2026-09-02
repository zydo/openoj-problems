# Pay Gap Between Divisions

## Description

Table: `Payroll`

| Column Name | Type    |
| ----------- | ------- |
| worker_name | varchar |
| division    | varchar |
| pay         | int     |

(`worker_name`, `division`) is the primary key (combination of unique
values) for this table.
Each row of this table holds a worker's name, the division they work in,
and their pay. There will be at least one row for the engineering
division and at least one row for the marketing division.

Write a query that measures how far apart the best-paid workers of the
two divisions are: take the highest pay in the engineering division, take
the highest pay in the marketing division, and output the absolute
difference between the two.

Return the result table.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Payroll` rows before your query runs.

The result format is in the following example.

### Example 1

```text
Input:
Payroll table:
+-------------+-------------+-------+
| worker_name | division    | pay   |
+-------------+-------------+-------+
| Anika       | Engineering | 61000 |
| Boris       | Marketing   | 47000 |
| Cem         | Engineering | 88000 |
| Dara        | Marketing   | 39500 |
| Emre        | Engineering | 54000 |
| Farah       | Marketing   | 71000 |
+-------------+-------------+-------+
Output:
+---------+
| pay_gap |
+---------+
| 17000   |
+---------+
Explanation:
- The highest pay in Engineering is 88,000 (Cem) and the highest pay in
  Marketing is 71,000 (Farah). The absolute difference between the two is
  17,000.
```

Write your solution as a single `SELECT` query returning one row with one
column named `pay_gap`.
