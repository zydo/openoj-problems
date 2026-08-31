# Courses With Five or More Enrollees

## Description

Table: `Enrollments`

| Column Name | Type    |
| ----------- | ------- |
| student     | varchar |
| course      | varchar |

`(student, course)` is the primary key. Each row records one student's
enrolment in one course.

Return the name of every course with at least five students, in any order.

Each test case supplies its own `dataset`: the DDL seeds the `Enrollments`
table with that test case's rows. The result format is shown in the
following example.

### Example 1

```text
Input: the Enrollments table from the dataset below.
Enrollments rows:
student | course
Ada     | Math
Ben     | Math
Cyd     | Math
Dan     | Math
Eli     | Math
Fay     | Math
Ada     | English
Ben     | English
Cyd     | English
Dan     | English
Output:
course
Math
Explanation: Math has six enrollees and English only four, so only Math
clears the bar.
```

Answer with a single `SELECT` whose only output column is `course`.

## Hints

### Hint 1

`GROUP BY course` collapses each course's rows into one group whose
`COUNT(*)` is its headcount.

### Hint 2

`HAVING COUNT(*) >= 5` keeps exactly the courses with five or more — the
boundary is inclusive.
