# Election Winner

## Description

Table: `Nominee`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |

`id` is the column with unique values for this table.
Each row of this table contains information about the id and the name of
a nominee running in an election.

Table: `Ballot`

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| nomineeId   | int  |

`id` is an auto-increment primary key (column with unique values) for
this table.
`nomineeId` is a foreign key (reference column) to `id` from the
`Nominee` table.
Each row of this table records the nominee who received the ith ballot
cast in the election.

Write a solution to report the name of the winning nominee (i.e. the
nominee who received the largest number of ballots).

The test cases are generated so that exactly one nominee wins the
election.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Nominee` rows and then its `Ballot` rows before your query
runs. The result format is in the following example.

### Example 1

```text
Input: Nominee and Ballot tables from the dataset below.
Output:
name
South
Explanation: nominee South received 3 ballots (1 through 5, minus North's
and East's); North received 1, East received 1; South leads with 3.
```

Write your solution as a single `SELECT` query returning one column —
`name` — and exactly one row, the winning nominee.

## Hints

### Hint 1

Each ballot names its nominee by id, so join the tables before counting:
`Nominee JOIN Ballot ON Nominee.id = Ballot.nomineeId` carries each
nominee's name on every one of their ballots. An inner join is right — a
nominee with no ballots forms no group at all and can never win.

### Hint 2

One group per nominee, ranked by size: `GROUP BY Nominee.id, name`
collapses each nominee's ballots into a single group (`id` alone
identifies the nominee; `name` rides along so the selection stays valid
under strict grouping), and `ORDER BY COUNT(*) DESC LIMIT 1` keeps the
largest group — its `name` is the answer.

### Hint 3

The guarantee does the tie-breaking: exactly one nominee wins, so the top
group is unique and `LIMIT 1` returns that row alone — no tie-break key
is needed. `COUNT` is order-independent, so `Ballot.id` order and
insertion order never matter.
