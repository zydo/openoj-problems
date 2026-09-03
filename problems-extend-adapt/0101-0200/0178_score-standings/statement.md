# Score Standings

## Description

Table: `Attempts`

| Column Name | Type    |
| ----------- | ------- |
| attemptId   | int     |
| points      | decimal |

`attemptId` is the primary key (column with unique values) for this
table. Each row records the points scored by one attempt. Points is a
floating point value with two decimal places.

Build the standings for the recorded points. The standings follow
three rules:

- Points are placed from highest to lowest.
- Attempts with equal points hold the same position.
- The position after a tie continues with the next integer — no
  numbers are skipped between positions.

Return the result ordered by points from highest to lowest.

Each testcase supplies its own `dataset`: the DDL seeds the `Attempts`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Attempts table from the dataset below.
Output:
points  rank
9.30    1
9.30    1
8.10    2
8.10    2
7.45    3
6.80    4
Explanation: the two 9.30 attempts tie and share position 1, the two
8.10 attempts share the next consecutive position 2, 7.45 follows
alone at 3, and 6.80 closes the standings at 4 — no holes anywhere.
```

Write your solution as a single `SELECT` query returning two columns —
`points` and its `rank` — one row per row of the `Attempts` table.

## Hints

### Hint 1

The three rules spell out a dense ranking: ties share one position and
the next distinct value takes the very next integer, holes forbidden.
SQL's DENSE_RANK window function is that definition, named.

### Hint 2

Order highest-first with `DENSE_RANK() OVER (ORDER BY points DESC)`:
the window's ORDER BY walks the points from the top down, so the best
score takes 1 and every equal score repeats its position.

### Hint 3

A window function emits one output row per input row — ties included,
no GROUP BY involved — and the outer `ORDER BY points DESC` lays them
out from the highest points down.
