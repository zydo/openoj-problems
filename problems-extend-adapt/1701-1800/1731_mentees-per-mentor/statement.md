# Mentees per Mentor

## Description

A mentoring program pairs its members up: each member may be mentored by
exactly one other member. `Mentors` holds the roster.

Table: `Mentors`

| Column Name | Type    |
| ----------- | ------- |
| member_id   | int     |
| name        | varchar |
| mentored_by | int     |
| age         | int     |

`member_id` is the primary key (column with unique values) for this
table. Each row records one member, the id of the member mentoring them,
and their age. Some members have no mentor (`mentored_by` is null).

For this problem, a mentor is a member whom at least 1 other member
names as their mentor.

Write a solution to report the ids and the names of all mentors, the
number of members they mentor, and the average age of those members
rounded to the nearest integer.

Return the result table ordered by `member_id`.

Each testcase's `dataset` seeds the `Mentors` table: its script inserts
the testcase's `Mentors` rows (whichever are present) before your query
runs. The result format is in the following examples.

### Example 1

```text
Input:
Mentors table:
+-----------+-------+-------------+-----+
| member_id | name  | mentored_by | age |
+-----------+-------+-------------+-----+
| 8         | Nadia | null        | 52  |
| 3         | Owen  | 8           | 29  |
| 6         | Priya | 8           | 40  |
| 11        | Quinn | null        | 35  |
+-----------+-------+-------------+-----+
Output:
+-----------+-------+---------------+-------------+
| member_id | name  | mentees_count | average_age |
+-----------+-------+---------------+-------------+
| 8         | Nadia | 2             | 35          |
+-----------+-------+---------------+-------------+
Explanation: Nadia mentors 2 members, Owen and Priya. Their average age
is (29+40)/2 = 34.5, which is 35 after rounding it to the nearest
integer.
```

### Example 2

```text
Input:
Mentors table:
+-----------+-------+-------------+-----+
| member_id | name  | mentored_by | age |
+-----------+-------+-------------+-----+
| 1         | Ravi  | null        | 47  |
| 2         | Sana  | 1           | 33  |
| 3         | Tariq | 1           | 26  |
| 4         | Uma   | 2           | 31  |
| 5         | Vik   | 2           | 24  |
| 6         | Wen   | 3           | 29  |
| 7         | Xui   | null        | 39  |
+-----------+-------+-------------+-----+
Output:
+-----------+-------+---------------+-------------+
| member_id | name  | mentees_count | average_age |
+-----------+-------+---------------+-------------+
| 1         | Ravi  | 2             | 30          |
| 2         | Sana  | 2             | 28          |
| 3         | Tariq | 1             | 29          |
+-----------+-------+---------------+-------------+
Explanation: Ravi mentors Sana and Tariq, averaging (33+26)/2 = 29.5,
which rounds to 30. Sana mentors Uma and Vik, averaging
(31+24)/2 = 27.5, which rounds to 28. Tariq mentors only Wen, so the
average stays 29.
```

Write your solution as a single `SELECT` query returning `member_id`,
`name`, `mentees_count`, and `average_age` for every member with at
least one mentee, ordered by `member_id` ascending.
