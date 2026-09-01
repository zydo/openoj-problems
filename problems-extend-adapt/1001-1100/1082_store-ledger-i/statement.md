# Store Ledger I

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
`Goods`. Each row records one sale: the clerk who rang it up, the
item, the customer, the date, the quantity, and the total `amount`
paid for the line.

Each test's dataset seeds the `Ledger` and `Goods` tables before your
query runs.

Report the top-selling clerk by total amount rung up. If several
clerks tie for the highest total, report all of them.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Goods table:
+----------+------------+------------+
| goods_id | goods_name | list_price |
+----------+------------+------------+
| 10       | Desk Lamp  | 450        |
| 11       | Kettle     | 700        |
| 12       | Notebook   | 50         |
| 13       | Desk Fan   | 350        |
+----------+------------+------------+
Ledger table:
+----------+----------+-------------+------------+----------+--------+
| clerk_id | goods_id | customer_id | entry_date | quantity | amount |
+----------+----------+-------------+------------+----------+--------+
| 3        | 10       | 101         | 2023-02-04 | 2        | 900    |
| 3        | 12       | 105         | 2023-02-11 | 3        | 150    |
| 6        | 11       | 102         | 2023-01-19 | 1        | 700    |
| 6        | 13       | 104         | 2023-03-02 | 1        | 350    |
| 9        | 12       | 103         | 2023-02-27 | 3        | 150    |
+----------+----------+-------------+------------+----------+--------+
Output:
+----------+
| clerk_id |
+----------+
| 3        |
| 6        |
+----------+
Explanation: Clerk 3 rang up 900 + 150 = 1050 and clerk 6 rang up
700 + 350 = 1050, so they tie for the top total; clerk 9 managed
only 150.
```

Write your solution as a single `SELECT` query returning `clerk_id`.
