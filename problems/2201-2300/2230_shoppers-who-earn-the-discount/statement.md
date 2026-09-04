# Shoppers Who Earn the Discount

## Description

Table: `CheckoutLog`

| Column Name | Type     |
| ----------- | -------- |
| shopper_id  | int      |
| paid_at     | datetime |
| total       | int      |

(`shopper_id`, `paid_at`) is the primary key (combination of columns with
unique values) for this table.
Each row records one completed checkout: the shopper who paid, the moment
the checkout finished, and the total that was charged.

A shopper earns the discount when some row of theirs falls in the inclusive
time range [windowStart, windowEnd] and carries a total of at least
minTotal. Dates in the range bounds are read as the start of that day, so
`windowEnd = 2022-03-05` means the instant `2022-03-05 00:00:00`.

Write a solution to report the IDs of the shoppers who earn the discount.

Return the result table ordered by `shopper_id`.

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
| 301        | 2022-03-15 10:00:00 | 1500  |
| 302        | 2022-03-19 23:59:59 | 1000  |
| 303        | 2022-03-08 00:00:00 | 2500  |
| 304        | 2022-03-21 00:00:00 | 5000  |
| 305        | 2022-03-12 08:30:00 | 999   |
+------------+---------------------+-------+
windowStart = 2022-03-08, windowEnd = 2022-03-20, minTotal = 1000
Output:
+------------+
| shopper_id |
+------------+
| 301        |
| 302        |
| 303        |
+------------+
Explanation:
Shoppers 301, 302, and 303 earn the discount.
 - Shopper 301 checks out mid-window with a total of 1500 >= 1000.
 - Shopper 302 slips in one second before the window closes, at exactly the
   threshold.
 - Shopper 303 sits on the window's opening instant, and the range is
   inclusive.
 - Shopper 304's checkout lands one instant past the end, and shopper
   305's total is 999, one short of the threshold.
```

### Example 2

```text
Input:
CheckoutLog table:
+------------+---------------------+-------+
| shopper_id | paid_at             | total |
+------------+---------------------+-------+
| 401        | 2022-04-10 12:00:00 | 9800  |
| 402        | 2022-01-05 09:00:00 | 5000  |
+------------+---------------------+-------+
windowStart = 2022-03-08, windowEnd = 2022-03-20, minTotal = 1000
Output:
+------------+
| shopper_id |
+------------+
+------------+
Explanation:
Both checkouts carry generous totals but both fall outside the window, so
no shopper earns the discount and the result is empty.
```

Write your solution as a single `SELECT` query returning one column named
`shopper_id`, ordered by `shopper_id`.
