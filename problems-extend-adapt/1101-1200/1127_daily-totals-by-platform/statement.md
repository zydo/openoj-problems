# Daily Totals by Platform

## Description

An online shop sells through a desktop site and a mobile app. Every
purchase a shopper makes is logged in `Charges`: who bought, on which
day, through which platform, and for how much.

Table: `Charges`

| Column Name | Type |
| ----------- | ---- |
| shopper_id  | int  |
| spend_date  | date |
| platform    | enum |
| amount      | int  |

`(shopper_id, spend_date, platform)` is the primary key (combination
of columns with unique values) of this table.
The `platform` column is an ENUM (category) type of (`'desktop'`,
`'mobile'`).

Look at one date at a time and split that day's shoppers into three
groups: those who bought through mobile only, those who bought
through desktop only, and those who bought through both platforms.
For each group report the number of shoppers in it and the total
amount they spent.

Every date in the table always gets a `'both'` row — padded with zeros
when nobody bought on both platforms that day. A `'desktop'` or
`'mobile'` row appears only when at least one shopper was only on that
platform that day.

Return the result rows in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Charges table:
+------------+------------+----------+--------+
| shopper_id | spend_date | platform | amount |
+------------+------------+----------+--------+
| 1          | 2019-08-01 | mobile   | 120    |
| 1          | 2019-08-01 | desktop  | 80     |
| 2          | 2019-08-01 | mobile   | 45     |
| 3          | 2019-08-01 | desktop  | 200    |
| 2          | 2019-08-02 | desktop  | 60     |
| 1          | 2019-08-02 | mobile   | 30     |
| 1          | 2019-08-02 | desktop  | 70     |
| 4          | 2019-08-02 | mobile   | 25     |
+------------+------------+----------+--------+
Output:
+------------+----------+--------------+----------------+
| spend_date | platform | total_amount | total_shoppers |
+------------+----------+--------------+----------------+
| 2019-08-01 | both     | 200          | 1              |
| 2019-08-01 | desktop  | 200          | 1              |
| 2019-08-01 | mobile   | 45           | 1              |
| 2019-08-02 | both     | 100          | 1              |
| 2019-08-02 | desktop  | 60           | 1              |
| 2019-08-02 | mobile   | 25           | 1              |
+------------+----------+--------------+----------------+
Explanation:
On 2019-08-01, shopper 1 bought on both platforms for 120 + 80 = 200,
shopper 2 was mobile only (45), and shopper 3 was desktop only (200).
One shopper lands in each group. On 2019-08-02, shopper 1 was again
on both platforms (30 + 70 = 100), shopper 2 was desktop only (60),
and shopper 4 was mobile only (25).
```

### Example 2

```text
Input:
Charges table:
+------------+------------+----------+--------+
| shopper_id | spend_date | platform | amount |
+------------+------------+----------+--------+
| 5          | 2019-08-03 | mobile   | 90     |
| 6          | 2019-08-03 | desktop  | 40     |
| 5          | 2019-08-04 | mobile   | 10     |
+------------+------------+----------+--------+
Output:
+------------+----------+--------------+----------------+
| spend_date | platform | total_amount | total_shoppers |
+------------+----------+--------------+----------------+
| 2019-08-03 | both     | 0            | 0              |
| 2019-08-03 | desktop  | 40           | 1              |
| 2019-08-03 | mobile   | 90           | 1              |
| 2019-08-04 | both     | 0            | 0              |
| 2019-08-04 | mobile   | 10           | 1              |
+------------+----------+--------------+----------------+
Explanation:
On 2019-08-03 nobody used both platforms, so the `'both'` row carries
zeros. On 2019-08-04 shopper 5 was mobile only, and because no one was
desktop only that day, no `'desktop'` row exists for it.
```

Write your solution as a single `SELECT` query returning `spend_date`,
`platform`, `total_amount`, and `total_shoppers`.
