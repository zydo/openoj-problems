# Store Prices I

## Description

A small chain sells its products through three stores, identified as
`'store1'`, `'store2'`, and `'store3'`. Which stores carry which
products, and at what price, is recorded in one table.

Table: `Stock`

| Column Name | Type |
| ----------- | ---- |
| product_id  | int  |
| store       | enum |
| price       | int  |

(`product_id`, `store`) is the primary key for this table.

`store` is a category of type `('store1', 'store2', 'store3')` and
names the store the row is about; `price` is what the product costs
there. A product has one row for every store that carries it, and no
row for a store that does not.

Reshape the table into one row per product with one column per store:
a store's column holds the product's price at that store, or null when
that store does not carry the product.

Each testcase's `dataset` seeds the `Stock` table with that testcase's
rows. Return the result table in any order. The result format is in the
following examples.

### Example 1

```text
Input:
Stock table:
+------------+--------+-------+
| product_id | store  | price |
+------------+--------+-------+
| 10         | store1 | 40    |
| 10         | store2 | 44    |
| 10         | store3 | 39    |
| 11         | store1 | 25    |
| 11         | store3 | 29    |
| 12         | store2 | 60    |
+------------+--------+-------+
Output:
+------------+--------+--------+--------+
| product_id | store1 | store2 | store3 |
+------------+--------+--------+--------+
| 10         | 40     | 44     | 39     |
| 11         | 25     | null   | 29     |
| 12         | null   | 60     | null   |
+------------+--------+--------+--------+
Explanation:
Product 10 costs 40 at store1, 44 at store2, and 39 at store3. Product
11 is carried by store1 and store3 only, so its store2 cell is null.
Product 12 is carried by store2 alone, at price 60.
```

### Example 2

```text
Input:
Stock table:
+------------+--------+-------+
| product_id | store  | price |
+------------+--------+-------+
| 7          | store2 | 15    |
+------------+--------+-------+
Output:
+------------+--------+--------+--------+
| product_id | store1 | store2 | store3 |
+------------+--------+--------+--------+
| 7          | null   | 15     | null   |
+------------+--------+--------+--------+
Explanation:
Only store2 carries product 7, at price 15; the other two store
columns come out null.
```

Write your solution as a single `SELECT` query returning `product_id`,
`store1`, `store2`, and `store3` — one row for every product in
`Stock`, with each store column holding that product's price at the
store the column names and null where that store does not carry it.
