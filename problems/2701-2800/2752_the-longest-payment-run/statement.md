# The Longest Payment Run

## Description

Table: `Payments`

| Column Name | Type |
| ----------- | ---- |
| payment_id  | int  |
| payer_id    | int  |
| paid_on     | date |
| total       | int  |

`payment_id` is the column with unique values of this table. Every row is
one payment: who paid, on which calendar day, and for how much. No payer
ever has two payments on the same day.

A run is a stretch of adjacent calendar days on which the same payer paid
once per day. Months and years roll over freely — 2023-12-31 and
2024-01-01 are adjacent, and in the non-leap year 2023 so are
2023-02-28 and 2023-03-01. A payer's run length is their longest such
stretch; a single payment on its own already counts as a run of 1.

Find every payer whose best run ties for the longest best run in the
table, and report their `payer_id`. When no payer has two adjacent days,
every payer's best run is 1 and all of them are returned.

Return the result table ordered by `payer_id` in ascending order.

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
| 1          | 12       | 2024-01-05 | 30    |
| 2          | 12       | 2024-01-06 | 42    |
| 3          | 12       | 2024-01-07 | 55    |
| 4          | 13       | 2024-01-05 | 80    |
| 5          | 13       | 2024-01-06 | 64    |
| 6          | 13       | 2024-01-20 | 91    |
| 7          | 14       | 2024-01-11 | 12    |
+------------+----------+------------+-------+
Output:
+----------+
| payer_id |
+----------+
| 12       |
+----------+
Explanation:
- Payer 12 paid on 2024-01-05, 2024-01-06 and 2024-01-07 — three
  adjacent days, a run of 3.
- Payer 13's first two days are adjacent, but 2024-01-20 stands alone,
  so their best run is only 2.
- Payer 14 paid once, a run of 1.
- The longest best run is 3, and only payer 12 reaches it.
```

### Example 2

```text
Input:
Payments table:
+------------+----------+------------+-------+
| payment_id | payer_id | paid_on    | total |
+------------+----------+------------+-------+
| 1          | 21       | 2023-12-30 | 7     |
| 2          | 21       | 2023-12-31 | 9     |
| 3          | 21       | 2024-01-01 | 11    |
| 4          | 22       | 2024-02-27 | 20    |
| 5          | 22       | 2024-02-28 | 25    |
| 6          | 23       | 2024-03-08 | 4     |
| 7          | 23       | 2024-03-09 | 6     |
| 8          | 23       | 2024-03-10 | 2     |
+------------+----------+------------+-------+
Output:
+----------+
| payer_id |
+----------+
| 21       |
| 23       |
+----------+
Explanation:
- Payer 21 runs straight through the year boundary: 2023-12-30,
  2023-12-31 and 2024-01-01 are three adjacent days.
- Payer 23 also reaches 3 with 2024-03-08 through 2024-03-10, so the
  two tie and both are reported.
- Payer 22's best is the pair 2024-02-27, 2024-02-28 — a run of 2.
```

Write your solution as a single `SELECT` query returning `payer_id` for
every payer tied at the longest run, ordered ascending by `payer_id` —
the ordering is judged.

## Hints

### Hint 1

A payer's dates form runs of adjacent calendar days — the classic
gaps-and-islands shape: partition the rows by payer, order each partition
by `paid_on`, and `LAG(paid_on)` over that frame tells whether the
current row extends its predecessor's run (difference of exactly one day)
or starts a new one.

### Hint 2

Compare dates as day numbers, not strings: `julianday(paid_on)` maps ISO
dates onto a continuous integer timeline, so the difference is exactly 1
precisely when the dates are adjacent — across month and year boundaries
too, where naive string arithmetic breaks.

### Hint 3

Number the runs with a running `SUM` of the new-run flags, `COUNT(*)` per
run to get each length, `MAX` per payer to get each payer's best, then
keep the payers whose best equals the global `MAX` — ties survive, and
`ORDER BY payer_id ASC` supplies the judged order.
