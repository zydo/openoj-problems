# Largest Payment Per Day

## Description

Table: `Payments`

| Column Name | Type     |
| ----------- | -------- |
| payment_id  | int      |
| paid_at     | datetime |
| value       | int      |

`payment_id` is the column with unique values for this table.

Each row describes one payment: the moment it was made, and for how
much. The `paid_at` timestamps are stored as zero-padded `YYYY-MM-DD
HH:MM:SS` strings.

A payment's day is the calendar date its `paid_at` starts with. Report
the IDs of the payments with the largest `value` on their respective
day. If several payments tie for a day's largest value, report all of
them.

Return the result table ordered by `payment_id` in ascending order.

Each testcase's `dataset` seeds the `Payments` table with that
testcase's rows. The result format is in the following example.

### Example 1

```text
Input:
Payments table:
+------------+---------------------+-------+
| payment_id | paid_at             | value |
+------------+---------------------+-------+
| 32         | 2022-11-05 18:40:02 | 95    |
| 31         | 2022-11-05 09:12:44 | 120   |
| 34         | 2022-11-06 23:59:59 | 300   |
| 33         | 2022-11-06 00:00:01 | 300   |
| 36         | 2022-11-08 08:00:00 | 60    |
| 37         | 2022-11-08 20:15:00 | 88    |
| 35         | 2022-11-07 12:00:00 | 75    |
+------------+---------------------+-------+
Output:
+------------+
| payment_id |
+------------+
| 31         |
| 33         |
| 34         |
| 35         |
| 37         |
+------------+
Explanation:
On 2022-11-05 the payment with ID 31 carries the day's largest value,
120, while payment 32 only reached 95. On 2022-11-06 payments 33 and
34 tie at 300 — one a second after midnight, the other a second
before the next midnight — so both are reported. On 2022-11-07 the
only payment, 35, is trivially the day's largest. On 2022-11-08
payment 37's 88 beats payment 36's 60. Collecting these IDs and
sorting them ascending gives 31, 33, 34, 35, and 37.
```

## Hints

### Hint 1

Cut each `paid_at` down to its calendar day, then find the largest
`value` inside each day — a window function or a `MAX()` subquery both
work, and every tie must survive.
