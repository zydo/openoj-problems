# Store Ledger III

## Description

A shop records every sale it rings up. `Ledger` holds one row per
logged sale; `Goods` lists everything the shop stocks.

Table: `Goods`

| Column Name | Type    |
| ----------- | ------- |
| goods_id    | int     |
| goods_name  | varchar |
| list_price  | int     |

`goods_id` is the primary key (column with unique values) of this
table. Each row gives the name and list price of one item the shop
sells.

Table: `Ledger`

| Column Name | Type |
| ----------- | ---- |
| clerk_id    | int  |
| goods_id    | int  |
| customer_id | int  |
| entry_date  | date |
| quantity    | int  |
| amount      | int  |

This table can contain repeated rows. `goods_id` refers to a row of
`Goods`. Each row records one sale.

Each test's dataset seeds the `Ledger` and `Goods` tables before your
query runs.

Report the items that sold only in the first quarter of 2019 — that
is, whose every logged sale falls between 2019-01-01 and 2019-03-31
inclusive. An item that never sold at all does not qualify.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Goods table:
+----------+------------+------------+
| goods_id | goods_name | list_price |
+----------+------------+------------+
| 1        | S8         | 1000       |
| 2        | G4         | 800        |
| 3        | iPhone     | 1400       |
| 4        | Tab Pro    | 600        |
+----------+------------+------------+
Ledger table:
+----------+----------+-------------+------------+----------+--------+
| clerk_id | goods_id | customer_id | entry_date | quantity | amount |
+----------+----------+-------------+------------+----------+--------+
| 1        | 1        | 301         | 2019-01-17 | 1        | 1000   |
| 2        | 2        | 302         | 2019-02-25 | 1        | 800    |
| 1        | 2        | 303         | 2019-04-06 | 2        | 1600   |
| 3        | 3        | 302         | 2019-06-12 | 1        | 1400   |
+----------+----------+-------------+------------+----------+--------+
Output:
+----------+------------+
| goods_id | goods_name |
+----------+------------+
| 1        | S8         |
+----------+------------+
Explanation: The S8 sold once, in January — inside the quarter. The
G4 also sold in February but rang up again in April, so it leaves the
quarter; the iPhone only sold in June, and the Tab Pro never sold at
all.
```

Write your solution as a single `SELECT` query returning `goods_id`
and `goods_name`.
