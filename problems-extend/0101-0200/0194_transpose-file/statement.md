# Transpose File

## Description

Table: `File`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| line        | varchar |

`id` is the primary key (column with unique values) for this table. Each row
of this table holds one line of the input file: `line` is the line's content,
and `id` numbers the lines in file order starting from `1`.

Write a query to output the transposed content.

You may assume that each row has the same number of columns, and each field is
separated by the `' '` character.

Each testcase's `dataset` seeds the `File` table with the lines of its
input file. The result format is in the following example.

### Example 1

```text
Input: File table from the dataset below.
line
name age
alice 21
ryan 30
Output:
line
name alice ryan
age 21 30
Explanation: the first output row lists the first field of every input row in
file order, and the second output row lists the second field of every input
row.
```

Write your solution as a single `SELECT` query returning one row with one
column, `line`, for each column of the input file: output row `j` joins the
`j`-th field of every input row with single spaces, in `id` order. Rows may be
returned in any order.

## Hints

### Hint 1

A recursive CTE can split a `line` into its fields: each step peels off the text before the first space with `substr(line, 1, instr(line || ' ', ' ') - 1)` and recurses on the remainder, carrying `(id, field position, field, rest)` until the line is exhausted.

### Hint 2

Once every field is one row tagged with its line's `id` and its column `pos`, transposing is `GROUP BY pos` — one group per output line.

### Hint 3

`group_concat(val, ' ' ORDER BY id)` joins a column's fields in file order; the `ORDER BY` inside the aggregate is what keeps `name alice ryan` from coming out in any other order.
