# Daily Parity Totals

## Description

Table: `ledger_entries`

| Column Name | Type |
| ----------- | ---- |
| entry_id    | int  |
| amount      | int  |
| posted_on   | date |

`entry_id` uniquely identifies each row of this table.
Each row holds one ledger entry: its id, the amount it moved, and the
day it posted.

Write a query that splits every day's activity by the parity of the
amounts. For each day, report:

- `odd_total`: the sum of that day's odd amounts.
- `even_total`: the sum of that day's even amounts.

A day that has no entry of one parity shows `0` on that side.

Return the result table ordered by `posted_on` ascending.

Each testcase supplies its own `dataset`: the DDL seeds the
`ledger_entries` table with that testcase's rows. An entry counts as
_odd_ when its `amount` is odd and _even_ when its `amount` is even —
parity is a property of the amount, never of the `entry_id`. Only days
that actually appear in the table produce a row; a calendar day without
entries shows up nowhere in the result. The result format is in the
following examples.

### Example 1

```text
Input: ledger_entries table from the dataset below.
Output:
posted_on   odd_total  even_total
2023-05-01  61         40
2023-05-02  7          74
2023-05-03  0          90
Explanation: on 2023-05-01 the odd amount 61 and the even amount 40
give (61, 40); 2023-05-02 holds the odd 7 and the even 74; 2023-05-03
carries only the even 90, so its odd_total reads 0.
```

### Example 2

```text
Input: ledger_entries table from the dataset below.
Output:
posted_on   odd_total  even_total
2023-08-10  30         28
2023-08-11  3          0
Explanation: every entry_id in 2023-08-10 is even, yet the day still
totals odd 15 + 15 = 30 against even 28 — proof the split follows the
amounts. 2023-08-11 has the lone odd 3, so its even_total reads 0.
```

Write your solution as a single `SELECT` query returning three columns
— `posted_on`, `odd_total`, and `even_total` — one row per day present
in the table, ordered by `posted_on` ascending.
