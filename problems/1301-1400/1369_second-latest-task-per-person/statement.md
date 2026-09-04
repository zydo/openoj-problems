# Second-Latest Task per Person

## Description

Table: `Stints`

| Column Name | Type    |
| ----------- | ------- |
| person      | varchar |
| task        | varchar |
| start_day   | date    |
| end_day     | date    |

Rows may repeat.
Each row is one stint: the person spent `start_day` through `end_day`
(inclusive of both dates) doing `task`. A person never has two stints that
cover the same stretch of days.

Write a query that returns each person's second-latest task — the row with
the second-highest `start_day` for that person. A person who appears only
once in `Stints` has no second stint, so return their single row instead.

Return the result table in any order.

### Example 1

```text
Input:
Stints table:
+----------+---------+------------+------------+
| person   | task    | start_day  | end_day    |
+----------+---------+------------+------------+
| Nadia    | Pottery | 2021-04-02 | 2021-04-09 |
| Nadia    | Weaving | 2021-04-10 | 2021-04-14 |
| Nadia    | Carving | 2021-04-15 | 2021-04-21 |
| Omar     | Pottery | 2021-04-05 | 2021-04-12 |
+----------+---------+------------+------------+
Output:
+----------+---------+------------+------------+
| person   | task    | start_day  | end_day    |
+----------+---------+------------+------------+
| Nadia    | Weaving | 2021-04-10 | 2021-04-14 |
| Omar     | Pottery | 2021-04-05 | 2021-04-12 |
+----------+---------+------------+------------+
Explanation: Nadia's latest stint is carving, which starts 2021-04-15, so
her second-latest is the weaving stint that begins 2021-04-10. Omar holds
a single row, so that row alone is his answer.
```
