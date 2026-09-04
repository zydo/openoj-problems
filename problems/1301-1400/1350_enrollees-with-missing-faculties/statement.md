# Enrollees With Missing Faculties

## Description

Table: `Faculties`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |

In SQL, `id` is the primary key of this table. Each row is one faculty of
the university, keyed by its id.

Table: `Enrollees`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |
| faculty_id  | int     |

In SQL, `id` is the primary key of this table. Each row is one enrolled
student, together with the id of the faculty they are registered under.

The registrar's records are not perfect: some enrollees still point at a
`faculty_id` that matches no faculty in `Faculties`, because that faculty
has since been dissolved. Write a query that returns the `id` and `name`
of every enrollee registered under a faculty that does not exist in the
`Faculties` table.

Return the result table in any order.

### Example 1

```text
Input:
Faculties table:
+----+---------------------+
| id | name                |
+----+---------------------+
| 2  | Marine Robotics     |
| 5  | Cognitive Science   |
| 9  | Applied Linguistics |
+----+---------------------+
Enrollees table:
+-----+--------+------------+
| id  | name   | faculty_id |
+-----+--------+------------+
| 101 | Wren   | 2          |
| 102 | Adil   | 5          |
| 103 | Sana   | 9          |
| 104 | Piotr  | 12         |
| 105 | Nkechi | 9          |
| 106 | Hugo   | 30         |
| 107 | Mei    | 2          |
| 108 | Rosa   | 44         |
| 109 | Dev    | 5          |
| 110 | Ines   | 2          |
+-----+--------+------------+
Output:
+-----+-------+
| id  | name  |
+-----+-------+
| 104 | Piotr |
| 106 | Hugo  |
| 108 | Rosa  |
+-----+-------+
Explanation: Piotr, Hugo, and Rosa are registered under faculties 12, 30,
and 44 respectively, and none of those ids appears in the Faculties
table, so their records are dangling. Everyone else points at faculty 2,
5, or 9, all of which still exist.
```
