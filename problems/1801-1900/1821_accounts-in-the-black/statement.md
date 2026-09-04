# Accounts In The Black

## Description

Table: `Accounts`

| Column Name | Type |
| ----------- | ---- |
| account_id  | int  |
| fiscal_year | int  |
| earnings    | int  |

`(account_id, fiscal_year)` is the primary key (combination of columns
with unique values) for this table.

Each row carries one account's `earnings` for one `fiscal_year`. The
figure is annual and can be negative.

An account is in the black for 2021 when its `earnings` for
`fiscal_year` `2021` are strictly positive. Report the ID of every
account that is in the black for 2021.

Each testcase's `dataset` seeds the `Accounts` table with that
testcase's rows. Return the result table in any order. The result
format is in the following example.

### Example 1

```text
Input:
Accounts table:
+------------+-------------+----------+
| account_id | fiscal_year | earnings |
+------------+-------------+----------+
| 15         | 2019        | 60       |
| 15         | 2021        | 45       |
| 16         | 2021        | -20      |
| 17         | 2021        | 0        |
| 18         | 2020        | 90       |
| 19         | 2021        | 130      |
| 20         | 2021        | -5       |
+------------+-------------+----------+
Output:
+------------+
| account_id |
+------------+
| 15         |
| 19         |
+------------+
Explanation:
Account 15 earned 45 in 2021 and account 19 earned 130, so both are in
the black. Account 16 ended the year down 20 and account 20 down 5;
account 17 broke exactly even, and zero is not in the black. Account
18 earned 90, but in 2020 — the wrong year.
```

Write your solution as a single `SELECT` query returning `account_id`.
