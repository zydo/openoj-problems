# Who Does What

## Description

Table: `Member`

| Column Name | Type    |
| ----------- | ------- |
| member_id   | int     |
| name        | varchar |
| profession  | ENUM    |

`member_id` is the primary key (column with a unique value) for this
table.
Each row records a member's id, name, and profession.
`profession` is one of `'Doctor'`, `'Singer'`, `'Actor'`, `'Player'`,
`'Engineer'`, or `'Lawyer'`.

Write a query that lists every member's name followed by the first
letter of their profession in parentheses — no whitespace between the
name and the parenthetical.

Return the result ordered by `member_id` in descending order.

Each testcase supplies its own `dataset`: the DDL seeds the `Member`
table with that testcase's rows. The result format is shown in the
following example.

### Example 1

```text
Input:
Member table:
+-----------+------+------------+
| member_id | name | profession |
+-----------+------+------------+
| 1         | Rae  | Doctor     |
| 3         | Ken  | Actor      |
| 2         | Liv  | Singer     |
| 5         | Max  | Professor  |
| 4         | Ana  | Lawyer     |
+-----------+------+------------+
Output:
+-----------+----------+
| member_id | name     |
+-----------+----------+
| 5         | Max(P)   |
| 4         | Ana(L)   |
| 3         | Ken(A)   |
| 2         | Liv(S)   |
| 1         | Rae(D)   |
+-----------+----------+
Explanation:
Note that there should not be any white space between the name and the
first letter of the profession.
```

### Example 2

```text
Input:
Member table:
+-----------+------+------------+
| member_id | name | profession |
+-----------+------+------------+
| 2         | Jo   | Engineer   |
| 1         | Kim  | Doctor     |
| 4         | Pia  | Actor      |
+-----------+------+------------+
Output:
+-----------+----------+
| member_id | name     |
+-----------+----------+
| 4         | Pia(A)   |
| 2         | Jo(E)    |
| 1         | Kim(D)   |
+-----------+----------+
Explanation:
Rows come back in descending `member_id` order regardless of the order
the rows were inserted in.
```

### Constraints

- `member_id` values are unique primary keys, so ordering by them is
  total — no two output rows can ever tie.
- Write your solution as a single `SELECT` query returning two columns
  — `member_id` and `name`, in that order — where `name` is each
  member's name immediately followed by their profession's first
  letter in parentheses, with the rows ordered by descending
  `member_id`.

## Hints

### Hint 1

The first letter of a string comes from taking its leftmost character.

### Hint 2

Concatenation operators (or functions) glue the three pieces together:
the name, the parenthesized initial, and nothing else — then a single
`ORDER BY` settles the row order.
