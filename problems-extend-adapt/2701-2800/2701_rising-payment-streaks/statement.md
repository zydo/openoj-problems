# Rising Payment Streaks

## Description

Table: `Payments`

| Column Name | Type |
| ----------- | ---- |
| payment_id  | int  |
| payer_id    | int  |
| paid_on     | date |
| total       | int  |

`payment_id` is the column with unique values of this table. Every row is
one payment: the payer who made it, the calendar day it happened
(`paid_on`), and the amount that changed hands (`total`). No payer makes
two payments on the same day.

A streak is a run of days, one after another with no day skipped, on which
the same payer paid strictly more than they did the day before. The moment
a day is skipped, or a payment does not exceed the previous day's total,
the streak ends.

Report every streak that lasts three or more days. Each streak contributes
one row holding the `payer_id`, the streak's first day, and its last day;
a payer can appear in several rows when several of their streaks qualify.
Four rising days in a row are still a single streak covering all four, not
every three-day window inside it.

Return the result table ordered by `payer_id`, `streak_start`,
`streak_end` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Payments` before your query executes. The result format is in the
following examples.

### Example 1

```text
Input:
Payments table:
+------------+----------+------------+-------+
| payment_id | payer_id | paid_on    | total |
+------------+----------+------------+-------+
| 1          | 41       | 2024-03-04 | 12    |
| 2          | 41       | 2024-03-05 | 18    |
| 3          | 41       | 2024-03-06 | 25    |
| 4          | 42       | 2024-03-04 | 50    |
| 5          | 42       | 2024-03-05 | 40    |
| 6          | 43       | 2024-03-08 | 7     |
| 7          | 43       | 2024-03-09 | 9     |
| 8          | 43       | 2024-03-11 | 15    |
| 9          | 43       | 2024-03-12 | 20    |
| 10         | 43       | 2024-03-13 | 30    |
| 11         | 44       | 2024-04-01 | 100   |
| 12         | 44       | 2024-04-02 | 100   |
| 13         | 44       | 2024-04-03 | 150   |
+------------+----------+------------+-------+
Output:
+----------+--------------+------------+
| payer_id | streak_start | streak_end |
+----------+--------------+------------+
| 41       | 2024-03-04   | 2024-03-06 |
| 43       | 2024-03-11   | 2024-03-13 |
+----------+--------------+------------+
Explanation:
- Payer 41 paid 12, then 18, then 25 on three days back to back, and each
  day beat the one before, so 2024-03-04 through 2024-03-06 is a streak.
- Payer 42 went down from 50 to 40, so nothing qualifies for them.
- Payer 43 rose on 2024-03-08 and 2024-03-09, but 2024-03-10 has no
  payment, which cuts the run; their next three days (2024-03-11 through
  2024-03-13, totals 15, 20, 30) form a second, qualifying streak.
- Payer 44 repeated 100 on 2024-04-02, and a streak must strictly rise,
  so their later increase comes too late.
```

### Example 2

```text
Input:
Payments table:
+------------+----------+------------+-------+
| payment_id | payer_id | paid_on    | total |
+------------+----------+------------+-------+
| 1          | 77       | 2024-05-30 | 5     |
| 2          | 77       | 2024-05-31 | 6     |
| 3          | 78       | 2024-06-10 | 9     |
| 4          | 77       | 2024-06-01 | 8     |
| 5          | 77       | 2024-06-02 | 4     |
| 6          | 79       | 2024-06-20 | 31    |
| 7          | 78       | 2024-06-11 | 9     |
+------------+----------+------------+-------+
Output:
+----------+--------------+------------+
| payer_id | streak_start | streak_end |
+----------+--------------+------------+
| 77       | 2024-05-30   | 2024-06-01 |
+----------+--------------+------------+
Explanation:
- Payer 77 paid 5, 6 and 8 on 2024-05-30, 2024-05-31 and 2024-06-01 — a
  rising run that crosses the month boundary and lasts exactly three days
  — before dropping to 4 on 2024-06-02.
- Payer 78 paid the same 9 two days running; equal totals never count.
- Payer 79 paid only once, so no streak is possible.
```

The rows come out sorted first by payer, then by the streak's own days, so
the sequence above is fully determined. Write your solution as a single
`SELECT` query returning three columns — `payer_id`, `streak_start`, and
`streak_end`, in that order — with the rows in the ordering described
above.
