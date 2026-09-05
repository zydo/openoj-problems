# Preorder Balances by Title

## Description

Table: `Titles`

| Column Name | Type    |
| ----------- | ------- |
| title_id    | int     |
| name        | varchar |

`title_id` is the column with unique values for this table. This table
lists the ID and the name of every book the shop carries. Names use only
lowercase English letters, and no two books share a name.

Table: `Preorders`

| Column Name | Type |
| ----------- | ---- |
| order_id    | int  |
| title_id    | int  |
| due         | int  |
| paid        | int  |
| canceled    | int  |
| refunded    | int  |

`order_id` is the column with unique values for this table and the id of
this preorder. `title_id` is the id of the book the preorder is for.
`due` is the amount still owed on the preorder, `paid` is the amount
already paid toward it, `canceled` is the amount canceled off it, and
`refunded` is the amount refunded from it.

Report, for every book the shop carries, its name together with the sums
of `due`, `paid`, `canceled`, and `refunded` over all of its preorders.

Return the result table ordered by `name`.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Titles` and `Preorders` rows (whichever are present) before
your query runs. The result format is in the following examples.

### Example 1

```text
Input:
Titles table:
+----------+---------+
| title_id | name    |
+----------+---------+
| 3        | fable   |
| 7        | almanac |
| 5        | quilt   |
| 9        | zephyr  |
+----------+---------+
Preorders table:
+----------+----------+-----+------+----------+----------+
| order_id | title_id | due | paid | canceled | refunded |
+----------+----------+-----+------+----------+----------+
| 101      | 3        | 12  | 0    | 5        | 0        |
| 102      | 3        | 0   | 8    | 0        | 2        |
| 103      | 7        | 1   | 1    | 1        | 1        |
| 104      | 5        | 20  | 3    | 4        | 6        |
+----------+----------+-----+------+----------+----------+
Output:
+---------+-----+------+----------+----------+
| name    | due | paid | canceled | refunded |
+---------+-----+------+----------+----------+
| almanac | 1   | 1    | 1        | 1        |
| fable   | 12  | 8    | 5        | 2        |
| quilt   | 20  | 3    | 4        | 6        |
| zephyr  | 0   | 0    | 0        | 0        |
+---------+-----+------+----------+----------+
Explanation:
- fable owes 12 + 0 = 12 across its two preorders, has paid
  0 + 8 = 8, canceled 5 + 0 = 5, and was refunded 0 + 2 = 2.
- almanac's single preorder contributes 1 to each of the four figures.
- quilt's single preorder passes its 20, 3, 4, and 6 straight through.
- zephyr has no preorders at all, so every figure is 0.
```

### Example 2

```text
Input:
Titles table:
+----------+-------+
| title_id | name  |
+----------+-------+
| 1        | oriel |
| 2        | oria  |
| 3        | orb   |
+----------+-------+
Preorders table:
+----------+----------+-----+------+----------+----------+
| order_id | title_id | due | paid | canceled | refunded |
+----------+----------+-----+------+----------+----------+
| 11       | 1        | 4   | 0    | 0        | 1        |
| 12       | 1        | 0   | 4    | 1        | 0        |
| 13       | 1        | 2   | 2    | 2        | 2        |
| 14       | 2        | 9   | 9    | 9        | 9        |
| 15       | 3        | 0   | 0    | 0        | 7        |
| 16       | 3        | 7   | 0    | 0        | 0        |
+----------+----------+-----+------+----------+----------+
Output:
+-------+-----+------+----------+----------+
| name  | due | paid | canceled | refunded |
+-------+-----+------+----------+----------+
| orb   | 7   | 0    | 0        | 7        |
| oria  | 9   | 9    | 9        | 9        |
| oriel | 6   | 6    | 3        | 3        |
+-------+-----+------+----------+----------+
Explanation:
- oriel folds its three preorders into 6, 6, 3, 3 — for instance its
  due figures are 4 + 0 + 2 = 6 and its canceled figures are
  0 + 1 + 2 = 3.
- oria and orb each fold two preorders into one row.
```

Write your solution as a single `SELECT` query returning `name`, `due`,
`paid`, `canceled`, and `refunded` for every book the shop carries — a
book with no preorders still appears, carrying zeros in the four amount
columns — ordered by `name` ascending.
