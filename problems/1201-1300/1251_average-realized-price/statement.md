# Average Realized Price

## Description

Table: `Tariffs`

| Column Name | Type |
| ----------- | ---- |
| item_id     | int  |
| from_date   | date |
| to_date     | date |
| unit_price  | int  |

`(item_id, from_date, to_date)` is the primary key (combination of columns
with unique values) for this table.
Each row fixes the `unit_price` of an item for the window starting on
`from_date` and ending on `to_date`. The windows covering one item never
overlap.

Table: `Sales`

| Column Name | Type |
| ----------- | ---- |
| item_id     | int  |
| sold_on     | date |
| quantity    | int  |

This table may contain duplicate rows.
Each row records one sale: `quantity` units of `item_id` changed hands on
`sold_on`.

The realized price of an item is the revenue its sales actually earned per
unit — total revenue divided by total units. Write a query that reports each
item's `item_id` and its realized price as `avg_price`, **rounded to 2
decimal places**. An item that never sold has a realized price of `0`.

Return the result table in any order.

The result format is in the following example.

### Example 1

```text
Input:
Tariffs table:
+---------+------------+------------+------------+
| item_id | from_date  | to_date    | unit_price |
+---------+------------+------------+------------+
| 6       | 2023-01-01 | 2023-01-15 | 40         |
| 6       | 2023-01-16 | 2023-02-28 | 10         |
| 9       | 2023-01-01 | 2023-03-31 | 25         |
| 12      | 2023-01-01 | 2023-03-31 | 60         |
+---------+------------+------------+------------+
Sales table:
+---------+------------+----------+
| item_id | sold_on    | quantity |
+---------+------------+----------+
| 6       | 2023-01-10 | 50       |
| 6       | 2023-01-20 | 30       |
| 9       | 2023-02-05 | 10       |
+---------+------------+----------+
Output:
+---------+-----------+
| item_id | avg_price |
+---------+-----------+
| 6       | 28.75     |
| 9       | 25        |
| 12      | 0         |
+---------+-----------+
Explanation: Item 6 sold 50 units while priced at 40 and 30 units while
priced at 10, so its realized price is (50 * 40 + 30 * 10) / 80 = 28.75.
Item 9 sold 10 units at its single price of 25, realizing exactly 25. Item
12 never sold, so its realized price is 0.
```
