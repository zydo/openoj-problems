# Shoppers in the Discount Window

## Description

Table: `CheckoutLog`

| Column Name | Type     |
| ----------- | -------- |
| shopper_id  | int      |
| paid_at     | datetime |
| total       | int      |

(`shopper_id`, `paid_at`) is the primary key (combination of columns with
unique values) for this table. Each row records one completed checkout: the
shopper who paid, the moment the checkout finished, and the total that was
charged.

A shopper qualifies for the discount window when some row of theirs falls in
the inclusive time range [windowStart, windowEnd] and carries a total of at
least minTotal. Dates in the range bounds are read as the start of that day,
so `windowEnd = 2022-03-20` means the instant `2022-03-20 00:00:00`.

Write a solution to report how many distinct shoppers qualify.

Each testcase's `dataset` seeds the `CheckoutLog` table: its script inserts
the testcase's `CheckoutLog` rows before your query runs. Every testcase
uses the same window and threshold as the example below — windowStart =
2022-03-08, windowEnd = 2022-03-20, and minTotal = 1000.

The result format is in the following example.

### Example 1

```text
Input:
CheckoutLog table:
+------------+---------------------+-------+
| shopper_id | paid_at             | total |
+------------+---------------------+-------+
| 101        | 2022-03-14 08:15:00 | 1250  |
| 102        | 2022-03-20 00:00:00 | 1000  |
| 103        | 2022-03-21 23:59:59 | 9800  |
| 104        | 2022-03-09 12:00:00 | 999   |
| 105        | 2022-04-01 10:00:00 | 5000  |
| 105        | 2022-03-12 06:30:00 | 2000  |
| 106        | 2022-03-18 18:45:10 | 1000  |
+------------+---------------------+-------+
windowStart = 2022-03-08, windowEnd = 2022-03-20, minTotal = 1000
Output:
+-------------+
| shopper_cnt |
+-------------+
| 4           |
+-------------+
Explanation:
Shoppers 101, 102, 105, and 106 qualify.
 - Shopper 101 has one checkout inside the window with a total of 1250 >= 1000.
 - Shopper 102 sits exactly on the window's end instant, and the range is
   inclusive, so its total of 1000 counts.
 - Shopper 103 misses the window entirely and shopper 104's total is 999,
   one short of the threshold.
 - Shopper 105's April checkout is outside the window, but the March 12
   checkout with total 2000 qualifies them.
 - Shopper 106 lands inside the window exactly at the threshold.
```

### Example 2

```text
Input:
CheckoutLog table:
+------------+---------------------+-------+
| shopper_id | paid_at             | total |
+------------+---------------------+-------+
| 201        | 2022-03-08 00:00:00 | 999   |
| 202        | 2022-02-28 23:59:59 | 9999  |
+------------+---------------------+-------+
windowStart = 2022-03-08, windowEnd = 2022-03-20, minTotal = 1000
Output:
+-------------+
| shopper_cnt |
+-------------+
| 0           |
+-------------+
Explanation:
Shopper 201 opens the window at the very first instant but the total is
999, and shopper 202's large total was paid before the window begins, so
no shopper qualifies.
```

Write your solution as a single `SELECT` query returning one row with a
single column named `shopper_cnt`.
