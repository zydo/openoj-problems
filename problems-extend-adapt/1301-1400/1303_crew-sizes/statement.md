# Crew Sizes

## Description

A whitewater rafting outfit keeps its season roster in one table.
`Crew` holds one row per paddler: the paddler's id and the id of the
crew they are assigned to.

Table: `Crew`

| Column Name | Type |
| ----------- | ---- |
| member_id   | int  |
| crew_id     | int  |

`member_id` is the primary key (column with unique values) for this
table.
Each row records that a paddler belongs to the crew with that id, and
several rows may share the same `crew_id`.

Report every paddler together with the size of their crew — the number
of rows in `Crew` that share the paddler's `crew_id`.

The result rows may come back in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Crew table:
+-----------+---------+
| member_id | crew_id |
+-----------+---------+
| 1         | 3       |
| 2         | 3       |
| 3         | 3       |
| 4         | 7       |
| 5         | 7       |
| 6         | 12      |
| 7         | 12      |
+-----------+---------+
Output:
+-----------+-----------+
| member_id | crew_size |
+-----------+-----------+
| 1         | 3         |
| 2         | 3         |
| 3         | 3         |
| 4         | 2         |
| 5         | 2         |
| 6         | 2         |
| 7         | 2         |
+-----------+-----------+
Explanation:
Crew 3 has members 1, 2, and 3, so each of those rows carries 3.
Crew 7 has members 4 and 5, and crew 12 has members 6 and 7, so each
of those rows carries 2.
```

### Example 2

```text
Input:
Crew table:
+-----------+---------+
| member_id | crew_id |
+-----------+---------+
| 11        | 4       |
| 12        | 4       |
| 13        | 4       |
| 14        | 9       |
+-----------+---------+
Output:
+-----------+-----------+
| member_id | crew_size |
+-----------+-----------+
| 11        | 3         |
| 12        | 3         |
| 13        | 3         |
| 14        | 1         |
+-----------+-----------+
Explanation:
Crew 4 has three members, while paddler 14 is the only member of
crew 9.
```

Write your solution as a single `SELECT` query returning `member_id`
and `crew_size`.
