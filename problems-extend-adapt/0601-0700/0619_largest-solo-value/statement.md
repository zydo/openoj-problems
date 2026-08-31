# Largest Solo Value

## Description

Table: `Readings`

| Column Name | Type |
| ----------- | ---- |
| value       | int  |

This table may contain duplicates (in other words, there is no primary
key for this table in SQL). Each row of this table contains one integer
reading.

A solo value is a value that appeared only once in the `Readings` table.

Write a solution to find the largest solo value. If there is no solo
value, report null.

Each testcase supplies its own `dataset`: the DDL seeds the `Readings`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Readings table from the dataset below.
Readings rows:
value
3
3
7
9
9
12
Output:
value
12
Explanation: the solo values are 7 and 12. Since 12 is the largest solo
value, we return it.
```

### Example 2

```text
Input: Readings table from the dataset below.
Readings rows:
value
4
4
8
8
Output:
value
null
Explanation: every value repeats, so there are no solo values in the
input table, and we return null.
```

Write your solution as a single `SELECT` query returning one column —
`value` — with exactly one row: the largest solo value, or null when no
value appears exactly once.

## Hints

### Hint 1

A value is solo exactly when its group has size one. `GROUP BY value`
collapses each cluster of equal rows into one group whose `COUNT(*)` is
its frequency, and `HAVING COUNT(*) = 1` keeps only the values that
occurred once — that filtered set is the candidates the answer is drawn
from.

### Hint 2

An aggregate collapses the candidates into the required one-row shape:
`SELECT MAX(value)` over the solo values returns the largest one, and
when no value is solo it still returns exactly one row, holding null.
The no-solo case is not an error state to handle — it falls out of
`MAX` for free.

### Hint 3

The tempting spelling `ORDER BY value DESC LIMIT 1` over the solo values
fails the second example: with no solo values it returns zero rows, but
the statement asks for one row holding null. A `COALESCE` wrapper cannot
repair it, because the defect is the missing row, not a null value —
reach for the aggregate instead of the sort.
