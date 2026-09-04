# Three In A Row

## Description

Table: `Feed`

| Column Name | Type    |
| ----------- | ------- |
| feedId      | int     |
| val         | varchar |

In SQL, `feedId` is the primary key for this table. `feedId` is an
autoincrement column starting from 1.

Find every value that shows up at least three times in a row — three
or more consecutive entries carrying the same `val`.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Feed`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Feed table from the dataset below.
Output:
ThreeInARow
4
7
Explanation: 4 runs for exactly three entries, and 7 runs for four —
both make three in a row; the pair of 4s at the end is too short and
2 never repeats at all.
```

Write your solution as a single `SELECT` query returning one column,
`ThreeInARow`: every value that appears at least three times in a row
at consecutive feedIds, each such value once.

## Hints

### Hint 1

"In a row" means at consecutive feedIds: some three rows with feedIds
k, k + 1, k + 2. Three aliases of Feed — l1, l2, l3 — line exactly
those triples up through l1.feedId = l2.feedId - 1 AND
l2.feedId = l3.feedId - 1.

### Hint 2

The values must agree across the whole window: AND l1.val = l2.val AND
l2.val = l3.val. Equality chains transitively, so testing the two
adjacent pairs pins all three values at once.

### Hint 3

A run of four or more holds several overlapping triples, and one value
can qualify in several separate runs — DISTINCT folds every match of
the same value into a single row.
