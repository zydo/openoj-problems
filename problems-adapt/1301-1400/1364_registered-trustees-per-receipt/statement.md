# Registered Trustees per Receipt

## Description

Table: `Shoppers`

| Column Name  | Type    |
| ------------ | ------- |
| shopper_id   | int     |
| shopper_name | varchar |
| email        | varchar |

`shopper_id` is the column with unique values for this table. Each row
holds the name and the email of one registered shopper of an online
marketplace.

Table: `Trustees`

| Column Name   | Type    |
| ------------- | ------- |
| owner_id      | int     |
| trustee_name  | varchar |
| trustee_email | varchar |

`(owner_id, trustee_email)` is the primary key (combination of columns
with unique values) for this table. Each row names one person the shopper
with id `owner_id` trusts. A trustee may or may not be a registered
shopper themselves.

Table: `Receipts`

| Column Name | Type |
| ----------- | ---- |
| receipt_id  | int  |
| price       | int  |
| owner_id    | int  |

`receipt_id` is the column with unique values for this table. Each row is
one purchase receipt: the shopper with id `owner_id` paid `price`.

Write a query that reports, for every receipt:

- `shopper_name` — the name of the shopper the receipt belongs to;
- `price` — the amount on the receipt;
- `trustees_cnt` — how many trustees that shopper has;
- `registered_trustees_cnt` — how many of those trustees are themselves
  registered shoppers, i.e. whose trustee email appears in the `Shoppers`
  table.

Return the result table ordered by `receipt_id`.

### Example 1

```text
Input:
Shoppers table:
+------------+--------------+----------------------+
| shopper_id | shopper_name | email                |
+------------+--------------+----------------------+
| 3          | Ines         | ines@mailhive.io     |
| 4          | Ravi         | ravi@mailhive.io     |
| 9          | Zola         | zola@mailhive.io     |
| 11         | Kwame        | kwame@mailhive.io    |
+------------+--------------+----------------------+
Trustees table:
+----------+--------------+----------------------+
| owner_id | trustee_name | trustee_email        |
+----------+--------------+----------------------+
| 3        | Ravi         | ravi@mailhive.io     |
| 3        | Zola         | zola@mailhive.io     |
| 3        | Bruno        | bruno@mailhive.io    |
| 4        | Petra        | petra@mailhive.io    |
| 4        | Tova         | tova@mailhive.io     |
| 9        | Ines         | ines@mailhive.io     |
+----------+--------------+----------------------+
Receipts table:
+------------+-------+----------+
| receipt_id | price | owner_id |
+------------+-------+----------+
| 12         | 80    | 3        |
| 27         | 140   | 9        |
| 31         | 60    | 3        |
| 40         | 220   | 4        |
| 46         | 90    | 11       |
| 58         | 175   | 9        |
+------------+-------+----------+
Output:
+------------+--------------+-------+--------------+------------------------+
| receipt_id | shopper_name | price | trustees_cnt | registered_trustees_cnt |
+------------+--------------+-------+--------------+------------------------+
| 12         | Ines         | 80    | 3            | 2                       |
| 27         | Zola         | 140   | 1            | 1                       |
| 31         | Ines         | 60    | 3            | 2                       |
| 40         | Ravi         | 220   | 2            | 0                       |
| 46         | Kwame        | 90    | 0            | 0                       |
| 58         | Zola         | 175   | 1            | 1                       |
+------------+--------------+-------+--------------+------------------------+
Explanation: Ines trusts three people, two of whom (Ravi and Zola) are
registered shoppers. Zola trusts one person, Ines, who is registered.
Ravi trusts two people, neither of whom is registered. Kwame trusts no
one, so both counts are 0. Every receipt of a shopper carries that
shopper's counts.
```
