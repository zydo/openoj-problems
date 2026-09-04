# Each Shopper's Total Spend

## Description

Table: `Baskets`

| Column Name | Type |
| ----------- | ---- |
| basket_id   | int  |
| sku_id      | int  |
| shopper_id  | int  |
| quantity    | int  |

`basket_id` is unique. `sku_id` references the `Catalog` table. Each
row records one checkout line: which item was taken, by which shopper,
and in what quantity.

Table: `Catalog`

| Column Name | Type |
| ----------- | ---- |
| sku_id      | int  |
| price       | int  |

`sku_id` is unique. Each row gives the per-unit price of one item.

Report every shopper's total spend: for each shopper, the sum of
`quantity * price` over all of their rows, with each row priced at its
item's catalog price.

Each testcase supplies its own `dataset`: the DDL seeds the `Baskets`
and `Catalog` tables with that testcase's rows. How the money is spread
across rows and items does not matter — only the sum. Shoppers exist in
the answer only through `Baskets`: an empty baskets table reports
nothing, and an item that was never taken joins to no rows and adds
nothing. Return the result table ordered by total spend in descending
order, breaking ties by `shopper_id` ascending, with columns
`shopper_id` and `total`. The result format is shown in the following
example.

### Example 1

```text
Input:
Baskets table:
+-----------+--------+------------+----------+
| basket_id | sku_id | shopper_id | quantity |
+-----------+--------+------------+----------+
| 1         | 9      | 300        | 2        |
| 2         | 3      | 300        | 1        |
| 3         | 4      | 301        | 5        |
| 4         | 3      | 302        | 4        |
| 5         | 4      | 301        | 5        |
+-----------+--------+------------+----------+
Catalog table:
+--------+-------+
| sku_id | price |
+--------+-------+
| 3      | 12    |
| 4      | 7     |
| 9      | 20    |
+--------+-------+
Output:
+------------+-------+
| shopper_id | total |
+------------+-------+
| 301        | 70    |
| 300        | 52    |
| 302        | 48    |
+------------+-------+
Explanation:
Shopper 301 spent 5 * 7 + 5 * 7 = 70 across two rows of item 4.
Shopper 300 spent 2 * 20 + 1 * 12 = 52.
Shopper 302 spent 4 * 12 = 48.
The totals come out 70, 52, and 48, so the order is 301, 300, 302.
```

### Example 2

```text
Input:
Baskets table:
+-----------+--------+------------+----------+
| basket_id | sku_id | shopper_id | quantity |
+-----------+--------+------------+----------+
| 1         | 7      | 41         | 2        |
| 2         | 8      | 42         | 5        |
| 3         | 7      | 43         | 1        |
| 4         | 12     | 44         | 2        |
| 5         | 7      | 42         | 2        |
| 6         | 8      | 41         | 3        |
+-----------+--------+------------+----------+
Catalog table:
+--------+-------+
| sku_id | price |
+--------+-------+
| 7      | 10    |
| 8      | 0     |
| 12     | 99    |
+--------+-------+
Output:
+------------+-------+
| shopper_id | total |
+------------+-------+
| 44         | 198   |
| 41         | 20    |
| 42         | 20    |
| 43         | 10    |
+------------+-------+
Explanation:
Shopper 44 spent 2 * 99 = 198, the largest total.
Shoppers 41 and 42 both spent 20 — 2 * 10 + 3 * 0 and 5 * 0 + 2 * 10 —
so the tie is broken by id, 41 before 42.
Shopper 43 spent 1 * 10 = 10. Item 8 is free, so any number of its
units adds nothing.
```
