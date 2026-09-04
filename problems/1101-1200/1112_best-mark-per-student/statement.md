# Best Mark Per Student

## Description

Every row of `Coursework` records the mark one student earned in one
course of theirs.

Table: `Coursework`

| Column Name | Type |
| ----------- | ---- |
| student_id  | int  |
| course_id   | int  |
| mark        | int  |

`(student_id, course_id)` is the primary key (combination of columns
with unique values) of this table.
`mark` is never NULL.

For each student, report their best mark together with the course it
was earned in. If several courses share that best mark, report the one
with the smallest `course_id`.

Return the result rows ordered by `student_id` in ascending order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Coursework table:
+------------+-----------+------+
| student_id | course_id | mark |
+------------+-----------+------+
| 3          | 2         | 71   |
| 1          | 4         | 88   |
| 2          | 1         | 64   |
| 2          | 3         | 90   |
| 1          | 2         | 88   |
| 3          | 5         | 90   |
| 2          | 5         | 58   |
| 1          | 1         | 77   |
| 3          | 1         | 84   |
+------------+-----------+------+
Output:
+------------+-----------+------+
| student_id | course_id | mark |
+------------+-----------+------+
| 1          | 2         | 88   |
| 2          | 3         | 90   |
| 3          | 5         | 90   |
+------------+-----------+------+
Explanation:
Student 1's best mark is 88, earned in both course 4 and course 2, so
the smaller id, course 2, is reported. Student 2 peaks at 90 in
course 3, and student 3 at 90 in course 5.
```

### Example 2

```text
Input:
Coursework table:
+------------+-----------+------+
| student_id | course_id | mark |
+------------+-----------+------+
| 9          | 8         | 73   |
| 9          | 2         | 73   |
| 9          | 5         | 73   |
+------------+-----------+------+
Output:
+------------+-----------+------+
| student_id | course_id | mark |
+------------+-----------+------+
| 9          | 2         | 73   |
+------------+-----------+------+
Explanation:
All three marks of student 9 tie at the top, so the smallest
`course_id`, 2, wins.
```

Write your solution as a single `SELECT` query returning `student_id`,
`course_id`, and `mark`.
