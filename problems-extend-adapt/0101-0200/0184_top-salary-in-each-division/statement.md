# Top Salary In Each Division

## Description

Table: `Engineers`

| Column Name | Type    |
| ----------- | ------- |
| engineerId  | int     |
| name        | varchar |
| salary      | int     |
| divisionId  | int     |

`engineerId` is the primary key (column with unique values) for this
table. `divisionId` is a foreign key referencing the `divisionId` of
the `Divisions` table. Each row gives one engineer's id, name,
salary, and division.

Table: `Divisions`

| Column Name  | Type    |
| ------------ | ------- |
| divisionId   | int     |
| divisionName | varchar |

`divisionId` is the primary key (column with unique values) for this
table. The division name is never null. Each row names one division.

Find the engineers who hold the highest salary in their division —
every engineer tied at a division's top salary belongs in the answer.

Return the result table in any order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Engineers` rows and, when present, its `Divisions` rows
before your query runs. The result format is in the following example.

### Example 1

```text
Input: Engineers and Divisions tables from the dataset below.
Output:
Division  Engineer  Pay
Platform  Jonas     91000
Search    Kira      91000
Support   Mona      88000
Platform  Nils      91000
Explanation: Jonas and Nils are tied at 91000, the highest salary in
Platform, so both are reported; Kira tops Search and Mona tops
Support, while Iris and Lars sit below their divisions' maxima.
```

Write your solution as a single `SELECT` query returning three columns
— `Division`, `Engineer`, and `Pay` — one row for every engineer tied
at the highest salary of their division.

## Hints

### Hint 1

The per-division maxima come from one grouped pass:
`(SELECT divisionId, MAX(salary) FROM Engineers GROUP BY divisionId)`
yields each division's top salary alongside its id.

### Hint 2

Join `Engineers` back onto those maxima with an `ON` that requires
both `divisionId` and `salary` to match: the equality on salary keeps
every engineer tied at their division's maximum — a tie yields several
rows — and can never admit anyone below it.

### Hint 3

Join `Divisions` last to translate each surviving `divisionId` into
its name, alias the three output columns `Division`, `Engineer`, and
`Pay`, and leave the rows unordered: the judge compares them as an
unordered multiset, and a division with no engineers simply
contributes no rows.
