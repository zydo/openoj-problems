# Tally Incomes by Pay Band

## Description

Table: `Wallets`

| Column Name    | Type |
| -------------- | ---- |
| wallet_id      | int  |
| monthly_income | int  |

`wallet_id` uniquely identifies each row.

Every row records one customer wallet and the amount it pays out
monthly. Split those wallets across three fixed pay bands and report how
many land in each:

- `"Low Salary"` — monthly income strictly below `20000`.
- `"Average Salary"` — monthly income from `20000` through `50000`,
  endpoints included.
- `"High Salary"` — monthly income strictly above `50000`.

Return one row per band holding that band's wallet count. All three rows
must appear even when a band is empty (report `0` for it), and the rows
may come back in any order.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Wallets` rows (whichever are present) before your query runs.
The result format is in the following example.

### Example 1

```text
Input:
Wallets table:
+--------------+----------------+
| wallet_id    | monthly_income |
+--------------+----------------+
| 4            | 12000          |
| 9            | 20000          |
| 11           | 35000          |
| 23           | 50000          |
| 31           | 72000          |
+--------------+----------------+
Output:
+----------------+--------------+
| band           | wallet_count |
+----------------+--------------+
| Low Salary     | 1            |
| Average Salary | 3            |
| High Salary    | 1            |
+----------------+--------------+
Explanation:
Only wallet 4 earns below 20000. Wallets 9, 11, and 23 sit in the
middle band — 20000 and 50000 are endpoints of the inclusive range, so
both count. Wallet 31 is the sole income above 50000.
```

### Example 2

```text
Input:
Wallets table:
+--------------+----------------+
| wallet_id    | monthly_income |
+--------------+----------------+
| 5            | 19999          |
| 6            | 50001          |
+--------------+----------------+
Output:
+----------------+--------------+
| band           | wallet_count |
+----------------+--------------+
| Low Salary     | 1            |
| Average Salary | 0            |
| High Salary    | 1            |
+----------------+--------------+
Explanation:
19999 misses the middle band by one, and 50001 clears it by one, so the
average band is empty and still reported, with a count of 0.
```

Write your solution as a single `SELECT` query returning the three rows
`band` / `wallet_count` — one row per pay band, with empty bands
reported as 0.
