# From Trial To Paid

## Description

Table: `usage_log`

| Column Name | Type    |
| ----------- | ------- |
| account_id  | int     |
| usage_date  | date    |
| phase       | varchar |
| minutes     | int     |

`(account_id, usage_date, phase)` is the unique key for this table.
`phase` is one of (`'free_trial'`, `'paid'`, `'cancelled'`). `minutes` is
how many minutes the account spent on the platform that day. Each row
captures one account's usage on one date.

A streaming service runs a 7-day free trial; afterwards an account either
subscribes to a paid plan or cancels. The growth team wants to see who
actually made the switch. Write a solution to:

- Find the accounts that converted from the free trial to a paid plan
- Compute each such account's average daily minutes across its
  `free_trial` rows, rounded to 2 decimal places
- Compute each such account's average daily minutes across its `paid`
  rows, rounded to 2 decimal places

Return the result table ordered by `account_id` in ascending order.

Each testcase supplies its own `dataset`: the script seeds the
`usage_log` table before your query runs. The result format is in the
following example.

### Example 1

```text
Input:

usage_log table:

+------------+------------+------------+---------+
| account_id | usage_date | phase      | minutes |
+------------+------------+------------+---------+
| 1          | 2024-03-01 | free_trial | 20      |
| 1          | 2024-03-03 | free_trial | 40      |
| 1          | 2024-03-06 | paid       | 50      |
| 1          | 2024-03-08 | paid       | 70      |
| 1          | 2024-03-10 | paid       | 61      |
| 2          | 2024-04-02 | free_trial | 35      |
| 2          | 2024-04-04 | free_trial | 15      |
| 2          | 2024-04-06 | cancelled  | 0       |
| 3          | 2024-05-01 | free_trial | 80      |
| 3          | 2024-05-02 | free_trial | 82      |
| 3          | 2024-05-04 | paid       | 40      |
| 4          | 2024-06-01 | paid       | 90      |
| 5          | 2024-07-01 | free_trial | 10      |
| 5          | 2024-07-02 | cancelled  | 0       |
+------------+------------+------------+---------+

Output:

+------------+-------------------+------------------+
| account_id | trial_avg_minutes | paid_avg_minutes |
+------------+-------------------+------------------+
| 1          | 30.00             | 60.33            |
| 3          | 81.00             | 40.00            |
+------------+-------------------+------------------+

Explanation:

Account 1 tried the product on two days (20 and 40 minutes, averaging
30.00) and then paid on three days (50, 70, and 61 minutes, averaging
60.33 after rounding). Account 2 only ever browsed on trial days before
cancelling — no paid rows, so it is left out. Account 3 averaged 81.00
trial minutes and a single 40-minute paid day, so it appears with 40.00.
Account 4 paid without ever having a trial row, which is not a
conversion. Account 5 gave up during the trial and also never converted.

The output therefore holds exactly the accounts with both trial and paid
history — accounts 1 and 3 — ordered by account_id in ascending order.
```

Write your solution as a single `SELECT` query returning three columns —
`account_id`, `trial_avg_minutes`, and `paid_avg_minutes`, in that order —
with one row for every account that converted from the free trial to a
paid plan.
