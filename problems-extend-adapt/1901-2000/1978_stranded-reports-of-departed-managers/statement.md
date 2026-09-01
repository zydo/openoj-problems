# Stranded Reports of Departed Managers

## Description

Table: `Staff`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| name        | varchar |
| boss_id     | int     |
| wage        | int     |

In SQL, `staff_id` is the primary key for this table.
Each row describes one employee: their id, name, wage, and the id of the
manager they report to. Some employees answer to no one — their `boss_id`
is null.

When a manager leaves the company, their row is deleted from `Staff`, but
the people who reported to them keep their `boss_id` pointing at the id
that is now gone. Report the ids of every employee whose wage is strictly
below `30000` and whose manager has left the company this way.

Return the result table ordered by `staff_id`.

Each testcase's `dataset` seeds the `Staff` table: its script inserts the
testcase's `Staff` rows (whichever are present) before your query runs.
The result format is in the following example.

### Example 1

```text
Input:
Staff table:
+----------+-------+---------+-------+
| staff_id | name  | boss_id | wage  |
+----------+-------+---------+-------+
| 7        | Priya | 2       | 28400 |
| 2        | Marco | null    | 55000 |
| 15       | Dana  | 2       | 29999 |
| 4        | Lev   | null    | 22000 |
| 9        | Sofia | 30      | 18500 |
| 21       | Ravi  | 9       | 47000 |
| 11       | Bea   | 30      | 29500 |
+----------+-------+---------+-------+
Output:
+----------+
| staff_id |
+----------+
| 9        |
| 11       |
+----------+
Explanation:
Five rows clear the wage cap: staff 7, 15, 4, 9, and 11. Staff 7 and 15
report to staff 2 (Marco), whose row is still in the table, so neither
qualifies. Staff 4 has no manager at all (`boss_id` is null), which is a
different situation from a manager who left. Staff 9 and 11 both report
to staff 30 — and no row with `staff_id` 30 exists, because that manager
left and their row was deleted — so both are reported. Staff 21 is
dropped by the wage filter alone.
```

### Example 2

```text
Input:
Staff table:
+----------+-------+---------+-------+
| staff_id | name  | boss_id | wage  |
+----------+-------+---------+-------+
| 1        | Noor  | 5       | 12000 |
| 5        | Ada   | null    | 31000 |
| 8        | Tao   | 9       | 25000 |
+----------+-------+---------+-------+
Output:
+----------+
| staff_id |
+----------+
| 8        |
+----------+
Explanation:
Noor is under the cap but her manager, staff 5, is still employed. Ada
earns above the cap, so she is out regardless. Only Tao combines a low
wage with a manager id (9) that matches no remaining row.
```

Write your solution as a single `SELECT` query returning one column —
`staff_id` — listing the low-paid employees stranded by a deleted
manager's row, sorted by ascending `staff_id`.
