# Season Tallies

## Description

A league office compiles its season table from the results played so
far. `Clubs` lists the entrants; `Fixtures` records each completed
match from the home side's and the away side's point of view.

Table: `Clubs`

| Column Name | Type    |
| ----------- | ------- |
| club_id     | int     |
| club_name   | varchar |

`club_id` is the column with unique values for this table. Each row is
one club entered in the season.

Table: `Fixtures`

| Column Name      | Type |
| ---------------- | ---- |
| host_club_id     | int  |
| guest_club_id    | int  |
| host_club_goals  | int  |
| guest_club_goals | int  |

`(host_club_id, guest_club_id)` is the primary key (combination of
columns with unique values) for this table. Each row is one played
fixture: `host_club_goals` is what the hosting club scored and
`guest_club_goals` is what the visiting club scored. The side that
scores more goals wins the fixture.

Every club earns three points for a win, one point for a draw, and
nothing for a loss.

Build the season table. For each club in `Clubs`, the table should
contain:

- `club_name` - the club's name.
- `games_played` - how many fixtures the club has played, home or away.
- `points` - the club's point total under the scoring above.
- `goals_for` - the total number of goals the club has scored.
- `goals_against` - the total number of goals scored against it.
- `goal_margin` - `goals_for` minus `goals_against`.

A club that has not played yet still gets a row, with zeros throughout.
Return the table ordered by `points` from highest to lowest, breaking
ties by `goal_margin` from highest to lowest, and then by `club_name`
in ascending order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Clubs` and `Fixtures` rows (whichever are present) before
your query runs. The result format is in the following example.

### Example 1

```text
Input:
Clubs table:
+---------+-----------+
| club_id | club_name |
+---------+-----------+
| 1       | Rovers    |
| 2       | United    |
| 3       | Athletic  |
| 4       | Wanderers |
+---------+-----------+
Fixtures table:
+--------------+---------------+-----------------+-------------------+
| host_club_id | guest_club_id | host_club_goals | guest_club_goals  |
+--------------+---------------+-----------------+-------------------+
| 1            | 2             | 2               | 1                 |
| 2            | 3             | 1               | 1                 |
| 3            | 1             | 0               | 3                 |
+--------------+---------------+-----------------+-------------------+
Output:
+-----------+---------------+--------+-----------+---------------+-------------+
| club_name | games_played  | points | goals_for | goals_against | goal_margin |
+-----------+---------------+--------+-----------+---------------+-------------+
| Rovers    | 2             | 6      | 5         | 1             | 4           |
| United    | 2             | 1      | 2         | 3             | -1          |
| Athletic  | 2             | 1      | 1         | 4             | -3          |
| Wanderers | 0             | 0      | 0         | 0             | 0           |
+-----------+---------------+--------+-----------+---------------+-------------+
Explanation:
Rovers won both of their fixtures, so they lead with 3 + 3 = 6 points.
United lost to Rovers and drew with Athletic: 0 + 1 = 1 point, with 2
goals for and 3 against. Athletic drew with United and lost to Rovers:
1 + 0 = 1 point, with 1 goal for and 4 against. Both sit on one point,
but United's goal margin of -1 is better than Athletic's -3, so United
comes first. Wanderers have not played, so their row is all zeros.
```

Write your solution as a single `SELECT` query returning the season
table exactly as specified — one row per club, in the required order.
