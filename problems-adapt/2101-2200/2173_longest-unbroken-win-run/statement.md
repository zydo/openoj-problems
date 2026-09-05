# Longest Unbroken Win Run

## Description

Table: `Fixtures`

| Column Name | Type |
| ----------- | ---- |
| player_id   | int  |
| played_on   | date |
| outcome     | enum |

`(player_id, played_on)` is the primary key (combination of columns with
unique values) for this table. Every row logs one fixture a player
contested: the player's id, the day it was played, and how it ended. The
`outcome` column is an ENUM (category) type of `('Win', 'Draw', 'Lose')`.

A win run is a stretch of fixtures a player won back to back, with no draw
or loss breaking it. For every player who appears in the table, report the
length of their longest win run — a player who never won reports `0`.

Return the result table in any order.

The result format is in the following example.

### Example 1

```text
Input:
Fixtures table:
+-----------+------------+---------+
| player_id | played_on  | outcome |
+-----------+------------+---------+
| 4         | 2023-03-01 | Win     |
| 4         | 2023-03-02 | Win     |
| 4         | 2023-03-04 | Lose    |
| 4         | 2023-03-05 | Win     |
| 4         | 2023-03-06 | Win     |
| 4         | 2023-03-07 | Win     |
| 7         | 2023-03-02 | Draw    |
| 7         | 2023-03-05 | Draw    |
| 9         | 2023-03-03 | Win     |
+-----------+------------+---------+
Output:
+-----------+----------+
| player_id | best_run |
+-----------+----------+
| 4         | 3        |
| 7         | 0        |
| 9         | 1        |
+-----------+----------+
Explanation:
Player 4 won on March 1-2, lost on March 4, then won March 5-7; the
three wins from March 5 to March 7 are their best run.
Player 7 never won a fixture, so their best run is 0.
Player 9's single win gives them a run of 1.
```

### Example 2

```text
Input:
Fixtures table:
+-----------+------------+---------+
| player_id | played_on  | outcome |
+-----------+------------+---------+
| 2         | 2023-06-10 | Win     |
| 2         | 2023-06-11 | Lose    |
| 2         | 2023-06-12 | Win     |
| 3         | 2023-06-11 | Draw    |
+-----------+------------+---------+
Output:
+-----------+----------+
| player_id | best_run |
+-----------+----------+
| 2         | 1        |
| 3         | 0        |
+-----------+----------+
```

Player 2's wins on June 10 and June 12 are separated by a loss, so neither
extends the other.

### Follow-up

How would the query change if a run survived draws — that is, if only a
loss broke it?

Write your solution as a single `SELECT` query returning columns
`player_id` and `best_run`.
