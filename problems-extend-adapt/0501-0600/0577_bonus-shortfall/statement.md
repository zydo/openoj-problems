# Bonus Shortfall

## Description

Table: `Staff`

| Column Name | Type    |
| ----------- | ------- |
| staffId     | int     |
| name        | varchar |
| manager     | int     |
| salary      | int     |

`staffId` is the column with unique values for this table.
Each row of this table indicates the name and the ID of a staff member in
addition to their salary and the id of their manager.

Table: `Payout`

| Column Name | Type |
| ----------- | ---- |
| staffId     | int  |
| bonus       | int  |

`staffId` is the column of unique values for this table.
`staffId` is a foreign key (reference column) to staffId from the Staff
table.
Each row of this table contains the id of a staff member and their
respective bonus.

Write a solution to report the name and bonus amount of each staff member
who satisfies either of the following:

- The staff member has a bonus less than 1000.
- The staff member did not get any bonus.

Return the result table in any order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Staff` rows and, when present, its `Payout` rows before your
query runs. The result format is in the following example.

### Example 1

```text
Input: Staff and Payout tables from the dataset below.
Output:
name    bonus
Nia     null
Quang   null
Otis    800
Explanation: Nia and Quang have no row in Payout, so they got no bonus
and are reported with null; Otis's bonus is 800, which is less than
1000; Priya's bonus is 1500, so she satisfies neither condition.
```

Write your solution as a single `SELECT` query returning two columns —
`name` and `bonus`, the staff member's bonus amount or null when they
got none — one row per qualifying staff member.

## Hints

### Hint 1

A staff member with no matching Payout row must still be reported, and an
inner join drops exactly those rows: keep every staff member with Staff
LEFT JOIN Payout, which pads the missing side's columns with null.

### Hint 2

Match on staffId alone — it is unique in Payout, so each staff member
carries at most one bonus row and the join duplicates nobody. manager and
salary never enter the answer.

### Hint 3

The filter needs both branches: bonus < 1000 — strictly, so a bonus of
exactly 1000 does not qualify — OR bonus IS NULL, because the comparison
null < 1000 is not true in SQL; the IS NULL branch is what keeps the
bonus-less staff members the left join preserved.
