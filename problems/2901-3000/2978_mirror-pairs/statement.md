# Mirror Pairs

## Description

Table: `Points`

| Column Name | Type |
| ----------- | ---- |
| x           | int  |
| y           | int  |

Both columns hold integers, and the table is allowed to contain
duplicate rows.

Two rows `(x1, y1)` and `(x2, y2)` form a mirror pair when
`x1 = y2` and `x2 = y1` — each row is the other one with its columns
swapped.

From every mirror pair, report the unique point that satisfies
`x1 <= y1`; each qualifying point appears once in the result no matter
how many row pairs produced it.

Return the result ordered by `x` ascending, then by `y` ascending.

Each testcase carries its own `dataset`: the DDL loads the `Points`
table with that testcase's rows. The example below shows the result
format.

### Example 1

```text
Input:
Points table:
+----+----+
| x  | y  |
+----+----+
| 6  | 6  |
| 6  | 6  |
| 6  | 9  |
| 4  | 11 |
| 11 | 4  |
| 9  | 6  |
+----+----+
Output:
+----+----+
| x  | y  |
+----+----+
| 4  | 11 |
| 6  | 6  |
| 6  | 9  |
+----+----+
Explanation:
- (6, 6) pairs with its own duplicate — a row is always the column
swap of an identical row — so it is reported once.
- (6, 9) and (9, 6) are a mirror pair; (6, 9) is reported because
6 <= 9.
- (4, 11) and (11, 4) are a mirror pair; (4, 11) is reported because
4 <= 11.
The output is sorted by x, then by y.
```

### Example 2

```text
Input:
Points table:
+----+----+
| x  | y  |
+----+----+
| -2 | 5  |
| 5  | -2 |
| 3  | 3  |
| 7  | 1  |
| -4 | -4 |
+----+----+
Output:
+----+----+
| x  | y  |
+----+----+
| -4 | -4 |
| -2 | 5  |
| 3  | 3  |
+----+----+
Explanation:
- (-2, 5) and (5, -2) are a mirror pair; (-2, 5) is reported because
-2 <= 5.
- (3, 3) and (-4, -4) sit on the diagonal and mirror themselves.
- (7, 1) has no mirrored partner (1, 7), so it is not reported.
```

Write your answer as one `SELECT` query returning the two columns `x`
and `y`.
