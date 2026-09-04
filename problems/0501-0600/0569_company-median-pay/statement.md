# Company Median Pay

## Description

Table: `Staff`

| Column | Type    |
| ------ | ------- |
| id     | int     |
| firm   | varchar |
| pay    | int     |

`id` is the primary key (the column with unique values) for this table.
Each row indicates the firm and the salary of one employee.

Write a solution to find the rows that hold the median pay of each firm.
Sort each firm's rows by `pay`, breaking ties by `id`, and keep the middle
of that sorted order: a firm with an odd number of employees `n`
contributes its single middle row — the one at position `(n + 1) / 2` —
and a firm with an even number of employees contributes both middle rows,
at positions `(n + 1) / 2` and `(n + 2) / 2` (positions count from 1).

Return the result table in any order.

Each test case supplies its own `dataset`: the DDL seeds the `Staff` table
with that test case's rows. The result format is shown in the following
example.

### Example 1

```text
Input: the Staff table from the dataset below.
Output:
id  firm   pay
3   Alpha  20
6   Beta   50
7   Beta   60
Explanation: firm Alpha has three employees; sorted by pay its rows read
10 (id 1), 20 (id 3), 30 (id 2), so the single middle row — 20 (id 3) —
is kept. Firm Beta has four employees; sorted by pay its rows read 40
(id 5), 50 (id 6), 60 (id 7), 70 (id 4), so both middle rows — 50 (id 6)
and 60 (id 7) — are kept.
```

Answer with a single `SELECT` query returning three columns — `id`, `firm`,
and `pay` — the median row(s) of each firm.

## Hints

### Hint 1

The median here is a position in a sorted list, not an averaged value: per
firm, order the rows by `pay` with `id` breaking ties, then keep the
middle position — or, when the firm has an even headcount, both middle
positions.

### Hint 2

`ROW_NUMBER() OVER (PARTITION BY firm ORDER BY pay, id)` numbers each
firm's rows 1..n in exactly that order, and `COUNT(*) OVER (PARTITION BY
firm)` stamps each row with its firm's `n` — two window functions in one
pass, no self-join.

### Hint 3

The two parities unify under integer division: `(n+1)/2` and `(n+2)/2` are
the same position when `n` is odd (for `n=5`, both `3`) and the two middle
positions when `n` is even (for `n=6`, `3` and `4`), so `rn IN ((cnt + 1)
/ 2, (cnt + 2) / 2)` keeps exactly the median rows — including the lone
row of a one-employee firm.
