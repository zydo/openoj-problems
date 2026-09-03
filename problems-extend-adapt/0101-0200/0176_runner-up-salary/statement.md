# Runner-Up Salary

## Description

Table: `Wages`

| Column Name | Type |
| ----------- | ---- |
| workerId    | int  |
| amount      | int  |

`workerId` is the primary key (column with unique values) for this
table. Each row records one worker's pay amount.

Find the runner-up pay: the second highest distinct amount in the
`Wages` table. If no such amount exists, report `null`.

Each testcase supplies its own `dataset`: the DDL seeds the `Wages`
table with that testcase's rows. The result format is in the following
examples.

### Example 1

```text
Input: Wages table from the dataset below.
Output:
RunnerUpSalary
850
Explanation: the distinct amounts from highest to lowest are 920, 850,
610, so the runner-up is 850 — the duplicate top value changes nothing.
```

### Example 2

```text
Input: Wages table from the dataset below.
Output:
RunnerUpSalary
null
Explanation: every worker is paid the same (475), so a single distinct
amount exists and the runner-up does not.
```

Write your solution as a single `SELECT` query returning one row with
one column: the second highest distinct amount, or `null`.

## Hints

### Hint 1

The runner-up is the largest amount strictly below the overall maximum
— `(SELECT MAX(amount) FROM Wages)` names the top, and only rows with
`amount <` that value are in the running.

### Hint 2

An aggregate over zero rows produces null, which is exactly the "no
runner-up" shape: all amounts equal, a lone row, or an empty table.
MAX therefore always returns one row with the right answer or the
right null.

### Hint 3

Duplicates need no special treatment: the strict `<` removes every
copy of the top amount in one stroke, and MAX folds repeats below it
for free.
