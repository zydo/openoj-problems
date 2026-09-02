# Workloads Above The Crew Average

## Description

Table: `Assignments`

| Column Name | Type |
| ----------- | ---- |
| job_id      | int  |
| staff_id    | int  |
| load        | int  |

Each row pairs one member of staff with one job and records the load
that job places on them. `staff_id` is the primary key (column with
unique values) of this table, and it is a foreign key (reference
column) to the `Staff` table — a staff member holds at most one
assignment.

Table: `Staff`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| name        | varchar |
| crew        | varchar |

`staff_id` is the primary key (column with unique values) of this
table. Each row describes one staff member: their name and the crew
they belong to.

A scheduling office audits who is carrying more than their fair share.
A staff member counts as overloaded when their assignment's load is
strictly greater than the average load of the crews' own assigned
members — the average is taken within their crew.

Find every staff member whose assignment's load exceeds their crew's
average load.

Return the result table ordered by `staff_id`, `job_id` in ascending
order.

Every testcase brings its own `dataset`: the DDL loads the
`Assignments` and `Staff` tables with that testcase's rows before your
query runs. The result format is shown in the examples below.

### Example 1

```text
Input:
Assignments table:
+--------+----------+------+
| job_id | staff_id | load |
+--------+----------+------+
| 1      | 11       | 30   |
| 2      | 12       | 70   |
| 2      | 13       | 50   |
| 3      | 14       | 45   |
+--------+----------+------+
Staff table:
+----------+-------+------+
| staff_id | name  | crew |
+----------+-------+------+
| 11       | Rhea  | Ops  |
| 12       | Silas | Ops  |
| 13       | Tara  | Web  |
| 14       | Umar  | Web  |
+----------+-------+------+
Output:
+----------+--------+------------+----------+
| staff_id | job_id | staff_name | job_load |
+----------+--------+------------+----------+
| 12       | 2      | Silas      | 70       |
| 13       | 2      | Tara       | 50       |
+----------+--------+------------+----------+
Explanation:
- The Ops crew's assigned members carry 30 and 70, averaging 50.
Silas's 70 exceeds 50 and qualifies; Rhea's 30 does not.
- The Web crew's assigned members carry 50 and 45, averaging 47.5.
Tara's 50 exceeds 47.5 and qualifies; Umar's 45 does not.
Result table is ordered by staff_id, then job_id, both ascending.
```

### Example 2

```text
Input:
Assignments table:
+--------+----------+------+
| job_id | staff_id | load |
+--------+----------+------+
| 7      | 21       | 80   |
| 8      | 21       | 20   |
| 9      | 22       | 60   |
| 10     | 22       | 30   |
| 11     | 23       | 25   |
| 12     | 24       | 10   |
| 13     | 25       | 40   |
| 14     | 26       | 40   |
| 15     | 27       | 20   |
+--------+----------+------+
Staff table:
+----------+-------+------+
| staff_id | name  | crew |
+----------+-------+------+
| 21       | Vera  | East |
| 22       | Wale  | East |
| 23       | Xena  | East |
| 24       | York  | West |
| 25       | Zara  | West |
| 26       | Adam  | West |
| 27       | Bela  | West |
+----------+-------+------+
Output:
+----------+--------+------------+----------+
| staff_id | job_id | staff_name | job_load |
+----------+--------+------------+----------+
| 21       | 7      | Vera       | 80       |
| 22       | 9      | Wale       | 60       |
| 25       | 13     | Zara       | 40       |
| 26       | 14     | Adam       | 40       |
+----------+--------+------------+----------+
Explanation:
- The East crew holds five assignments (80, 20, 60, 30, 25) averaging
43. Only Vera's 80 and Wale's 60 clear that bar; Xena's 25 does not.
- The West crew holds four assignments (10, 40, 40, 20) averaging
27.5. Zara's 40 and Adam's 40 clear it; York's 10 and Bela's 20 do
not.
```

Write your solution as a single `SELECT` query returning four columns
— `staff_id`, `job_id`, `staff_name` (the member's `name`), and
`job_load` (the assignment's `load`) — one row per assignment whose
load clears the bar. The bar is per crew and is computed over exactly
that crew's staff who hold assignments, each contributing their
assignment's load; a staff member without any assignment has no load
and does not enter the average. The comparison is strict: a load
exactly equal to the crew's average does not qualify. Order the result
by `staff_id` ascending, then `job_id` ascending.
