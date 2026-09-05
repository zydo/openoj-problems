# Friday Spending III

## Description

Table: `SpendLog`

| Column Name  | Type |
| ------------ | ---- |
| shopper_id   | int  |
| spend_date   | date |
| spend_amount | int  |

(`shopper_id`, `spend_date`, `spend_amount`) is the primary key
(combination of columns with unique values) for this table.
`spend_date` falls between November 1, 2023 and November 30, 2023, both
included. Each row records one shopper's spending on one day.

Table: `Members`

| Column Name | Type |
| ----------- | ---- |
| shopper_id  | int  |
| tier        | enum |

`shopper_id` is the primary key for this table. `tier` is an ENUM
(category) type of ('Standard', 'Premium', 'VIP'). Each row states
which plan a shopper is on.

The store wants a Friday-by-Friday breakdown: for every Friday of
November 2023, total the spending of the `Premium` and `VIP` shoppers,
reported per tier. Every Friday of the month gets a row for each of the
two tiers, and a Friday with no Premium or VIP activity reports `0`
rather than being dropped.

Return the result table ordered by week of the month, then by tier,
both ascending.

The judge hands your query `SpendLog` and `Members` tables already
loaded with the testcase's rows — each case runs against its own
`dataset`. The result format is in the following examples.

### Example 1

```text
Input:
SpendLog table:
+------------+------------+--------------+
| shopper_id | spend_date | spend_amount |
+------------+------------+--------------+
| 1          | 2023-11-03 | 900          |
| 2          | 2023-11-03 | 1100         |
| 3          | 2023-11-08 | 700          |
| 2          | 2023-11-17 | 2400         |
| 4          | 2023-11-24 | 5000         |
| 1          | 2023-11-24 | 320          |
| 5          | 2023-11-25 | 999          |
+------------+------------+--------------+
Members table:
+------------+----------+
| shopper_id | tier     |
+------------+----------+
| 1          | VIP      |
| 2          | Premium  |
| 3          | Standard |
| 4          | VIP      |
| 5          | Premium  |
+------------+----------+
Output:
+---------------+---------+--------------+
| week_of_month | tier    | total_amount |
+---------------+---------+--------------+
| 1             | Premium | 1100         |
| 1             | VIP     | 900          |
| 2             | Premium | 0            |
| 2             | VIP     | 0            |
| 3             | Premium | 0            |
| 3             | VIP     | 2400         |
| 4             | Premium | 0            |
| 4             | VIP     | 5320         |
+---------------+---------+--------------+
Explanation:
The first Friday, November 3, collects 1100 from Premium shopper 2 and
900 from VIP shopper 1. Nothing qualifying happened on November 10, so
week 2 is all zeros. On the third Friday only shopper 2 (VIP) spent.
The fourth Friday sums VIP shoppers 4 and 1 to 5320. The Wednesday,
Saturday, and Standard-shopper rows never enter the totals.
```

### Example 2

```text
Input:
SpendLog table:
+------------+------------+--------------+
| shopper_id | spend_date | spend_amount |
+------------+------------+--------------+
| 7          | 2023-11-03 | 400          |
| 8          | 2023-11-10 | 150          |
| 9          | 2023-11-24 | 2200         |
+------------+------------+--------------+
Members table:
+------------+----------+
| shopper_id | tier     |
+------------+----------+
| 7          | Standard |
| 8          | Standard |
| 9          | Standard |
+------------+----------+
Output:
+---------------+---------+--------------+
| week_of_month | tier    | total_amount |
+---------------+---------+--------------+
| 1             | Premium | 0            |
| 1             | VIP     | 0            |
| 2             | Premium | 0            |
| 2             | VIP     | 0            |
| 3             | Premium | 0            |
| 3             | VIP     | 0            |
| 4             | Premium | 0            |
| 4             | VIP     | 0            |
+---------------+---------+--------------+
Explanation:
Every shopper here is on the Standard plan, so no Friday collects any
Premium or VIP money — the report still lists all eight tier slots,
each with 0.
```

Write your solution as a single `SELECT` query returning three columns
— `week_of_month`, `tier`, `total_amount` — with exactly one row for
every combination of the four Fridays in November 2023 (numbered by
their occurrence within the month) and each of the `Premium`/`VIP`
tiers, in ascending week order, then ascending tier order. Return the
result table in that order.
