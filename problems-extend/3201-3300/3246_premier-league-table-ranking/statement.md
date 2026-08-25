# Premier League Table Ranking

## Description

Table: `TeamStats`

| Column Name    | Type    |
| -------------- | ------- |
| team_id        | int     |
| team_name      | varchar |
| matches_played | int     |
| wins           | int     |
| draws          | int     |
| losses         | int     |

`team_id` is the unique key for this table.
Each row of this table contains team id, team name, `matches_played`,
`wins`, `draws`, and `losses`.

Write a solution to calculate the points and rank for each team in the
league. Points are calculated as follows:

- 3 points for a win
- 1 point for a draw
- 0 points for a loss

Note: Teams with the same points must be assigned the same rank.

Return the result table ordered by points in descending, and then by
team_name in ascending order.

Each testcase supplies its own `dataset`: the script seeds the `TeamStats`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: TeamStats table from the dataset below.
Output:
team_id  team_name        points  position
2        Liverpool        20      1
1        Manchester City  20      1
3        Chelsea          18      3
4        Arsenal          16      4
5        Tottenham        14      5
Explanation: Manchester City and Liverpool both have 20 points (6 wins *
3 points + 2 draws * 1 point), so they share position 1. Chelsea has 18
points (5 wins * 3 points + 3 draws * 1 point) and is position 3rd.
Arsenal has 16 points (4 wins * 3 points + 4 draws * 1 point) and is
position 4th. Tottenham has 14 points (3 wins * 3 points + 5 draws * 1
point) and is position 5th. The output table is ordered by points in
descending order, then by team_name in ascending order.
```

Write your solution as a single `SELECT` query returning four columns —
`team_id`, `team_name`, `points`, and `position` — one row per team,
ordered by points in descending order and then by team_name in ascending
order. Teams that share a point total share a position, and the next
distinct total resumes one past the number of teams already placed: two
co-leaders take positions 1 and 1, and the best team behind them takes
position 3.

## Hints

### Hint 1

Every input row already carries its own season record, so the points are a
pure per-row expression — `3 * wins + draws`; losses contribute nothing and
no join or aggregation over other tables is needed. A team with zero wins,
zero draws, and zero losses (or all losses) scores 0 points and still gets
a row.

### Hint 2

The rank is competition ranking: a team's position is 1 plus the number of
teams with strictly more points. `RANK() OVER (ORDER BY 3 * wins + draws
DESC)` computes exactly that — tied totals receive the same position and
the next distinct total skips ahead (1, 1, 3). The classic trap is
`DENSE_RANK()`, which numbers without gaps (1, 1, 2) and misplaces every
team after a tie; a correlated subquery counting strictly better teams,
`1 + COUNT(*)` over rows with a larger total, reaches the same positions.

### Hint 3

The presentation order is its own requirement: `ORDER BY points DESC,
team_name` sorts by the computed alias descending and breaks ties
alphabetically by name. The judge compares result rows as an unordered
multiset, so duplicates count and row order does not affect correctness —
but produce the demanded order anyway; it costs nothing beyond the sort the
ranking already performs.
