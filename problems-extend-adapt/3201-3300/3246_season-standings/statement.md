# Season Standings

## Description

Table: `league_table`

| Column Name | Type    |
| ----------- | ------- |
| club_id     | int     |
| club_name   | varchar |
| played      | int     |
| won         | int     |
| drawn       | int     |
| lost        | int     |

`club_id` is the unique key for this table.
Each row is one club's final season record: games played, games won,
drawn, and lost.

Write a query that works out the points and place for every club in the
league. Points are awarded as follows:

- 3 points for a win
- 1 point for a draw
- 0 points for a loss

Note: clubs with the same point total must receive the same place.

Return the result table ordered by points descending, then by
`club_name` ascending.

Each testcase supplies its own `dataset`: the script seeds the
`league_table` table with that testcase's rows. The result format is in
the following examples.

### Example 1

```text
Input: league_table table from the dataset below.
Output:
club_id  club_name         points  place
4        Harbour Athletic  17      1
9        Old Quay          17      1
2        Milton Park       15      3
7        Cranleigh Town    8       4
1        Eastfield         4       5
Explanation: Harbour Athletic and Old Quay both finished with 17 points
(5 wins * 3 + 2 draws * 1), so they share place 1. Milton Park's 15
points (4 * 3 + 3 * 1) take place 3 — one past the two clubs already
placed. Cranleigh Town's 8 points take place 4 and Eastfield's 4 points
place 5. The table is ordered by points descending, then by club_name
ascending.
```

### Example 2

```text
Input: league_table table from the dataset below.
Output:
club_id  club_name  points  place
8        Westbreck  5       1
3        Northgate  4       2
5        Southmoor  4       2
Explanation: Westbreck's five draws are worth 5 points and lead the
table outright. Northgate and Southmoor tie on 4 points (1 win * 3 +
1 draw * 1) and share place 2.
```

Write your solution as a single `SELECT` query returning four columns —
`club_id`, `club_name`, `points`, and `place` — one row per club,
ordered by points in descending order and then by club_name in ascending
order. Clubs that share a point total share a place, and the next
distinct total resumes one past the number of clubs already placed: two
co-leaders take places 1 and 1, and the best club behind them takes
place 3.
