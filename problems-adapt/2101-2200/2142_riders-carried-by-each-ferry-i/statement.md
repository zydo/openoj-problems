# Riders Carried by Each Ferry I

## Description

Table: `Ferries`

| Column Name  | Type |
| ------------ | ---- |
| ferry_id     | int  |
| arrival_time | int  |

`ferry_id` is the column with unique values for this table.
Each row of this table records when a ferry docks at the pier.
No two ferries ever dock at the same moment.

Table: `Travelers`

| Column Name  | Type |
| ------------ | ---- |
| traveler_id  | int  |
| arrival_time | int  |

`traveler_id` is the column with unique values for this table.
Each row of this table records when a traveler reaches the pier.

Ferries and travelers show up at the pier over time. When a ferry docks at
moment `t_ferry`, every traveler who arrived at some moment `t_traveler <=
t_ferry` and has not boarded anything yet steps onto that ferry.

Write a solution to report how many travelers each ferry picked up.

Return the result table ordered by `ferry_id` in ascending order.

Each testcase supplies its own `dataset`, whose statements insert all rows
into `Ferries` and `Travelers` before the query runs. The result format is
in the following examples.

### Example 1

```text
Input:
Ferries table:
ferry_id  | arrival_time
4         | 2
9         | 6
7         | 10
Travelers table:
traveler_id | arrival_time
31          | 1
32          | 2
33          | 4
34          | 6
35          | 11
Output:
ferry_id | riders_cnt
4        | 2
7        | 0
9        | 2
Explanation:
- Travelers 31 and 32 reach the pier at moments 1 and 2.
- Ferry 4 docks at moment 2 and carries travelers 31 and 32.

- Ferry 9 docks at moment 6 and carries travelers 33 (moment 4) and 34
  (moment 6).

- Traveler 35 arrives at moment 11, after the last ferry, and no ferry
  carries them.
- Ferry 7 docks at moment 10, when nobody is waiting, so it carries no
  riders.
```

### Example 2

```text
Input:
Ferries table:
ferry_id  | arrival_time
1         | 5
2         | 8
Travelers table:
traveler_id | arrival_time
21          | 5
22          | 5
23          | 8
24          | 1
Output:
ferry_id | riders_cnt
1        | 3
2        | 1
Explanation:
- Traveler 24 is already waiting when ferry 1 docks at moment 5, and
  travelers 21 and 22 reach the pier at exactly that moment, so all three
  board ferry 1.
- Traveler 23 arrives at moment 8 and boards ferry 2, which docks at the
  same moment.
```

Write your solution as a single `SELECT` query returning `ferry_id` and
`riders_cnt`, ordered by `ferry_id` in ascending order.
