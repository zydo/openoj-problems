# A File Turned Sideways

## Description

Table: `Document`

| Column Name | Type    |
| ----------- | ------- |
| lineNo      | int     |
| content     | varchar |

`lineNo` is the primary key (column with unique values) for this table.
Each row holds one line of the document: `content` is the line's text,
and `lineNo` numbers the lines in document order starting from `1`.

Every line carries the same number of fields, and a single space
separates each field from the next. Read the document sideways: return
one row per column of the document, where output row `j` joins the
`j`-th field of every input line with single spaces, taken in `lineNo`
order.

Each testcase's `dataset` seeds the `Document` table with that
testcase's rows. The result format is in the following example.

### Example 1

```text
Input: Document table from the dataset below.
Output:
content
team hawks owls finches
score 21 30 27
Explanation: the first output row collects the first field of every
line in document order, and the second output row collects the second
field of every line.
```

Write your solution as a single `SELECT` query returning one row with
one column, `content`, per column of the document. Rows may come back
in any order.

## Hints

### Hint 1

A recursive CTE can split a `content` value into its fields: each step
peels off the text before the first space with
`substr(content, 1, instr(content || ' ', ' ') - 1)` and recurses on
the remainder, carrying `(lineNo, field position, field, rest)` until
the line runs out.

### Hint 2

Once every field is one row tagged with its line's `lineNo` and its
column `pos`, turning the document sideways is `GROUP BY pos` — one
group per output row.

### Hint 3

`group_concat(val, ' ' ORDER BY lineNo)` joins a column's fields in
document order; the `ORDER BY` inside the aggregate is what keeps
`team hawks owls finches` from coming out shuffled.
