# Alternate Rows by Gender

## Description

Table: `Members`

| Column Name | Type    |
| ----------- | ------- |
| member_id   | int     |
| gender      | varchar |

`member_id` is the primary key, so every row carries a distinct id.
`gender` holds one of three category values: `'female'`, `'male'`, or
`'other'`. Every row records one member's id together with that member's
gender, and the table is guaranteed to hold the same number of rows for
each of the three values.

Reorder the `Members` table so the rows cycle through `'female'`,
`'other'`, and `'male'` in that exact repeating order. Within each of
the three gender groups the rows must come out with their ids in
ascending order, so each round of the cycle reads the next unused id of
every group in turn.

Each testcase supplies its own `dataset`: the DDL seeds the `Members`
table with that testcase's rows. Return the result table with the rows
in the order described, showing columns `member_id` and `gender`.

### Example 1

```text
Input:
Members table:
+-----------+--------+
| member_id | gender |
+-----------+--------+
| 12        | male   |
| 5         | female |
| 17        | other  |
| 3         | male   |
| 9         | other  |
| 14        | female |
| 21        | other  |
| 8         | male   |
| 2         | female |
+-----------+--------+
Output:
+-----------+--------+
| member_id | gender |
+-----------+--------+
| 2         | female |
| 9         | other  |
| 3         | male   |
| 5         | female |
| 17        | other  |
| 8         | male   |
| 14        | female |
| 21        | other  |
| 12        | male   |
+-----------+--------+
Explanation:
The 'female' ids, read in ascending order, are 2, 5, and 14.
The 'other' ids are 9, 17, and 21, and the 'male' ids are 3, 8, and 12.
Round-robin through the three groups in the fixed order 'female',
'other', 'male': take the smallest remaining id of each group in turn.
The groups are equally sized, so all three run out on the same round.
```

### Example 2

```text
Input:
Members table:
+-----------+--------+
| member_id | gender |
+-----------+--------+
| 30        | other  |
| 4         | female |
| 11        | male   |
| 27        | female |
| 19        | male   |
| 33        | other  |
+-----------+--------+
Output:
+-----------+--------+
| member_id | gender |
+-----------+--------+
| 4         | female |
| 30        | other  |
| 11        | male   |
| 27        | female |
| 33        | other  |
| 19        | male   |
+-----------+--------+
Explanation:
Two rounds exhaust the table: the 'female' ids 4 and 27, the 'other'
ids 30 and 33, and the 'male' ids 11 and 19 each supply one row per
round, always the smallest id still unused in that group.
```

Because every group contributes exactly one row per round until the
table is drained, the output is a perfect weave of three ascending id
lists. Ids are unique, so the ordering is total and no two rows can
tie. Write a single `SELECT` query that returns the two columns
`member_id` and `gender`, in that order, with rows arranged exactly as
described above.
