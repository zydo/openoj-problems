# The Most Crowded Bench

## Description

You are given a 2D integer array `students`, where
`students[i] = [student_id, bench_id]` means student `student_id` is
sitting on bench `bench_id`.

Return how many distinct students sit on the single busiest bench — the
bench with the most distinct students. If `students` is empty, return 0.

Note: the same student may be listed several times on the same bench, but
they still count as one student for that bench.

### Example 1

```text
Input: students = [[4,10],[7,10],[4,10],[9,20]]
Output: 2
Explanation: Bench 10 hosts students 4 and 7 (student 4 is listed twice
but counts once). Bench 20 hosts only student 9, so the busiest bench
holds 2 distinct students.
```

### Example 2

```text
Input: students = [[5,3],[5,4],[6,3],[7,4],[8,3]]
Output: 3
Explanation: Bench 3 hosts students 5, 6, and 8; bench 4 hosts students
5 and 7. The maximum distinct headcount on one bench is 3.
```

### Example 3

```text
Input: students = [[9,1],[9,1],[9,1]]
Output: 1
Explanation: Every row names the same student on the same bench, so the
bench holds exactly 1 distinct student.
```

### Example 4

```text
Input: students = []
Output: 0
Explanation: With no rows at all, there is no crowd to count.
```

### Constraints

- `0 <= students.length <= 100`
- `students[i] = [student_id, bench_id]`
- `1 <= student_id <= 100`
- `1 <= bench_id <= 100`

## Hints

### Hint 1

Group the rows by bench id and drop duplicate pairs — a set or a fixed
boolean grid both work, since both ids are at most 100.
