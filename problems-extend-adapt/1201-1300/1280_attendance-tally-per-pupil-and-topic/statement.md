# Attendance Tally per Pupil and Topic

## Description

Table: `Pupils`

| Column Name | Type    |
| ----------- | ------- |
| pupil_id    | int     |
| pupil_name  | varchar |

`pupil_id` is the primary key (column with unique values) for this table.
Each row of this table holds the ID and the name of one pupil at the
school.

Table: `Topics`

| Column Name | Type    |
| ----------- | ------- |
| topic_name  | varchar |

`topic_name` is the primary key (column with unique values) for this
table.
Each row of this table holds the name of one topic taught at the school.

Table: `Sittings`

| Column Name | Type    |
| ----------- | ------- |
| pupil_id    | int     |
| topic_name  | varchar |

There is no primary key (column with unique values) for this table. It may
contain duplicates.
Each row of this table records that the pupil with ID `pupil_id` sat one
session for `topic_name`.

Write a solution to report, for every pupil and every topic, how many
sessions that pupil sat for that topic.

The report must cover the complete grid of pupils and topics, so a pupil
who never sat a topic still appears with a count of `0`.

Return the result table ordered by `pupil_id`, then by `topic_name`.

The result format is shown in the following example.

### Example 1

```text
Input:
Pupils table:
+----------+-------------+
| pupil_id | pupil_name  |
+----------+-------------+
| 7        | Ines        |
| 15       | Mateo       |
| 21       | Zoe         |
+----------+-------------+
Topics table:
+------------+
| topic_name |
+------------+
| Algebra    |
| Biology    |
| Coding     |
+------------+
Sittings table:
+----------+------------+
| pupil_id | topic_name |
+----------+------------+
| 7        | Biology    |
| 7        | Biology    |
| 15       | Coding     |
| 7        | Algebra    |
| 21       | Coding     |
| 15       | Coding     |
| 15       | Algebra    |
| 7        | Coding     |
+----------+------------+
Output:
+----------+-------------+------------+-------------------+
| pupil_id | pupil_name  | topic_name | sittings_attended |
+----------+-------------+------------+-------------------+
| 7        | Ines        | Algebra    | 1                 |
| 7        | Ines        | Biology    | 2                 |
| 7        | Ines        | Coding     | 1                 |
| 15       | Mateo       | Algebra    | 1                 |
| 15       | Mateo       | Biology    | 0                 |
| 15       | Mateo       | Coding     | 2                 |
| 21       | Zoe         | Algebra    | 0                 |
| 21       | Zoe         | Biology    | 0                 |
| 21       | Zoe         | Coding     | 1                 |
+----------+-------------+------------+-------------------+
Explanation: Every pupil appears once for every topic.
Ines sat Algebra once, Biology twice, and Coding once.
Mateo sat Algebra once and Coding twice but never sat Biology.
Zoe only ever sat Coding; her Algebra and Biology counts are 0.
```
