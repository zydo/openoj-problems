# Building the Seller Price Grid

## Description

Table: `Offers`

| Column Name | Type    |
| ----------- | ------- |
| item_id     | int     |
| seller      | varchar |
| offer       | int     |

(`item_id`, `seller`) is the primary key (combination of columns with unique
values) for this table. Each row holds the asking amount one seller has posted
for one item: `item_id` identifies the item, `seller` names the merchant, and
`offer` is that merchant's price for it. No more than 30 distinct sellers ever
appear in the table.

Reshape the table so each item occupies a single row and every seller gets a
column of its own: the cell where an item's row meets a seller's column
carries that seller's offer for the item, and is null when the seller does
not carry the item. The output keeps `item_id` first, followed by one column
per seller with the sellers ordered lexicographically by name. Return the
result table in any order.

Fair warning: this one is aimed at solvers already comfortable with SQL. If
you are new to it, come back once the rest of the bank feels easy.

Each testcase's `dataset` seeds the `Offers` table with that testcase's rows,
and the seller set changes from testcase to testcase, so the pivoted column
list cannot be written in advance. A submission is several SQLite statements:
a discovery `SELECT` returning exactly one row and one column — the
comma-separated pivot column expressions for the testcase's sellers, in
lexicographical order, each expression doing its own quoting — followed by
the answer `SELECT`, into which the judge substitutes that discovered list
for every `__COLUMNS__` placeholder before running it. Column names are
judged: `item_id` comes first and the seller columns follow in
lexicographical order, with null in every cell whose item has no row for
that seller. Rows compare in `item_id` order, the canonical reading of the
"any order" latitude above.

The result format is in the following examples.

### Example 1

```text
Input:
Offers table:
+---------+----------+-------+
| item_id | seller   | offer |
+---------+----------+-------+
| 7       | Uptown   | 310   |
| 7       | Axis     | 295   |
| 2       | Axis     | 140   |
| 2       | Kepler   | 150   |
| 5       | Uptown   | 205   |
| 5       | Kepler   | 230   |
| 5       | Axis     | 190   |
+---------+----------+-------+
Output:
+---------+------+--------+--------+
| item_id | Axis | Kepler | Uptown |
+---------+------+--------+--------+
| 2       | 140  | 150    | null   |
| 5       | 190  | 230    | 205    |
| 7       | 295  | null   | 310    |
+---------+------+--------+--------+
Explanation:
The three sellers sort to Axis, Kepler, Uptown, so the reshaped table gets
those three columns after item_id. Item 2 is carried by Axis (140) and
Kepler (150) but not by Uptown; item 5 has an offer from every seller; and
item 7 is carried by Axis (295) and Uptown (310) but not by Kepler, whose
cell is therefore null.
```

### Example 2

```text
Input:
Offers table:
+---------+------------+-------+
| item_id | seller     | offer |
+---------+------------+-------+
| 1       | North Wing | 42    |
| 1       | Old'Tom's  | 39    |
| 2       | North Wing | 55    |
| 3       | Old'Tom's  | 61    |
+---------+------------+-------+
Output:
+---------+------------+-----------+
| item_id | North Wing | Old'Tom's |
+---------+------------+-----------+
| 1       | 42         | 39        |
| 2       | 55         | null      |
| 3       | null       | 61        |
+---------+------------+-----------+
Explanation:
Seller names may contain spaces and apostrophes — the pivoted column names
use them verbatim, and `North Wing` sorts before `Old'Tom's`. Item 2 has no
row for `Old'Tom's` and item 3 has none for `North Wing`, so those two
cells are null.
```
