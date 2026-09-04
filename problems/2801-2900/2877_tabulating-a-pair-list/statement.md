# Tabulating A Pair List

## Description

Table: `ListPairs`

| Column Name | Type |
| ----------- | ---- |
| pair_index  | int  |
| pair_id     | int  |
| pair_age    | int  |

`pair_index` is the primary key for this table.
Each row of this table holds one pair of a 2D list of id-and-age values:
the pair's id and age, together with the pair's 1-based position within
that list.

Write a query that lays the list out as a table of its own: the result
should carry exactly two columns, `pair_id` and `pair_age`, with the rows
appearing in the same order as the pairs of the original list.

Each testcase supplies its own `dataset`: the script seeds the
`ListPairs` table with that testcase's list rows before your query runs.

The result format is in the following example.

### Example 1

```text
Input:
ListPairs table:
+------------+---------+-----------+
| pair_index | pair_id | pair_age  |
+------------+---------+-----------+
| 1          | 10      | 14        |
| 2          | 20      | 19        |
| 3          | 30      | 16        |
| 4          | 40      | 21        |
| 5          | 50      | 14        |
+------------+---------+-----------+
Output:
+---------+----------+
| pair_id | pair_age |
+---------+----------+
| 10      | 14       |
| 20      | 19       |
| 30      | 16       |
| 40      | 21       |
| 50      | 14       |
+---------+----------+
Explanation:
The result keeps exactly the id and age of each pair, in the same order
the pairs appear in the original list.
```

Write your solution as a single `SELECT` query returning exactly two
columns, `pair_id` then `pair_age`, one row per pair of the list, ordered
by ascending `pair_index` — that is, in the same order as the original
list.

## Hints

### Hint 1

Name the two output columns explicitly in the SELECT list —
`SELECT pair_id, pair_age FROM ...` — instead of selecting every column:
naming them fixes both the column set and their order, which is exactly
the "choose the columns" step of laying out a table from raw rows.
