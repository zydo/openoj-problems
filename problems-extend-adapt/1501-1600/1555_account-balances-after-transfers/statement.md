# Account Balances After Transfers

## Description

Table: `Accounts`

| Column          | Type    |
| --------------- | ------- |
| account_id      | int     |
| holder_name     | varchar |
| opening_balance | int     |

`account_id` is the column with unique values for this table. Each row
holds one account's starting balance, before any transfers are
applied.

Table: `Transfers`

| Column      | Type |
| ----------- | ---- |
| transfer_id | int  |
| payer_id    | int  |
| payee_id    | int  |
| amount      | int  |
| posted_on   | date |

`transfer_id` is the column with unique values for this table. Each
row records `amount` moving from the account with id `payer_id` to the
account with id `payee_id`, posted on `posted_on`.

The bank wants a summary of every account once all posted transfers
have settled: the account's current balance, plus a flag saying
whether the account ended up in the red.

Report, for every account in `Accounts`, the `account_id`,
`holder_name`, the account's current `balance` (the opening balance
plus everything the account received minus everything it paid), and
`overdrawn` — `"Yes"` if that balance is less than 0, `"No"`
otherwise.

Return the result table in any order.

Each testcase supplies its own `dataset`, which seeds both tables. The
result format is in the following examples.

### Example 1

```text
Input:
Accounts table:
account_id | holder_name | opening_balance
1          | Harpreet    | 250
2          | Solveig     | 500
3          | Dmitri      | 40
4          | Camila      | 900
Transfers table:
transfer_id | payer_id | payee_id | amount | posted_on
1           | 1        | 3        | 300    | 2021-06-01
2           | 2        | 3        | 120    | 2021-06-02
3           | 3        | 1        | 500    | 2021-06-03
Output:
account_id | holder_name | balance | overdrawn
1          | Harpreet    | 450     | No
2          | Solveig     | 380     | No
3          | Dmitri      | -40     | Yes
4          | Camila      | 900     | No
Explanation: Harpreet paid 300 on 2021-06-01 and received 500 on
2021-06-03, so balance = 250 - 300 + 500 = 450. Solveig paid 120 and
received nothing, so balance = 500 - 120 = 380. Dmitri received 300
and 120 and paid 500, so balance = 40 + 300 + 120 - 500 = -40, which
is below zero, so overdrawn is Yes. Camila took no part in any
transfer, so her balance stays 900.
```

### Example 2

```text
Input:
Accounts table:
account_id | holder_name | opening_balance
1          | Ruth        | 60
2          | Osgar       | 0
Transfers table:
transfer_id | payer_id | payee_id | amount | posted_on
1           | 1        | 2        | 60     | 2022-01-05
Output:
account_id | holder_name | balance | overdrawn
1          | Ruth        | 0       | No
2          | Osgar       | 60      | No
Explanation: Ruth empties her account with the transfer, ending at
exactly 0 — a balance of exactly 0 is not below zero, so overdrawn is
still No.
```

Write your solution as a single `SELECT` query returning `account_id`,
`holder_name`, `balance`, and `overdrawn`, one row for every account
in `Accounts`.
