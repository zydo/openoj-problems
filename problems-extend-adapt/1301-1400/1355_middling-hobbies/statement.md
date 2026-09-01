# Middling Hobbies

## Description

Table: `Roster`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |
| hobby       | varchar |

`id` is the member's id and the primary key of this table in SQL. `name`
is the member's name, and `hobby` is the name of the hobby the member
pursues at the community center.

Table: `Hobbies`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |

In SQL, `id` is the primary key of this table, and `name` is the name of
the hobby.

Find the names of all hobbies whose number of participants is neither the
largest nor the smallest.

Every hobby listed in `Hobbies` is pursued by at least one person in
`Roster`.

Return the result table in any order.

### Example 1

```text
Input:
Roster table:
+------+-------+------------+
| id   | name  | hobby      |
+------+-------+------------+
| 1    | Willa | Pottery    |
| 2    | Omar  | Pottery    |
| 3    | Suki  | Pottery    |
| 4    | Ravi  | Pottery    |
| 5    | Petra | Beekeeping |
| 6    | Lena  | Choir      |
| 7    | Bo    | Choir      |
| 8    | Anouk | Origami    |
| 9    | Felix | Origami    |
| 10   | Zuri  | Origami    |
+------+-------+------------+
Hobbies table:
+----+------------+
| id | name       |
+----+------------+
| 1  | Pottery    |
| 2  | Beekeeping |
| 3  | Choir      |
| 4  | Origami    |
+----+------------+
Output:
+---------+
| hobby   |
+---------+
| Choir   |
| Origami |
+---------+
Explanation: Pottery draws 4 members — the largest turnout — and
Beekeeping only 1 — the smallest. Choir (2 members) and Origami (3
members) sit strictly between the two extremes, so they are reported.
```
