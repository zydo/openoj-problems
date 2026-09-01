# Order Log III

## Description

Table: `Orders`

| Column Name | Type |
| ----------- | ---- |
| order_id    | int  |
| item_id     | int  |
| order_year  | int  |
| units       | int  |
| unit_price  | int  |

`(order_id, order_year)` is the primary key (combination of columns
with unique values) of this table. Each row records a sale of item
`item_id` in year `order_year`; `unit_price` is the price per unit. An
item can log several sales in the same year.

Report every sale made in the first year its item ever sold:

- For each `item_id`, find the earliest `order_year` it appears in the
  order log.
- Keep all of that item's sale rows from that year.

The result has the columns `item_id`, `first_year`, `units`, and
`unit_price`. Return the rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Orders table:
+----------+---------+------------+-------+------------+
| order_id | item_id | order_year | units | unit_price |
+----------+---------+------------+-------+------------+
| 1        | 9       | 2015       | 2     | 60         |
| 2        | 9       | 2016       | 3     | 65         |
| 3        | 9       | 2015       | 1     | 60         |
| 4        | 8       | 2018       | 5     | 20         |
| 5        | 7       | 2012       | 4     | 150        |
| 6        | 7       | 2012       | 2     | 155        |
| 7        | 8       | 2019       | 1     | 25         |
+----------+---------+------------+-------+------------+
Output:
+---------+------------+-------+------------+
| item_id | first_year | units | unit_price |
+---------+------------+-------+------------+
| 9       | 2015       | 2     | 60         |
| 9       | 2015       | 1     | 60         |
| 8       | 2018       | 5     | 20         |
| 7       | 2012       | 4     | 150        |
| 7       | 2012       | 2     | 155        |
+---------+------------+-------+------------+
Explanation:
Item 9 debuted in 2015 and made two sales that year, both at 60 per
unit; its 2016 sale is dropped. Item 8 first sold in 2018, and item 7
made two sales in its debut year 2012 at different prices.
```

Write your solution as a single `SELECT` query returning `item_id`,
`first_year`, `units`, and `unit_price`.
