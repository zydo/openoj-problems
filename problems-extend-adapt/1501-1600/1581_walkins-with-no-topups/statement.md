# Walk-Ins With No Top-Ups

## Description

Table: `Walkins`

| Column     | Type |
| ---------- | ---- |
| walkin_id  | int  |
| account_id | int  |

`walkin_id` is the column with unique values for this table. This
table records visits to a phone shop: one row per walk-in, tied to the
account holder who came in.

Table: `Topups`

| Column    | Type |
| --------- | ---- |
| topup_id  | int  |
| walkin_id | int  |
| amount    | int  |

`topup_id` is the column with unique values for this table. Each row
is one prepaid top-up bought during the walk-in `walkin_id`; a
walk-in with no row here bought nothing.

A shop manager wants to know which account holders keep walking in and
leaving without buying. Report every account that made at least one
top-up-free walk-in, together with how many such walk-ins it made.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds `Walkins` and
`Topups` with that testcase's rows before your query runs. The result
format is in the following example.

### Example 1

```text
Input: the Walkins and Topups tables from the dataset below.
Walkins rows:
walkin_id | account_id
1         | 12
2         | 7
4         | 19
5         | 44
6         | 3
7         | 44
8         | 44
Topups rows:
topup_id | walkin_id | amount
2        | 5         | 120
3        | 5         | 60
9        | 5         | 75
12       | 1         | 400
13       | 2         | 610
Output:
account_id | count_no_topup
3          | 1
19         | 1
44         | 2
Explanation: Account 12 bought a top-up (id 12) during its only
walk-in, and account 7 bought one (id 13) during its only walk-in, so
neither qualifies. Account 19's single walk-in (id 4) carries no
top-up. Account 3's single walk-in (id 6) carries none either. Account
44 walked in three times: walk-in 5 carries three top-ups, so it does
not count, while walk-ins 7 and 8 carry none, so they do — two
top-up-free walk-ins.
```

### Example 2

```text
Input: the Walkins and Topups tables from the dataset below.
Walkins rows:
walkin_id | account_id
1         | 10
2         | 20
Topups rows:
topup_id | walkin_id | amount
1        | 1         | 55
2        | 2         | 65
Output:
account_id | count_no_topup
Explanation: both walk-ins each carry a top-up, so no account has a
top-up-free walk-in and the result is empty.
```

Write your solution as a single `SELECT` query returning `account_id`
and `count_no_topup`, one row for every account with at least one
walk-in that has no matching row in `Topups`. `count_no_topup` counts
that account's top-up-free walk-ins; a walk-in that carries one or
more top-ups is excluded entirely, however many it carries, and an
account whose every walk-in has a top-up does not appear in the result
at all.
