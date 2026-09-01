# Buyers of the Entire Catalog

## Description

Two tables describe a shop's sales activity. `Purchases` holds one row
per recorded purchase; a buyer appears once per item they bought, and a
purchase may even be logged more than once. `Catalog` lists every item
the shop sells.

Table: `Purchases`

| Column Name | Type |
| ----------- | ---- |
| buyer_id    | int  |
| item_id     | int  |

`buyer_id` is never NULL. `item_id` refers to a row of `Catalog`.

Table: `Catalog`

| Column Name | Type |
| ----------- | ---- |
| item_id     | int  |

`item_id` is the primary key (column with unique values) of this table.

Report the ids of every buyer who has purchased every item in the
catalog.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Purchases table:
+----------+---------+
| buyer_id | item_id |
+----------+---------+
| 1        | 11      |
| 2        | 11      |
| 4        | 11      |
| 5        | 33      |
| 1        | 22      |
| 2        | 22      |
| 4        | 22      |
| 1        | 33      |
| 4        | 33      |
| 4        | 33      |
+----------+---------+
Catalog table:
+---------+
| item_id |
+---------+
| 11      |
| 22      |
| 33      |
+---------+
Output:
+----------+
| buyer_id |
+----------+
| 1        |
| 4        |
+----------+
Explanation:
The catalog carries items 11, 22, and 33. Buyers 1 and 4 are the only
ones with a purchase row for all three; the duplicate log entry for
buyer 4 and item 33 does not change that, and buyer 2 stops at two of
the three items.
```

Write your solution as a single `SELECT` query returning `buyer_id`.
