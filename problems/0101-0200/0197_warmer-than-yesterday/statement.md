# Warmer Than Yesterday

## Description

Table: `Readings`

| Column Name | Type |
| ----------- | ---- |
| readingId   | int  |
| takenOn     | date |
| degrees     | int  |

`readingId` is the column with unique values for this table. Each row
is one daily reading: `takenOn` is the day it was taken, in ISO
`YYYY-MM-DD` form, and `degrees` is that day's temperature. No two rows
share a `takenOn` value.

List every reading that is strictly warmer than the reading taken the
calendar day before it — the previous day itself, not merely the row
that happens to come before. Return the result in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Readings`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Readings table from the dataset below.
Output:
readingId
2
4
Explanation: reading 2 (8 degrees) tops 2023-11-28's 5, and reading 4
(7 degrees) tops 2023-11-30's 3 across the month edge. Reading 3 cooled
off, reading 5 only ties reading 4 at 7, and reading 1 has no yesterday
at all, so none of them qualify.
```

Write your solution as a single `SELECT` query returning one column —
the `readingId` of every day whose temperature is strictly higher than
the previous day's.

## Hints

### Hint 1

Yesterday is a calendar computation, not an id offset: in SQLite the
day after d is `DATE(d, '+1 day')` — equivalently, w1's yesterday
exists when `w1.takenOn = DATE(w2.takenOn, '+1 day')`.

### Hint 2

The predicate relates two rows of the same table, so join `Readings`
with itself: alias one side w1 (today) and the other w2 (yesterday),
and match them on that one-day offset. `takenOn` values are unique, so
each row pairs with at most one yesterday.

### Hint 3

Keep the pair only when `w1.degrees > w2.degrees` — the comparison is
strict, so equal readings and cool-offs are excluded. A day whose
yesterday is missing (the table's first day, or a gap in the dates)
joins with nothing and correctly never appears.
