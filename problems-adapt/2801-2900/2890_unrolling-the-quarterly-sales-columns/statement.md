# Unrolling The Quarterly Sales Columns

## Description

Table: `QuarterlySales`

| Column Name  | Type    |
| ------------ | ------- |
| row_no       | int     |
| product_name | varchar |
| quarter_1    | int     |
| quarter_2    | int     |
| quarter_3    | int     |
| quarter_4    | int     |

`row_no` is the primary key for this table.
Each row of this table holds one product's quarterly sales: the
product's name and its sales in each of the four quarters, together
with that row's 1-based position in the table's row order.

Write a query that unrolls the wide table into a long one: each output
row is one product's sales in one quarter.

Each testcase supplies its own `dataset`: the script seeds the
`QuarterlySales` table with that testcase's rows before your query
runs. In every dataset the `row_no` values run `1, 2, ..., n` in the
table's row order. Rows may be listed in any order inside the dataset's
INSERT statements, so a correct query cannot assume the scan order of
the table matches its row order.

The result format is in the following example.

### Example 1

```text
Input:
QuarterlySales table:
+--------+--------------+-----------+-----------+-----------+-----------+
| row_no | product_name | quarter_1 | quarter_2 | quarter_3 | quarter_4 |
+--------+--------------+-----------+-----------+-----------+-----------+
| 1      | Lantern      | 120       | 85        | 210       | 160       |
| 2      | Hammock      | 45        | 300       | 95        | 250       |
+--------+--------------+-----------+-----------+-----------+-----------+
Output:
+--------------+-----------+-------+
| product_name | quarter   | sales |
+--------------+-----------+-------+
| Lantern      | quarter_1 | 120   |
| Hammock      | quarter_1 | 45    |
| Lantern      | quarter_2 | 85    |
| Hammock      | quarter_2 | 300   |
| Lantern      | quarter_3 | 210   |
| Hammock      | quarter_3 | 95    |
| Lantern      | quarter_4 | 160   |
| Hammock      | quarter_4 | 250   |
+--------------+-----------+-------+
Explanation:
Each quarter's column becomes its own block of rows: the quarter_1
block first, listing every product's quarter_1 sales in ascending
row_no order, then the quarter_2 block, and so on through quarter_4.
```

Write your solution as a single `SELECT` query returning exactly three
columns, `product_name` then `quarter` then `sales`: one block per
quarter in `quarter_1`, `quarter_2`, `quarter_3`, `quarter_4` order,
each block listing every product row in ascending `row_no` order with
that product's sales in that quarter — the wide table unrolled to long
format.

## Hints

### Hint 1

A `UNION ALL` over the four quarter columns does the unrolling: each
branch reads the whole table, labels its rows with that quarter's name
as a string literal (the label doubles as the sort key), and projects
the column's value as `sales`. One `ORDER BY` over the label then
`row_no` restores the quarter-major, row-order layout — and `UNION
ALL`, not `UNION`, keeps every fanned row even when two quarters hold
equal values.
