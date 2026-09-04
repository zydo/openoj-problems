# Season Standings III

## Description

Table: `league_table`

| Column Name | Type    |
| ----------- | ------- |
| season_id   | int     |
| club_id     | int     |
| club_name   | varchar |
| played      | int     |
| won         | int     |
| drawn       | int     |
| lost        | int     |
| scored      | int     |
| conceded    | int     |

(`season_id`, `club_id`) is the unique key for this table. Each row is
one club's completed campaign in one season: games played, won, drawn,
and lost, plus the goals the club scored and conceded along the way.

The league's final report card assigns every club, in every season,
three numbers:

- `points`: three for every win, one for every draw, nothing for a
  loss.
- `goal_difference`: `scored - conceded`.
- `place`: the club's 1-based position inside its own season. Clubs
  are ranked by points from highest to lowest; level points are
  separated by goal difference, again highest to lowest; and clubs
  still level are listed alphabetically by `club_name`. Every club
  holds a distinct place — no two clubs in a season ever share one,
  because the name ordering always settles the last tie.

Return the result table ordered by `season_id` ascending, then by
`place` ascending, then by `club_name` ascending.

Each testcase supplies its own `dataset`: the script seeds the
`league_table` table with that testcase's rows. The result format is
shown in the following examples.

### Example 1

```text
Input:
league_table table:
+-----------+---------+------------+--------+-----+-------+------+--------+----------+
| season_id | club_id | club_name  | played | won | drawn | lost | scored | conceded |
+-----------+---------+------------+--------+-----+-------+------+--------+----------+
| 2027      | 1       | Riverton   | 30     | 18  | 8     | 4    | 60     | 30       |
| 2027      | 2       | Eastvale   | 30     | 18  | 8     | 4    | 55     | 35       |
| 2027      | 3       | Hartleigh  | 30     | 20  | 2     | 8    | 58     | 40       |
| 2027      | 4       | Marlow Bay | 30     | 10  | 10    | 10   | 40     | 40       |
+-----------+---------+------------+--------+-----+-------+------+--------+----------+
Output:
+-----------+---------+------------+--------+-----------------+-------+
| season_id | club_id | club_name  | points | goal_difference | place |
+-----------+---------+------------+--------+-----------------+-------+
| 2027      | 1       | Riverton   | 62     | 30              | 1     |
| 2027      | 2       | Eastvale   | 62     | 20              | 2     |
| 2027      | 3       | Hartleigh  | 62     | 18              | 3     |
| 2027      | 4       | Marlow Bay | 40     | 0               | 4     |
+-----------+---------+------------+--------+-----------------+-------+
Explanation: Riverton, Eastvale, and Hartleigh all finish on 62
points, so goal difference orders them: 30, then 20, then 18. Marlow
Bay's 40 points leave it fourth.
```

### Example 2

```text
Input:
league_table table:
+-----------+---------+-----------+--------+-----+-------+------+--------+----------+
| season_id | club_id | club_name | played | won | drawn | lost | scored | conceded |
+-----------+---------+-----------+--------+-----+-------+------+--------+----------+
| 2033      | 5       | Westmoor  | 20     | 12  | 4     | 4    | 36     | 24       |
| 2033      | 6       | Ashcombe  | 20     | 12  | 4     | 4    | 36     | 24       |
| 2033      | 7       | Dunloch   | 20     | 8   | 6     | 6    | 30     | 30       |
| 2034      | 5       | Westmoor  | 20     | 15  | 3     | 2    | 45     | 20       |
| 2034      | 7       | Dunloch   | 20     | 6   | 6     | 8    | 25     | 30       |
+-----------+---------+-----------+--------+-----+-------+------+--------+----------+
Output:
+-----------+---------+-----------+--------+-----------------+-------+
| season_id | club_id | club_name | points | goal_difference | place |
+-----------+---------+-----------+--------+-----------------+-------+
| 2033      | 6       | Ashcombe  | 40     | 12              | 1     |
| 2033      | 5       | Westmoor  | 40     | 12              | 2     |
| 2033      | 7       | Dunloch   | 30     | 0               | 3     |
| 2034      | 5       | Westmoor  | 48     | 25              | 1     |
| 2034      | 7       | Dunloch   | 24     | -5              | 2     |
+-----------+---------+-----------+--------+-----------------+-------+
Explanation: In 2033 Westmoor and Ashcombe tie on both points (40) and
goal difference (+12), so the alphabetical rule decides — Ashcombe
takes place 1. In 2034 Westmoor leads with 48 points while Dunloch's
24 sit on a goal difference of -5. Seasons are ranked independently,
and the output orders 2033 before 2034.
```

Write your solution as a single `SELECT` query returning six columns —
`season_id`, `club_id`, `club_name`, `points`, `goal_difference`, and
`place`, in that order — one row per club per season, ordered by
`season_id` ascending, then `place` ascending, then `club_name`
ascending. The judge compares result rows exactly, so produce the
demanded order.
