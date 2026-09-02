# Distinct Topics per Staff Member

## Description

Table: `Timetable`

| Column Name | Type |
| ----------- | ---- |
| staff_id    | int  |
| topic_id    | int  |
| unit_id     | int  |

Every row of the table is one teaching assignment: the staff member
`staff_id` presents the topic `topic_id` within the unit `unit_id`.
A staff member may present the same topic in several units, so one id
can sit on many rows, and different staff members overlap freely —
nothing stops two of them from covering the same topic, even in the
same unit.

For every staff member who appears in the table, report how many
different topics they teach. A topic is counted once per staff
member no matter how many units list it, so duplicating a topic across
units widens the row count without widening the answer. Return the
result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Timetable`
table with that testcase's rows. Write your solution as a single
`SELECT` query returning two columns — `staff_id` and `cnt`. The result
format is shown in the following examples.

### Example 1

```text
Input:
Timetable table:
+----------+----------+---------+
| staff_id | topic_id | unit_id |
+----------+----------+---------+
| 11       | 301      | 7       |
| 11       | 301      | 9       |
| 11       | 305      | 7       |
| 12       | 310      | 7       |
| 12       | 311      | 8       |
| 12       | 312      | 8       |
| 12       | 313      | 9       |
| 13       | 320      | 7       |
+----------+----------+---------+
Output:
+----------+-----+
| staff_id | cnt |
+----------+-----+
| 11       | 2   |
| 12       | 4   |
| 13       | 1   |
+----------+-----+
Explanation:
Staff member 11 holds topic 301 in units 7 and 9 — two rows but one
topic — and topic 305 in unit 7, so they teach 2 distinct topics.
Staff member 12 covers topics 310, 311, 312, and 313, one row each,
for 4 distinct topics. Staff member 13 covers only topic 320.
```

### Example 2

```text
Input:
Timetable table:
+----------+----------+---------+
| staff_id | topic_id | unit_id |
+----------+----------+---------+
| 21       | 401      | 3       |
| 22       | 402      | 3       |
| 22       | 402      | 4       |
| 23       | 403      | 5       |
| 23       | 403      | 6       |
| 23       | 404      | 5       |
+----------+----------+---------+
Output:
+----------+-----+
| staff_id | cnt |
+----------+-----+
| 21       | 1   |
| 22       | 1   |
| 23       | 2   |
+----------+-----+
Explanation:
Staff member 22 sits on two rows, yet both name topic 402, so their
answer is 1 rather than 2. Staff member 23 spreads three rows over
topics 403 and 404, which counts as 2.
```
