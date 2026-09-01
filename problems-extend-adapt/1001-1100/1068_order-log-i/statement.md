# Order Log I

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

Report the item name, order year, and unit price for every row of the
order log.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Orders table:
+----------+---------+------------+-------+------------+
| order_id | item_id | order_year | units | unit_price |
+----------+---------+------------+-------+------------+
| 5        | 301     | 2021       | 4     | 250        |
| 6        | 302     | 2021       | 1     | 1200       |
| 7        | 301     | 2022       | 6     | 300        |
| 8        | 303     | 2022       | 2     | 80         |
+----------+---------+------------+-------+------------+
Items table:
+---------+-----------+
| item_id | item_name |
+---------+-----------+
| 301     | Kettle    |
| 302     | Toaster   |
| 303     | Mug       |
| 304     | Blender   |
+---------+-----------+
Output:
+-----------+------------+------------+
| item_name | order_year | unit_price |
+-----------+------------+------------+
| Kettle    | 2021       | 250        |
| Toaster   | 2021       | 1200       |
| Kettle    | 2022       | 300        |
| Mug       | 2022       | 80         |
+-----------+------------+------------+
Explanation:
Order 5 says a Kettle sold for 250 in 2021; order 7 shows the Kettle's
price had risen to 300 by 2022. The Blender never sold, so it appears
nowhere in the output.
```

Write your solution as a single `SELECT` query returning `item_name`,
`order_year`, and `unit_price`.
