# Biggest Spend per Buyer

## Description

Table: `Purchases`

| Column Name | Type |
| ----------- | ---- |
| purchase_id | int  |
| item_id     | int  |
| buyer_id    | int  |
| quantity    | int  |

`purchase_id` is unique. `item_id` references the `Goods` table. Each
row records one purchase: which item was bought, by whom, and how many
units of it.

Table: `Goods`

| Column Name | Type |
| ----------- | ---- |
| item_id     | int  |
| price       | int  |

`item_id` is unique. Each row gives the per-unit price of one item.

For every buyer, work out which item that buyer spent the most money
on, where a buyer's spending on an item is the total over all their
purchase rows of that item, `SUM(quantity * price)`. If a buyer's top
spending is reached on several items, report every one of them.

Each testcase supplies its own `dataset`: the DDL seeds the `Purchases`
and `Goods` tables with that testcase's rows. Return the result table
in any order, with columns `buyer_id` and `item_id`. Every buyer that
appears in `Purchases` buys at least one priced item and gets at least
one row; items nobody bought belong to no buyer's totals. The result
format is shown in the following example.

### Example 1

```text
Input:
Purchases table:
+-------------+---------+----------+----------+
| purchase_id | item_id | buyer_id | quantity |
+-------------+---------+----------+----------+
| 1           | 3       | 501      | 2        |
| 2           | 1       | 501      | 1        |
| 4           | 2       | 501      | 3        |
| 3           | 2       | 502      | 2        |
| 8           | 2       | 502      | 2        |
| 5           | 3       | 502      | 1        |
| 6           | 1       | 503      | 2        |
+-------------+---------+----------+----------+
Goods table:
+---------+-------+
| item_id | price |
+---------+-------+
| 1       | 20    |
| 2       | 5     |
| 3       | 14    |
+---------+-------+
Output:
+----------+---------+
| buyer_id | item_id |
+----------+---------+
| 501      | 3       |
| 502      | 2       |
| 503      | 1       |
+----------+---------+
Explanation:
Buyer 501 spent 2 * 14 = 28 on item 3, 1 * 20 = 20 on item 1, and
3 * 5 = 15 on item 2, so item 3 tops their spending.
Buyer 502 spent 2 * 5 + 2 * 5 = 20 on item 2 and 1 * 14 = 14 on
item 3; pooling the two item-2 purchases wins, so item 2 is reported.
Buyer 503 spent 2 * 20 = 40 on item 1, their only item.
```

### Example 2

```text
Input:
Purchases table:
+-------------+---------+----------+----------+
| purchase_id | item_id | buyer_id | quantity |
+-------------+---------+----------+----------+
| 1           | 5       | 80       | 3        |
| 2           | 7       | 80       | 2        |
| 3           | 11      | 80       | 9        |
| 4           | 7       | 81       | 1        |
| 5           | 11      | 81       | 1        |
+-------------+---------+----------+----------+
Goods table:
+---------+-------+
| item_id | price |
+---------+-------+
| 5       | 6     |
| 7       | 9     |
| 11      | 2     |
+---------+-------+
Output:
+----------+---------+
| buyer_id | item_id |
+----------+---------+
| 80       | 5       |
| 80       | 7       |
| 80       | 11      |
| 81       | 7       |
+----------+---------+
Explanation:
Buyer 80 spent 3 * 6 = 18, 2 * 9 = 18, and 9 * 2 = 18 on items 5, 7,
and 11 — a three-way tie, so all three items are reported.
Buyer 81 spent 1 * 9 = 9 on item 7 and 1 * 2 = 2 on item 11, so
item 7 is reported.
```
