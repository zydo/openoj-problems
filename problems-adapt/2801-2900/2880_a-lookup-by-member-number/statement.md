# A Lookup By Member Number

## Description

Table: `Members`

| Column Name | Type    |
| ----------- | ------- |
| member_no   | int     |
| member_name | varchar |
| member_age  | int     |

Each row holds one member of a club: the member's number, name, and age.

Each testcase supplies its own `dataset`: the script seeds the `Members`
table with that testcase's rows before your query runs.

Look one member up by number: report the name and age of the member
whose `member_no` is `101`. The result format is in the following
examples.

### Example 1

```text
Input:
Members table:
+-----------+-------------+------------+
| member_no | member_name | member_age |
+-----------+-------------+------------+
| 7         | Ines        | 9          |
| 101       | Bram        | 14         |
| 58        | Kofi        | 11         |
| 240       | Wren        | 17         |
+-----------+-------------+------------+
Output:
+-------------+------------+
| member_name | member_age |
+-------------+------------+
| Bram        | 14         |
+-------------+------------+
Explanation:
Bram is the member whose number is 101, so the lookup reports Bram's
name and age.
```

### Example 2

```text
Input:
Members table:
+-----------+-------------+------------+
| member_no | member_name | member_age |
+-----------+-------------+------------+
| 3         | Alba        | 12         |
| 77        | Silas       | 8          |
| 512       | Tove        | 15         |
+-----------+-------------+------------+
Output:
+-------------+------------+
| member_name | member_age |
+-------------+------------+
+-------------+------------+
Explanation:
No member carries the number 101, so the lookup returns the empty
table.
```

Write your solution as a single `SELECT` query returning exactly two
columns, `member_name` then `member_age`, holding the row of the member
whose `member_no` is `101`, or the empty table when no member matches.
Each dataset's `member_no` values are distinct, so at most one row can
match, and the result needs no ordering.

## Hints

### Hint 1

Both halves of the lookup happen in one query: a `WHERE` clause that
keeps only the row whose `member_no` equals `101`, and a SELECT list
that names just `member_name` and `member_age` — the first restricts
which rows survive, the second restricts which columns come back.
