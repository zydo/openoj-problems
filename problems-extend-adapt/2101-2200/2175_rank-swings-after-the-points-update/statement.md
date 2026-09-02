# Rank Swings After The Points Update

## Description

Table: `Standings`

| Column Name | Type    |
| ----------- | ------- |
| team_id     | int     |
| country     | varchar |
| points      | int     |

`team_id` contains unique values.
Each row holds one national team's id, the country it plays for, and the
points it carries in the world standings. No two teams play for the same
country.

Table: `PointAdjustments`

| Column Name  | Type |
| ------------ | ---- |
| team_id      | int  |
| points_delta | int  |

`team_id` contains unique values.
Each row records how one team's standings points are about to move. A
`points_delta` of `0` leaves the team level, a positive value lifts it, and
a negative value drops it. Every `team_id` listed in `Standings` has a row
here.

A team's world rank is its position once all teams are lined up by points,
highest first, with equal points ordered by country name in
lexicographical order.

Apply every adjustment to its team's points, then report how many
positions each team climbed or fell: a positive number means the team
moved up the standings, a negative number means it slid down, and `0`
means it held its place.

Return the result table in any order.

The result format is in the following example.

### Example 1

```text
Input:
Standings table:
+---------+---------+--------+
| team_id | country | points |
+---------+---------+--------+
| 5       | Chile   | 980    |
| 1       | Kenya   | 1544   |
| 6       | Wales   | 980    |
| 4       | Oman    | 1211   |
| 2       | Laos    | 1666   |
+---------+---------+--------+
PointAdjustments table:
+---------+--------------+
| team_id | points_delta |
+---------+--------------+
| 5       | 250          |
| 1       | -150         |
| 6       | 250          |
| 4       | 0            |
| 2       | -40          |
+---------+--------------+
Output:
+---------+------------+------------+
| team_id | country    | rank_swing |
+---------+------------+------------+
| 1       | Kenya      | 0          |
| 2       | Laos       | 0          |
| 4       | Oman       | -2         |
| 5       | Chile      | 1          |
| 6       | Wales      | 1          |
+---------+------------+------------+
Explanation:
Before the update the order was Laos (1666), Kenya (1544), Oman (1211),
Chile (980), Wales (980), with Chile ahead of Wales on the
lexicographical tiebreak.
After the update the points are Laos 1626, Kenya 1394, Chile 1230,
Wales 1230, Oman 1211, and the new order is Laos, Kenya, Chile, Wales,
Oman — Chile and Wales again tie, and again Chile leads on name.
Kenya and Laos kept their places, Chile and Wales each climbed one,
and Oman fell two.
```

### Example 2

```text
Input:
Standings table:
+---------+---------+--------+
| team_id | country | points |
+---------+---------+--------+
| 2       | Fiji    | 500    |
| 3       | Malta   | 700    |
| 8       | Iran    | 500    |
+---------+---------+--------+
PointAdjustments table:
+---------+--------------+
| team_id | points_delta |
+---------+--------------+
| 2       | 200          |
| 3       | -200         |
| 8       | 0            |
+---------+--------------+
Output:
+---------+------------+------------+
| team_id | country    | rank_swing |
+---------+------------+------------+
| 2       | Fiji       | 1          |
| 3       | Malta      | -2         |
| 8       | Iran       | 1          |
+---------+------------+------------+
```

Fiji's gain lifts it level with Malta's new total, and the name tiebreak
puts Fiji first; Iran, untouched, moves up one purely because Malta fell
below it.

Write your solution as a single `SELECT` query returning columns
`team_id`, `country`, and `rank_swing`.
