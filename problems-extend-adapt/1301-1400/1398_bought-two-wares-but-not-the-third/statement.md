# Bought Two Wares but Not the Third

## Description

Table: `Patrons`

| Column Name | Type    |
| ----------- | ------- |
| patron_id   | int     |
| patron_name | varchar |

`patron_id` is the column with unique values for this table.
`patron_name` is the name of the patron.

Table: `Baskets`

| Column Name | Type    |
| ----------- | ------- |
| basket_id   | int     |
| patron_id   | int     |
| ware_name   | varchar |

`basket_id` is the column with unique values for this table.
`patron_id` is the id of the patron who bought the ware called
`ware_name`.

The store's wares carry one-letter codes — `A`, `B`, `C`, and `D` are the
four it stocks.

Write a query that reports the `patron_id` and `patron_name` of every
patron who bought ware `A` and also ware `B` but never bought ware `C`:
those are the shoppers worth nudging toward `C`.

Return the result table ordered by `patron_id`.

### Example 1

```text
Input:
Patrons table:
+-------------+---------------+
| patron_id   | patron_name   |
+-------------+---------------+
| 1           | Sana          |
| 2           | Tariq         |
| 3           | Ula           |
| 4           | Vik           |
+-------------+---------------+
Baskets table:
+------------+-------------+------------+
| basket_id  | patron_id   | ware_name  |
+------------+-------------+------------+
| 10         | 1           | A          |
| 20         | 1           | B          |
| 30         | 1           | D          |
| 40         | 2           | A          |
| 50         | 2           | C          |
| 60         | 3           | A          |
| 70         | 3           | B          |
| 80         | 4           | B          |
| 90         | 4           | C          |
+------------+-------------+------------+
Output:
+-------------+---------------+
| patron_id   | patron_name   |
+-------------+---------------+
| 1           | Sana          |
| 3           | Ula           |
+-------------+---------------+
Explanation: Sana bought A and B (plus the unrelated D) and never C; Ula
bought exactly A and B. Tariq is missing B, and Vik never bought A, so
neither qualifies.
```
