# Running Account Balances

## Description

Table: `Movements`

| Column Name | Type |
| ----------- | ---- |
| account_id  | int  |
| moved_on    | date |
| direction   | ENUM |
| amount      | int  |

`(account_id, moved_on)` is the primary key column combination for this
table. Each row captures one movement on an account: the day it happened,
its direction, and the amount of money involved. `direction` is an ENUM
(category) of `'Deposit'` and `'Withdraw'`.

Each testcase supplies its own `dataset`, whose statements insert all rows
into `Movements` before your query runs. Report the balance of every
account after each of its movements. Every account starts from a balance
of `0` before its first movement, and no balance ever drops below `0`.

Return `account_id`, `moved_on`, and `balance`, sorted by `account_id`
ascending, breaking ties by `moved_on` ascending. The query result format
is shown in the following example.

### Example 1

```text
Input:
Movements table:
account_id  moved_on    direction  amount
7           2024-02-01  Deposit    1500
7           2024-02-04  Withdraw   600
7           2024-02-09  Deposit    250
3           2024-01-15  Deposit    9000
3           2024-01-20  Withdraw   2500
Output:
account_id  moved_on    balance
3           2024-01-15  9000
3           2024-01-20  6500
7           2024-02-01  1500
7           2024-02-04  900
7           2024-02-09  1150
Explanation:
Account 3:
- The balance starts at 0.
- 2024-01-15 --> deposit 9000. The balance is 0 + 9000 = 9000.
- 2024-01-20 --> withdraw 2500. The balance is 9000 - 2500 = 6500.
Account 7:
- The balance starts at 0.
- 2024-02-01 --> deposit 1500. The balance is 0 + 1500 = 1500.
- 2024-02-04 --> withdraw 600. The balance is 1500 - 600 = 900.
- 2024-02-09 --> deposit 250. The balance is 900 + 250 = 1150.
```

### Example 2

```text
Input:
Movements table:
account_id  moved_on    direction  amount
12          2023-06-03  Deposit    45
12          2023-06-01  Deposit    10
12          2023-06-02  Withdraw   10
12          2023-06-04  Withdraw   45
5           2023-07-01  Deposit    3000000000
5           2023-07-02  Withdraw   1
Output:
account_id  moved_on    balance
5           2023-07-01  3000000000
5           2023-07-02  2999999999
12          2023-06-01  10
12          2023-06-02  0
12          2023-06-03  45
12          2023-06-04  0
Explanation: The rows of account 12 are stored out of chronological
order, yet its balances must still follow the movement days: 10, then 0
after the withdrawal, then 45, and finally 0 again. Account 5 shows that
balances can grow far past ordinary sizes — three billion deposited, then
a single unit withdrawn.
```
