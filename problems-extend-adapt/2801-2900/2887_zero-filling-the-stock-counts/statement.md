# Zero-Filling The Stock Counts

## Description

Table: `Stockroom`

| Column Name | Type    |
| ----------- | ------- |
| row_no      | int     |
| item_name   | varchar |
| stock_count | int     |
| unit_price  | int     |

`row_no` is the primary key for this table.
Each row of this table tracks one item in a stockroom: the item's
name, its count on the shelf, and its unit price, together with the
row's 1-based row number.

A stocktake left a few items without a count, so their
`stock_count` is missing.

Write a query that reports the stockroom with the gaps closed: list
every item's name, count, and price, treating each missing count as
`0` — an item with a stored count, even a stored `0`, keeps it.

Each testcase supplies its own `dataset`: the script seeds the
`Stockroom` table with that testcase's rows before your query runs,
storing a row's missing count as SQL `NULL`.

The result format is in the following example.

### Example 1

```text
Input:
Stockroom table:
+--------+------------+-------------+------------+
| row_no | item_name  | stock_count | unit_price |
+--------+------------+-------------+------------+
| 1      | DeskLamp   | 40          | 32         |
| 2      | Notebook   | NULL        | 5          |
| 3      | Backpack   | NULL        | 48         |
| 4      | Calculator | 17          | 21         |
+--------+------------+-------------+------------+
Output:
+------------+-------------+------------+
| item_name  | stock_count | unit_price |
+------------+-------------+------------+
| DeskLamp   | 40          | 32         |
| Notebook   | 0           | 5          |
| Backpack   | 0           | 48         |
| Calculator | 17          | 21         |
+------------+-------------+------------+
Explanation:
The counts for Notebook and Backpack were missing, so both are
reported as 0; DeskLamp and Calculator keep their stored counts, and
no row is added or removed.
```

Write your solution as a single `SELECT` query returning exactly three
columns, `item_name` then `stock_count` then `unit_price`, one row per
stockroom row in ascending `row_no` order — the stockroom's own row
order. The `stock_count` output column carries the filled values.

## Hints

### Hint 1

The fill happens in the output, not in the stored rows:
`COALESCE(stock_count, 0)` yields the stored count when one is present
and `0` when it is `NULL`. Since `COALESCE` never adds or removes a
row, the result has exactly one row per stockroom row — and
`ORDER BY row_no` keeps the original row order.
