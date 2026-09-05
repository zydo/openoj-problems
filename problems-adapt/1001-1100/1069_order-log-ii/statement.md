# Order Log II

## Description

Two tables describe a store's sales. `Orders` holds one row per logged
sale; `Items` names every product the store carries.

Table: `Orders`

| Column Name | Type |
| ----------- | ---- |
| order_id    | int  |
| item_id     | int  |
| order_year  | int  |
| units       | int  |
| unit_price  | int  |

`(order_id, order_year)` is the primary key (combination of columns
with unique values) of this table. `item_id` refers to a row of
`Items`. Each row records a sale of item `item_id` in year
`order_year`; `unit_price` is the price per unit.

Table: `Items`

| Column Name | Type    |
| ----------- | ------- |
| item_id     | int     |
| item_name   | varchar |

`item_id` is the primary key (column with unique values) of this table.

Report, for every item id in the order log, the total number of units
sold across all its sales.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Orders table:
+----------+---------+------------+-------+------------+
| order_id | item_id | order_year | units | unit_price |
+----------+---------+------------+-------+------------+
| 2        | 501     | 2019       | 3     | 40         |
| 3        | 501     | 2020       | 5     | 45         |
| 4        | 502     | 2019       | 10    | 15         |
| 5        | 503     | 2021       | 7     | 99         |
| 6        | 501     | 2021       | 2     | 45         |
+----------+---------+------------+-------+------------+
Items table:
+---------+-----------+
| item_id | item_name |
+---------+-----------+
| 501     | Lamp      |
| 502     | Desk      |
| 503     | Chair     |
| 504     | Rug       |
+---------+-----------+
Output:
+---------+-------------+
| item_id | total_units |
+---------+-------------+
| 501     | 10          |
| 502     | 10          |
| 503     | 7           |
+---------+-------------+
Explanation:
Item 501 sold 3 + 5 + 2 = 10 units across its three orders; item 502
sold 10 units in a single order, and item 503 sold 7. The Rug (504)
never sold, so it gets no row.
```

Write your solution as a single `SELECT` query returning `item_id` and
`total_units`.
