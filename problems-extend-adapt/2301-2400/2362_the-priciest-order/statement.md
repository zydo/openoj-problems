# The Priciest Order

## Description

Table: `Catalog`

| Column Name | Type |
| ----------- | ---- |
| item_id     | int  |
| price       | int  |

`item_id` contains unique values. Each row fixes the price of one unit
of a single item.

Table: `Orders`

| Column Name | Type |
| ----------- | ---- |
| order_id    | int  |
| item_id     | int  |
| quantity    | int  |

`(order_id, item_id)` contains unique values. Each row is one line of an
order: so many units of one item were bought under that order id.

An order's total is the sum over its lines of the item's unit price
times the line's quantity. Display every line of the order with the
largest total — each line reported as its item, its quantity, and the
line's own total. Should several orders share the largest total, display
the lines of the one with the smallest `order_id`.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Catalog`
and `Orders` tables with that testcase's rows. Every order line
references an item present in `Catalog`, so no line is ever lost, while
the reverse is not required — a catalog item nobody ordered simply never
shows up. Order ids are arbitrary: they need not be contiguous and they
arrive in no particular order. Write your solution as a single `SELECT`
query returning three columns — `item_id`, `quantity`, and `price`,
where `price` is the line's total (unit price times quantity), not the
unit price itself. The result format is shown in the following examples.

### Example 1

```text
Input:
Catalog table:
+---------+-------+
| item_id | price |
+---------+-------+
| 101     | 40    |
| 102     | 25    |
| 103     | 60    |
+---------+-------+
Orders table:
+----------+---------+----------+
| order_id | item_id | quantity |
+----------+---------+----------+
| 501      | 101     | 3        |
| 502      | 102     | 2        |
| 502      | 103     | 1        |
| 503      | 103     | 2        |
+----------+---------+----------+
Output:
+---------+----------+-------+
| item_id | quantity | price |
+---------+----------+-------+
| 101     | 3        | 120   |
+---------+----------+-------+
Explanation:
Order 501: total = 3 * 40 = 120.
Order 502: total = (2 * 25) + (1 * 60) = 110.
Order 503: total = 2 * 60 = 120.

The largest total is 120, and both orders 501 and 503 reach it. The tie
goes to the smaller id, 501, so its single line is displayed.
```

### Example 2

```text
Input:
Catalog table:
+---------+-------+
| item_id | price |
+---------+-------+
| 201     | 10    |
| 202     | 35    |
+---------+-------+
Orders table:
+----------+---------+----------+
| order_id | item_id | quantity |
+----------+---------+----------+
| 301      | 201     | 5        |
| 302      | 202     | 4        |
| 303      | 201     | 7        |
+----------+---------+----------+
Output:
+---------+----------+-------+
| item_id | quantity | price |
+---------+----------+-------+
| 202     | 4        | 140   |
+---------+----------+-------+
Explanation:
Order 301: total = 5 * 10 = 50.
Order 302: total = 4 * 35 = 140.
Order 303: total = 7 * 10 = 70.

Order 302 alone holds the largest total, so its line is displayed.
```
