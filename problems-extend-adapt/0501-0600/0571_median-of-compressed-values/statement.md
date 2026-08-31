# Median of Compressed Values

## Description

Table: `ValueTally`

| Column Name | Type |
| ----------- | ---- |
| value       | int  |
| count       | int  |

`value` is the primary key (column with unique values) for this table.
Each row records how many times `value` occurs in an underlying dataset,
without storing that dataset directly.

The median is the value separating the higher half of a data sample from
the lower half.

Write a solution to report the median of the full dataset once
`ValueTally` is decompressed — each `value` expanded into `count`
repeated copies of itself. Round the median to one decimal place.

Each testcase supplies its own `dataset`: the DDL seeds the `ValueTally`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: ValueTally table from the dataset below.
Output:
median
15.0
Explanation: decompressing the table gives
[10, 10, 10, 20, 30, 30], six values in sorted order, so the median
averages the third and fourth: (10 + 20) / 2 = 15.0.
```

### Example 2

```text
Input: ValueTally table from the dataset below.
Output:
median
5.0
Explanation: decompressing the table gives [5, 5, 5, 5, 15], five values
in sorted order, so the median is the third one on its own: 5.0.
```

Write your solution as a single `SELECT` query returning one column —
`median`, the decompressed median rounded to one decimal place — as a
single row.

## Hints

### Hint 1

Decompressing means each `value` repeated `count` times, in `value`
order — so a rank in the sorted list is all you need, never the list
itself: `SUM(count) OVER (ORDER BY value)` gives each `value` the
cumulative count of decompressed entries at or below it, and
`SUM(count) OVER ()` gives the grand total `N`.

### Hint 2

Two ranks cover both parities with integer division alone: the lower
middle is rank `(N+1)/2` and the upper is rank `(N+2)/2` — when `N` is
odd both divisions land on the same middle rank, so the same `value`
fills both slots. The `value` occupying rank `k` is the smallest `value`
whose cumulative count reaches `k`: `MIN(value)` over the rows whose
running count is `>= k`.

### Hint 3

Average the two picked values with `/ 2.0` — SQLite's integer `1/2`
truncates to `0` — and `ROUND(x, 1)` reports one decimal, a real value on
the wire. The window never expands the table, so one row with a huge
count costs the same as count `1`.
