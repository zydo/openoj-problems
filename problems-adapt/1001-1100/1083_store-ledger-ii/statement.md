# Store Ledger II

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
`Goods`. `customer_id` and `entry_date` are never `NULL`. Each row
records one sale.

Each test's dataset seeds the `Ledger` and `Goods` tables before your
query runs.

Report the customers who bought the `S8` but never bought the
`iPhone`. The `S8` and the `iPhone` are two items named in the
`Goods` table.

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
| 2        | Phone Case | 80         |
| 3        | iPhone     | 1400       |
+----------+------------+------------+
Ledger table:
+----------+----------+-------------+------------+----------+--------+
| clerk_id | goods_id | customer_id | entry_date | quantity | amount |
+----------+----------+-------------+------------+----------+--------+
| 1        | 1        | 201         | 2023-01-14 | 1        | 1000   |
| 2        | 3        | 202         | 2023-02-02 | 1        | 1400   |
| 1        | 2        | 203         | 2023-01-21 | 2        | 160    |
| 2        | 1        | 202         | 2023-03-08 | 1        | 1000   |
+----------+----------+-------------+------------+----------+--------+
Output:
+-------------+
| customer_id |
+-------------+
| 201         |
+-------------+
Explanation: Customer 201 bought the S8 and never touched an iPhone.
Customer 202 bought both, and customer 203 bought neither S8 nor
iPhone.
```

Write your solution as a single `SELECT` query returning
`customer_id`.
