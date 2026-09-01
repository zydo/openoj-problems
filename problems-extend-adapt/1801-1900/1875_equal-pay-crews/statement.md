# Equal-Pay Crews

## Description

Table: `Crew`

| Column Name | Type    |
| ----------- | ------- |
| crew_id     | int     |
| member_name | varchar |
| wage        | int     |

`crew_id` is the column with unique values for this table.

Each row describes one crew member: their ID, their name, and their
wage.

A company wants to split its crew members into squads whose members all
earn the same wage. The squads must obey these rules:

- A squad must contain at least two members.
- Everyone in a squad earns the same wage.
- Everyone earning a given wage belongs to that wage's squad — a wage
  cannot be split across squads.
- A member whose wage is unique joins no squad at all.
- A squad's `squad_id` comes from the rank of its wage among the
  squads' wages, lowest wage first (`squad_id = 1` for the lowest).
  Wages of members who joined no squad are left out of this ranking.

Report the `squad_id` of every member who belongs to a squad, ordered
by `squad_id` in ascending order, breaking ties by `crew_id` in
ascending order.

Each testcase's `dataset` seeds the `Crew` table with that testcase's
rows. The result format is in the following example.

### Example 1

```text
Input:
Crew table:
+---------+-------------+------+
| crew_id | member_name | wage |
+---------+-------------+------+
| 5       | Tariq       | 4100 |
| 9       | Bea         | 4100 |
| 12      | Sol         | 6200 |
| 15      | Ines        | 6200 |
| 18      | Ravi        | 6200 |
| 21      | Kim         | 7700 |
| 23      | Ash         | 7700 |
| 30      | Nadia       | 5000 |
+---------+-------------+------+
Output:
+---------+-------------+------+----------+
| crew_id | member_name | wage | squad_id |
+---------+-------------+------+----------+
| 5       | Tariq       | 4100 | 1        |
| 9       | Bea         | 4100 | 1        |
| 12      | Sol         | 6200 | 2        |
| 15      | Ines        | 6200 | 2        |
| 18      | Ravi        | 6200 | 2        |
| 21      | Kim         | 7700 | 3        |
| 23      | Ash         | 7700 | 3        |
+---------+-------------+------+----------+
Explanation:
Tariq and Bea both earn 4100, so they form squad 1. Sol, Ines, and
Ravi all earn 6200, forming squad 2. Kim and Ash share the wage 7700
and form squad 3. Nadia's wage of 5000 is unique, so she joins no
squad and her wage takes no rank. Ranking the squad wages lowest
first gives 4100 -> 1, 6200 -> 2, and 7700 -> 3.
```
