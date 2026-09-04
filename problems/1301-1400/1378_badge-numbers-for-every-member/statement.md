# Badge Numbers for Every Member

## Description

Table: `Workforce`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |

`id` is the primary key (column with unique values) for this table.
Each row holds the id and the name of one member of a company's workforce.

Table: `Badges`

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| badge_no    | int  |

`(id, badge_no)` is the primary key (combination of columns with unique
values) for this table.
Each row records that the member with this `id` carries badge number
`badge_no`. A member may not have been issued a badge yet.

Write a query that reports every member's badge number alongside their
name; for a member with no badge, show `null`.

Return the result table in any order.

### Example 1

```text
Input:
Workforce table:
+----+------+
| id | name |
+----+------+
| 1  | Ruth |
| 8  | Sami |
| 12 | Tara |
| 95 | Umar |
| 4  | Vera |
+----+------+
Badges table:
+----+----------+
| id | badge_no |
+----+----------+
| 4  | 7        |
| 12 | 11       |
| 95 | 21       |
+----+----------+
Output:
+----------+------+
| badge_no | name |
+----------+------+
| null     | Ruth |
| 7        | Vera |
| null     | Sami |
| 11       | Tara |
| 21       | Umar |
+----------+------+
Explanation: Ruth and Sami have not been issued a badge yet, so null
stands in for their badge number. Vera carries badge 7, Tara carries
badge 11, and Umar carries badge 21.
```
