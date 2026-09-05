# League Standings

## Description

Table: `Clubs`

| Column Name | Type    |
| ----------- | ------- |
| club_id     | int     |
| club_name   | varchar |

`club_id` is the column with unique values of this table.
Each row registers one club taking part in the season.

Table: `Fixtures`

| Column Name | Type |
| ----------- | ---- |
| fixture_id  | int  |
| home_club   | int  |
| away_club   | int  |
| home_goals  | int  |
| away_goals  | int  |

`fixture_id` is the column with unique values of this table.
Each row is the full-time score of one played fixture: the two sides are
`club_id`s from `Clubs`, and `home_goals` and `away_goals` count the goals
the home side and the away side scored, respectively.

Every club's season tally is built from its results:

- scoring more goals than the opponent wins the fixture and is worth
  **three points**;
- scoring exactly as many draws the fixture and is worth **one point**;
- scoring fewer loses the fixture and is worth nothing.

Write a query that reports `club_id`, `club_name` and `points` for every club
once the whole fixture list has been counted. A club that played no fixture
reports zero points.

Return the result table ordered by `points` in **descending** order, with
`club_id` in **ascending** order breaking ties.

The result format is in the following example.

### Example 1

```text
Input:
Clubs table:
+---------+-----------+
| club_id | club_name |
+---------+-----------+
| 4       | Harbor    |
| 8       | Kestrel   |
| 15      | Maple     |
| 21      | Riverside |
| 30      | Solent    |
+---------+-----------+
Fixtures table:
+------------+-----------+-----------+------------+------------+
| fixture_id | home_club | away_club | home_goals | away_goals |
+------------+-----------+-----------+------------+------------+
| 1          | 4         | 8         | 2          | 0          |
| 2          | 15        | 4         | 1          | 1          |
| 3          | 8         | 21        | 3          | 1          |
| 4          | 21        | 15        | 0          | 2          |
+------------+-----------+-----------+------------+------------+
Output:
+---------+-----------+--------+
| club_id | club_name | points |
+---------+-----------+--------+
| 4       | Harbor    | 4      |
| 15      | Maple     | 4      |
| 8       | Kestrel   | 3      |
| 21      | Riverside | 0      |
| 30      | Solent    | 0      |
+---------+-----------+--------+
Explanation: Harbor beat Kestrel at home and drew away at Maple, good for
3 + 1 = 4 points. Maple drew with Harbor and won away at Riverside, also 4
points; the shared total is broken by the smaller club_id, so Harbor sits
above Maple. Kestrel's win over Riverside leaves it third on 3 points.
Riverside lost both fixtures and Solent never played, so both stay on zero,
ordered by club_id.
```
