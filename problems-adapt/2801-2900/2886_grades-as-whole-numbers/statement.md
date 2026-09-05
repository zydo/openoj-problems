# Grades As Whole Numbers

## Description

Table: `ScoreSheet`

| Column Name | Type    |
| ----------- | ------- |
| row_no      | int     |
| pupil_no    | int     |
| pupil_name  | varchar |
| pupil_age   | int     |
| score       | float   |

`row_no` is the primary key for this table.
Each row of this table holds one pupil's exam record: their pupil
number, name, and age, together with the record's 1-based row number.

The `score` column was recorded with decimal places, but the report
that consumes the sheet only accepts whole numbers.

Write a query that corrects this: report each pupil's number, name,
and age unchanged, and deliver every score as a whole number — any
fractional part is dropped.

Each testcase supplies its own `dataset`: the script seeds the
`ScoreSheet` table with that testcase's rows before your query runs,
storing each score as a SQL `REAL`.

The result format is in the following example.

### Example 1

```text
Input:
ScoreSheet table:
+--------+-----------+------------+-----------+-------+
| row_no | pupil_no  | pupil_name | pupil_age | score |
+--------+-----------+------------+-----------+-------+
| 1      | 71        | Farid      | 16        | 88.5  |
| 2      | 23        | Bea        | 15        | 91.0  |
| 3      | 58        | Tomas      | 17        | 79.9  |
+--------+-----------+------------+-----------+-------+
Output:
+-----------+------------+-----------+-------+
| pupil_no  | pupil_name | pupil_age | score |
+-----------+------------+-----------+-------+
| 71        | Farid      | 16        | 88    |
| 23        | Bea        | 15        | 91    |
| 58        | Tomas      | 17        | 79    |
+-----------+------------+-----------+-------+
Explanation:
Each score is delivered as an integer: 88.5 becomes 88, 91.0 stays
91, and 79.9 becomes 79 — the fractional part is dropped, not
rounded.
```

Write your solution as a single `SELECT` query returning exactly four
columns, `pupil_no` then `pupil_name` then `pupil_age` then `score`,
one row per record, ordered by ascending `row_no` — the sheet's own
row order. The `score` output column carries the converted values.

## Hints

### Hint 1

The stored rows never change — the conversion happens in the output.
A SELECT-list entry `CAST(score AS INTEGER) AS score` re-types each
row's score as an integer and keeps the column's own name for the
result; SQLite's cast truncates toward zero, so a fractional part is
dropped rather than rounded.
