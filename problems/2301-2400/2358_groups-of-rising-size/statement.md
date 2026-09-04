# Groups of Rising Size

## Description

A university cohort is described by an integer array `grades`, where
`grades[i]` is one student's grade. Every student must be placed into a
competition lineup: the students are split into non-empty groups that are
then presented in a fixed order, and neighboring groups have to respect
two strict rules for every consecutive pair of groups — the earlier group
must hold strictly fewer students, and its grades must add up to strictly
less than the next group's total.

Over all valid ways to split the cohort, return the largest possible
number of groups.

### Example 1

```text
Input: grades = [9,4,1,8,3,2,7,6,5]
Output: 3
Explanation: One valid three-group lineup is:
- Group 1 holds the student with grade 9. Sum: 9. Size: 1.
- Group 2 holds the students with grades 4, 1 and 8. Sum: 13. Size: 3.
- Group 3 holds the students with grades 3, 2, 7, 6 and 5.
  Sum: 23. Size: 5.
Sums and sizes both rise strictly (9 < 13 < 23 and 1 < 3 < 5). Four
groups cannot work, because even the cheapest sizes 1, 2, 3 and 4 would
demand 10 students and only 9 exist.
```

### Example 2

```text
Input: grades = [5,5,5]
Output: 2
Explanation: One student goes alone (sum 5, size 1) and the other two
follow (sum 10, size 2) — sums and sizes both strictly increase, and
splitting further is impossible with only three students.
```

### Example 3

```text
Input: grades = [100,1]
Output: 1
Explanation: Two groups would need strictly increasing sizes, but the
cohort is too small for that — both groups would hold a single student.
```

### Constraints

- `1 <= grades.length <= 10⁵`
- `1 <= grades[i] <= 10⁵`

## Hints

### Hint 1

Sorting the students by grade makes the sums constraint almost take care
of itself.

### Hint 2

After sorting, handing out students in batches of sizes 1, 2, 3, ... keeps
both rules satisfied automatically.

### Hint 3

If the final batch is short of its planned size, folding it into the
previous group repairs the split.

### Hint 4

Greedy small batches are optimal, so the answer is the largest k whose
sizes 1 + 2 + ... + k fit within the cohort.
