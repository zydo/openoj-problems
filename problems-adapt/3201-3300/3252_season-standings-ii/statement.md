# Season Standings II

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

`club_id` is the unique key for this table. Each row is one club's
completed season: games played, games won, drawn, and lost.

Where the first standings report stopped at points and places, the
season close-up grades every club in `league_table` into a tier as
well. Write a solution that computes, for each club:

- `points`: three for every win, one for every draw, nothing for a
  loss.
- `place`: competition rank by points — `1` plus the number of clubs
  holding strictly more points, so level clubs share one place.
- `tier`: the standings split into three tiers by place. With `N`
  clubs in the league, Tier 1 holds places `1` through `⌈0.33 · N⌉`,
  Tier 2 holds every place up through `⌈0.66 · N⌉`, and all later
  places fall in Tier 3. A tie sitting across a cut line lands wholly
  in the higher tier, because every club in the tie shares one place
  and that place decides the tier.

Return the result table ordered by `points` descending, then by
`club_name` ascending.

Each testcase supplies its own `dataset`: the script seeds the
`league_table` table with that testcase's rows. The result format is in
the following example.

### Example 1

```text
Input:
league_table table:
+---------+------------------+--------+-----+-------+------+
| club_id | club_name        | played | won | drawn | lost |
+---------+------------------+--------+-----+-------+------+
| 1       | Harborough       | 30     | 12  | 4     | 14   |
| 2       | Kingsport United | 30     | 13  | 1     | 16   |
| 3       | Ravenhill        | 30     | 11  | 6     | 13   |
| 4       | Eastfield        | 30     | 10  | 6     | 14   |
| 5       | Westmarsh        | 30     | 9   | 8     | 13   |
| 6       | Millbrook        | 30     | 10  | 3     | 17   |
| 7       | Oakden           | 30     | 9   | 6     | 15   |
| 8       | Foxdale          | 30     | 8   | 5     | 17   |
| 9       | Stonebrook       | 30     | 6   | 6     | 18   |
+---------+------------------+--------+-----+-------+------+
Output:
+------------------+--------+-------+--------+
| club_name        | points | place | tier   |
+------------------+--------+-------+--------+
| Harborough       | 40     | 1     | Tier 1 |
| Kingsport United | 40     | 1     | Tier 1 |
| Ravenhill        | 39     | 3     | Tier 1 |
| Eastfield        | 36     | 4     | Tier 2 |
| Westmarsh        | 35     | 5     | Tier 2 |
| Millbrook        | 33     | 6     | Tier 2 |
| Oakden           | 33     | 6     | Tier 2 |
| Foxdale          | 29     | 8     | Tier 3 |
| Stonebrook       | 24     | 9     | Tier 3 |
+------------------+--------+-------+--------+
Explanation: Nine clubs make the Tier 1 cut `⌈0.33 · 9⌉ = 3` and the
Tier 2 cut `⌈0.66 · 9⌉ = 6`. Harborough and Kingsport United tie on 40
points, share place 1, and Ravenhill follows at place 3 — all three
make Tier 1. Eastfield and Westmarsh take places 4 and 5. Millbrook and
Oakden tie on 33 points at shared place 6, straight on the Tier 2 cut
line, and the shared place's tier is the higher one, so both stay in
Tier 2. Foxdale at place 8 and Stonebrook at place 9 fill Tier 3.
```

Write your solution as a single `SELECT` query returning four columns —
`club_name`, `points`, `place`, and `tier` — one row per club, ordered
by `points` descending and then `club_name` ascending. Equal totals
take equal places and the next distinct total skips past every tied
club — two co-leaders sit at places 1 and 1 while the best club behind
them sits at place 3. The judge compares result rows as an unordered
multiset, so row order does not affect correctness — produce the
demanded order anyway.
