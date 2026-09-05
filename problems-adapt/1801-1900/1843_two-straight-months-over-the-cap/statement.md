# Two Straight Months Over The Cap

## Description

Table: `Wallets`

| Column Name | Type |
| ----------- | ---- |
| wallet_id   | int  |
| income_cap  | int  |

`wallet_id` is the column with unique values for this table. Each row
records the largest monthly income one wallet may take before it draws
attention.

Table: `Movements`

| Column Name | Type     |
| ----------- | -------- |
| movement_id | int      |
| wallet_id   | int      |
| kind        | ENUM     |
| amount      | int      |
| day         | datetime |

`movement_id` is the column with unique values for this table. Each row
is one movement on some wallet.

`kind` is ENUM (category) type of (`'Creditor'`, `'Debtor'`) where
`'Creditor'` marks money paid into the wallet and `'Debtor'` marks money
taken out of it. `amount` is how much money moved, and `day` is when the
movement happened.

A wallet's income in a month is the total of its `'Creditor'` movements
that fell in that month. A wallet is flagged if that income went over
the wallet's `income_cap` in two months straight — months that are
neighbors on the calendar, so December counts as followed by January of
the next year, and a month with no deposits at all still sits between
its neighbors.

Write a solution to report the IDs of all flagged wallets.

Return the result table in any order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Wallets` and `Movements` rows (whichever are present) before
your query runs. The result format is in the following example.

### Example 1

```text
Input:
Wallets table:
+-----------+------------+
| wallet_id | income_cap |
+-----------+------------+
| 1         | 500        |
| 2         | 900        |
| 3         | 400        |
+-----------+------------+
Movements table:
+-------------+-----------+----------+--------+---------------------+
| movement_id | wallet_id | kind     | amount | day                 |
+-------------+-----------+----------+--------+---------------------+
| 7           | 1         | Creditor | 600    | 2022-01-15 09:30:00 |
| 2           | 2         | Creditor | 1000   | 2022-02-10 14:05:00 |
| 5           | 1         | Creditor | 450    | 2022-02-03 10:00:00 |
| 9           | 1         | Creditor | 200    | 2022-02-20 18:45:00 |
| 4           | 2         | Debtor   | 300    | 2022-03-05 12:00:00 |
| 11          | 3         | Creditor | 500    | 2022-03-08 08:15:00 |
| 6           | 2         | Creditor | 950    | 2022-04-01 11:20:00 |
| 8           | 1         | Debtor   | 150    | 2022-02-25 19:30:00 |
| 10          | 3         | Creditor | 100    | 2022-01-30 13:40:00 |
+-------------+-----------+----------+--------+---------------------+
Output:
+-----------+
| wallet_id |
+-----------+
| 1         |
+-----------+
Explanation:
Wallet 1 took in 600 in January and 450 + 200 = 650 in February; both
months beat its cap of 500, and January and February are consecutive,
so wallet 1 is flagged.
Wallet 2 beat its cap of 900 in February (1000) and in April (950), but
March — when it only paid money out — sat in between, so the two
over-cap months are not consecutive and wallet 2 stays unflagged.
Wallet 3 beat its cap of 400 only in March (500); January's 100 was
under, so a single over month is not enough and it stays unflagged.
```

Write your solution as a single `SELECT` query returning the
`wallet_id` of every flagged wallet.
