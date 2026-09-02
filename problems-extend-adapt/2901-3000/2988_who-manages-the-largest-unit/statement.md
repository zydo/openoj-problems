# Who Manages the Largest Unit

## Description

Table: `Staff`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| staff_name  | varchar |
| unit_id     | int     |
| role        | varchar |

`staff_id` is the unique key of this table. Each row is one staff member,
recorded with the unit they belong to and the role they hold.

A unit's size is its number of rows in `Staff`. Report the manager of
every largest unit — the unit, or units, whose row count is greater than
or equal to every other unit's. Whenever several units share the top size,
each of their managers is reported. Each unit carries exactly one row
whose `role` is exactly `'Manager'`.

Return the columns `manager_name` and `unit_id`, one row per largest
unit, ordered by `unit_id` in ascending order.

Every testcase carries its own `dataset`: the DDL loads the `Staff` table
with that testcase's rows. The example below shows the result format.

### Example 1

```text
Input:
Staff table:
+----------+------------+---------+---------+
| staff_id | staff_name | unit_id | role    |
+----------+------------+---------+---------+
| 401      | Priya      | 12      | Manager |
| 402      | Walt       | 12      | Analyst |
| 403      | Noor       | 15      | Manager |
| 404      | Felix      | 15      | Analyst |
| 405      | Mara       | 15      | Analyst |
| 406      | Tess       | 15      | Analyst |
| 407      | Owen       | 19      | Manager |
| 408      | Lena       | 19      | Analyst |
| 409      | Tomas      | 19      | Analyst |
| 410      | Ines       | 19      | Analyst |
+----------+------------+---------+---------+
Output:
+--------------+---------+
| manager_name | unit_id |
+--------------+---------+
| Noor         | 15      |
| Owen         | 19      |
+--------------+---------+
Explanation
Unit 12 has 2 staff members, while units 15 and 19 each have 4. Units 15
and 19 are therefore jointly the largest, so their managers Noor and Owen
are both reported, ordered by unit_id in ascending order.
```

Because `unit_id` values are distinct across the output rows, the
ascending `unit_id` order is total — no two rows can ever tie. Write your
solution as a single `SELECT` query.
