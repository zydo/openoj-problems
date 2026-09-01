# Shelf Price on a Date

## Description

Table: `Prices`

| Column Name   | Type |
| ------------- | ---- |
| sku           | int  |
| sticker_price | int  |
| marked_on     | date |

`(sku, marked_on)` is the primary key (combination of columns with
unique values) of this table.
Each row says that the shelf price of some product was re-marked to
`sticker_price` on the date `marked_on`.

Every product starts life priced at `10` and keeps that price until its
first marking.

Report the shelf price of every product in the table as of the date
`2019-08-16`.

Return the result table in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Prices table:
+-----+---------------+------------+
| sku | sticker_price | marked_on  |
+-----+---------------+------------+
| 1   | 25            | 2019-08-02 |
| 2   | 40            | 2019-08-10 |
| 1   | 30            | 2019-08-16 |
| 2   | 55            | 2019-08-20 |
| 3   | 18            | 2019-08-18 |
| 4   | 12            | 2019-08-16 |
+-----+---------------+------------+
Output:
+-----+-------+
| sku | price |
+-----+-------+
| 1   | 30    |
| 2   | 40    |
| 3   | 10    |
| 4   | 12    |
+-----+-------+
Explanation: Product 1 was re-marked to 30 on the as-of date itself, so
30 wins. Product 2's later marking (55) is dated after 2019-08-16 and
does not count, leaving 40. Product 3 is first marked on 2019-08-18 —
after the as-of date — so it still carries its starting price of 10.
```

Write your solution as a single `SELECT` query returning `sku` and
`price`.
