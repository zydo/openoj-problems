# Flattening the Price Grid Into Rows

## Description

Table: `PriceGrid`

| Column Name | Type |
| ----------- | ---- |
| item_id     | int  |
| seller_1    | int  |
| seller_2    | int  |
| :           | int  |
| :           | int  |
| :           | int  |
| seller_n    | int  |

`item_id` is the primary key for this table. The table is wide rather than
long: after the id column it carries one column per seller, named after that
seller, and each row holds one item's asking amount at every seller — null in
a seller's column when that seller does not carry the item. The seller set is
not fixed: names differ from testcase to testcase, there is always at least
one seller, and there are never more than 30.

Flatten the grid back into rows so the result has exactly three columns —
`item_id`, `seller`, and `offer` — with one row per (item, seller) pair where
the item actually has a price at that seller. Pairs whose cell is null are
left out entirely. Return the result table in any order.

Heads up: this one assumes you are already comfortable with SQL. If you are
still finding your feet, save it for later.

Each testcase's `dataset` builds the `PriceGrid` table itself — its DDL
declares the id column plus that testcase's seller columns, then seeds the
rows — so the seller column names have to be discovered from the seeded
schema rather than written down in advance. A submission is several SQLite
statements: a discovery `SELECT` that returns exactly one row and one column
— the comma-separated seller column references, each expression doing its
own quoting — followed by the answer `SELECT`, into which the judge
substitutes that discovered list for every `__COLUMNS__` placeholder before
running it. Column names are judged: the answer must expose exactly
`item_id`, `seller`, and `offer`, one row per non-null cell of the grid.
Rows compare in `item_id` then `seller` order, the canonical reading of the
"any order" latitude above.

The result format is in the following examples.

### Example 1

```text
Input:
PriceGrid table:
+---------+--------+-------+------+
| item_id | Harbor | Vista | Quay |
+---------+--------+-------+------+
| 4       | 90     | null  | 75   |
| 8       | null   | 60    | null |
| 12      | 30     | 40    | 50   |
+---------+--------+-------+------+
Output:
+---------+--------+-------+
| item_id | seller | offer |
+---------+--------+-------+
| 4       | Harbor | 90    |
| 4       | Quay   | 75    |
| 8       | Vista  | 60    |
| 12      | Harbor | 30    |
| 12      | Quay   | 50    |
| 12      | Vista  | 40    |
+---------+--------+-------+
Explanation:
Item 4 is priced at Harbor (90) and Quay (75) but not at Vista; item 8 only
at Vista (60); and item 12 at all three sellers (30 at Harbor, 40 at Vista,
50 at Quay). The flattened rows read those three cells back out one per
line.
```

### Example 2

```text
Input:
PriceGrid table:
+---------+------+------+
| item_id | East | West |
+---------+------+------+
| 2       | null | 15   |
| 5       | null | null |
| 9       | 22   | null |
+---------+------+------+
Output:
+---------+--------+-------+
| item_id | seller | offer |
+---------+--------+-------+
| 2       | West   | 15    |
| 9       | East   | 22    |
+---------+--------+-------+
Explanation:
Item 5 has no price at either seller, so it contributes no rows at all;
item 2 only has West (15) and item 9 only East (22).
```
