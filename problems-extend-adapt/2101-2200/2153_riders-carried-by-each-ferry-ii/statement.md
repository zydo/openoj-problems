# Riders Carried by Each Ferry II

## Description

Table: `Ferries`

| Column Name  | Type |
| ------------ | ---- |
| ferry_id     | int  |
| arrival_time | int  |
| capacity     | int  |

`ferry_id` is the column with unique values for this table.
Each row of this table records when a ferry docks at the pier together with
its capacity (how many empty deck spots it has).
No two ferries ever dock at the same moment, and every capacity is a
positive integer.

Table: `Travelers`

| Column Name  | Type |
| ------------ | ---- |
| traveler_id  | int  |
| arrival_time | int  |

`traveler_id` is the column with unique values for this table.
Each row of this table records when a traveler reaches the pier.

Ferries and travelers show up at the pier over time. When a ferry docks at
moment `t_ferry`, every traveler who arrived at some moment `t_traveler <=
t_ferry` and has not boarded anything yet steps onto that ferry — but a
ferry can only take as many travelers as its `capacity` allows, so anyone
beyond that stays at the pier for a later ferry.

Write a solution to report how many travelers each ferry picked up.

Return the result table ordered by `ferry_id` in ascending order.

Each testcase supplies its own `dataset`, whose statements insert all rows
into `Ferries` and `Travelers` before the query runs. The result format is
in the following examples.

### Example 1

```text
Input:
Ferries table:
ferry_id | arrival_time | capacity
5        | 4            | 2
6        | 8            | 1
Travelers table:
traveler_id | arrival_time
31          | 1
32          | 2
33          | 2
34          | 3
35          | 8
Output:
ferry_id | riders_cnt
5        | 2
6        | 1
Explanation:
- Travelers 31, 32, 33, and 34 are all waiting when ferry 5 docks at moment
  4, but its two deck spots only fit travelers 31 and 32; 33 and 34 stay
  behind.

- Ferry 6 docks at moment 8 with one spot. Traveler 35 arrives at exactly
  that moment, and leftover travelers 33 and 34 are still there, so ferry 6
  carries just one of them.
```

### Example 2

```text
Input:
Ferries table:
ferry_id | arrival_time | capacity
1        | 3            | 5
2        | 6            | 1
Travelers table:
traveler_id | arrival_time
41          | 2
42          | 3
43          | 9
Output:
ferry_id | riders_cnt
1        | 2
2        | 0
Explanation:
- Ferry 1 docks at moment 3 with five spots and carries the two waiting
  travelers, 41 and 42.

- Nobody is left waiting when ferry 2 docks at moment 6, so it carries no
  riders; traveler 43 only reaches the pier at moment 9, after the last
  ferry has gone.
```

Write your solution as a single `SELECT` query returning `ferry_id` and
`riders_cnt`, ordered by `ferry_id` in ascending order.
