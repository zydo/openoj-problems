# A File Turned Sideways

## Description

A table arrives on standard input: every row holds the same number of
fields, and one space separates neighbouring fields. Turn the table
sideways — the output's first line gathers the first field of every
input row in order, the second line gathers the second field, and so on
for as many columns as the rows are wide.

### Example 1

```text
Input:
name age
alice 21
ryan 30
Output:
name alice ryan
age 21 30
Explanation: the first field of every row — `name`, `alice`, `ryan` —
becomes the first output line, and the second field of every row
becomes the second.
```

### Constraints

- The table holds between 1 and 100 rows of 1 to 20 fields.
- Every field is 1 to 20 printable ASCII characters with no spaces.
- Rows are newline-terminated and fields are separated by exactly one
  space.
