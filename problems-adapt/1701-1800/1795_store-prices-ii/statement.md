# Store Prices II

## Description

A small chain tracks what every product costs at each of its three
stores — `'store1'`, `'store2'`, and `'store3'` — in one wide table.

Table: `Inventory`

| Column Name | Type |
| ----------- | ---- |
| product_id  | int  |
| store1      | int  |
| store2      | int  |
| store3      | int  |

`product_id` is the primary key (column with unique values) for this
table.

Each row holds one product's price at each of the three stores, one
store per column. When a store does not carry the product, that store's
column is null.

Reshape the table so that each row is one (`product_id`, `store`,
`price`) cell: one row per product-store pair that actually carries a
price, with the store's name in `store`. A pair whose cell is null
contributes no row.

Each testcase's `dataset` seeds the `Inventory` table with that
testcase's rows. Return the result table in any order. The result
format is in the following examples.

### Example 1

```text
Input:
Inventory table:
+------------+--------+--------+--------+
| product_id | store1 | store2 | store3 |
+------------+--------+--------+--------+
| 21         | 120    | null   | 130    |
| 22         | 80     | 85     | null   |
| 23         | null   | null   | 60     |
| 24         | 0      | null   | null   |
+------------+--------+--------+--------+
Output:
+------------+--------+-------+
| product_id | store  | price |
+------------+--------+-------+
| 21         | store1 | 120   |
| 21         | store3 | 130   |
| 22         | store1 | 80    |
| 22         | store2 | 85    |
| 23         | store3 | 60    |
| 24         | store1 | 0     |
+------------+--------+-------+
Explanation:
Product 21 is missing from store2 and product 22 from store3, so those
pairs contribute no rows. Product 23 is carried by store3 alone, and
product 24 costs 0 at store1 — a price of 0 still means the store
carries it.
```

### Example 2

```text
Input:
Inventory table:
+------------+--------+--------+--------+
| product_id | store1 | store2 | store3 |
+------------+--------+--------+--------+
| 30         | 45     | null   | null   |
| 31         | null   | null   | 75     |
+------------+--------+--------+--------+
Output:
+------------+--------+-------+
| product_id | store  | price |
+------------+--------+-------+
| 30         | store1 | 45    |
| 31         | store3 | 75    |
+------------+--------+-------+
Explanation:
Each product appears only where a store carries it.
```

Write your solution as a single `SELECT` query returning `product_id`,
`store`, and `price` — one row for every non-null cell among the three
store columns, where `store` is the column's name and `price` is its
value.
