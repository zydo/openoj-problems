# Department Headcounts

## Description

Table: `Pupil`

| Column Name  | Type    |
| ------------ | ------- |
| student_id   | int     |
| student_name | varchar |
| gender       | varchar |
| faculty_id   | int     |

`student_id` is the primary key; `faculty_id` references the `Faculty`
table.

Table: `Faculty`

| Column Name  | Type    |
| ------------ | ------- |
| faculty_id   | int     |
| faculty_name | varchar |

`faculty_id` is the primary key.

Report every department — including any with no current students — as its
name and student count. Order by count descending, breaking ties by name
alphabetically.

Each test case supplies its own `dataset`: the DDL seeds both tables with
that test case's rows. The result format is shown in the following example.

### Example 1

```text
Input: the Pupil and Faculty tables from the dataset below.
Pupil rows: (1,Ada,F,1), (2,Ben,M,1), (3,Cyd,M,2)
Faculty rows: (1,Physics), (2,Chemistry), (3,History)
Output:
faculty_name | student_number
Physics      | 2
Chemistry    | 1
History      | 0
Explanation: Physics has two pupils, Chemistry one, and History none —
yet History still appears with a zero count.
```

Answer with a single `SELECT` whose output columns are `faculty_name` and
`student_number`.

## Hints

### Hint 1

Keep every department by LEFT JOINing `Faculty` to `Pupil` with `Faculty`
on the left.

### Hint 2

Count `student_id`, not rows: `COUNT(student_id)` skips the null a
matchless department carries, reporting `0` instead of `1`.
