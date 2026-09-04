# Maximum Matching Agreement

## Description

A questionnaire of `n` yes-or-no questions (`1` for yes, `0` for no) was
filled in by `m` students and, separately, by `m` mentors, both groups
numbered `0` to `m - 1`. The 2D integer array `students` records the
students' answers — `students[i]` is the answer sheet of student `i` — and
`mentors` does the same for the mentors.

Every student is to be paired with one mentor, and every mentor takes
exactly one student. A pair's agreement score is the number of questions
they answered identically: sheets `[1,1,0]` and `[1,0,0]`, say, agree
twice.

Pair everyone up so the sum of agreement scores is as large as possible,
and return that sum.

### Example 1

```text
Input: students = [[0,1,1],[1,0,0],[1,1,0]], mentors = [[1,1,0],[0,1,1],[0,0,1]]
Output: 7
Explanation: The best pairing is:
- student 0 with mentor 1, agreeing on all three answers (score 3).
- student 1 with mentor 2, agreeing on the first and third (score 1).
- student 2 with mentor 0, agreeing on all three (score 3).
Total: 3 + 1 + 3 = 7.
```

### Example 2

```text
Input: students = [[0,1],[1,0]], mentors = [[1,0],[0,1]]
Output: 4
Explanation: Each student disagrees completely with one mentor and agrees
completely with the other, so the crossed pairing — student 0 with mentor
1, student 1 with mentor 0 — scores 2 + 2.
```

### Example 3

```text
Input: students = [[1,1,0,0],[0,0,1,1]], mentors = [[1,1,0,0],[0,0,1,1]]
Output: 8
Explanation: Matching each student to the mentor with the identical sheet
agrees on all four questions per pair.
```

### Constraints

- `m == students.length == mentors.length`
- `n == students[i].length == mentors[j].length`
- `1 <= m, n <= 8`
- Every entry of `students` and `mentors` is `0` or `1`.

## Hints

### Hint 1

Start by tabulating the agreement score of every student-mentor pair.

### Hint 2

What remains is picking one mentor per student — try the pairings
systematically rather than greedily.

### Hint 3

With `m <= 8`, the set of mentors already taken fits in a bitmask, and the
DP over that mask needs no second dimension — say why.
