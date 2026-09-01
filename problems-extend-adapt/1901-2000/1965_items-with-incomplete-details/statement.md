# Items With Incomplete Details

## Description

Table: `Items`

| Column Name | Type    |
| ----------- | ------- |
| item_id     | int     |
| label       | varchar |

`item_id` is the column with unique values for this table.
Each row of this table gives the shelf label of the item whose ID is
`item_id`.

Table: `Prices`

| Column Name | Type |
| ----------- | ---- |
| item_id     | int  |
| amount      | int  |

`item_id` is the column with unique values for this table.
Each row of this table gives the price of the item whose ID is `item_id`.

A catalog entry is incomplete when information about the item is
missing:

- The item's label is missing, or
- The item's price is missing.

Report the IDs of every item whose catalog entry is incomplete, ordered
by `item_id` in ascending order.

Each testcase supplies its own `dataset`: the DDL seeds the `Items` and
`Prices` tables with that testcase's rows. The result format is shown in
the following example.

### Example 1

```text
Input:
Items table:
+---------+---------+
| item_id | label   |
+---------+---------+
| 4       | dowel   |
| 11      | ember   |
| 19      | flint   |
| 26      | gauge   |
+---------+---------+
Prices table:
+---------+--------+
| item_id | amount |
+---------+--------+
| 11      | 340    |
| 4       | 120    |
| 33      | 760    |
| 19      | 205    |
+---------+--------+
Output:
+---------+
| item_id |
+---------+
| 26      |
| 33      |
+---------+
Explanation:
Items 4, 11, 19, and 26 carry labels, and items 4, 11, 19, and 33 carry
prices.
The price of item 26 is missing.
The label of item 33 is missing.
```

An entry is incomplete exactly when its ID appears in only one of the
two tables: an ID in `Prices` but not `Items` has no label, and an ID in
`Items` but not `Prices` has no price. Every ID that appears in exactly
one table is therefore part of the answer, and every ID in both tables
is not. Write your solution as a single `SELECT` query returning one
column — `item_id` — with the rows in ascending `item_id` order.
