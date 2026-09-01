# Who Restocks the Chalk

## Description

A class of `n` students, numbered `0` through `n - 1`, takes turns
solving problems: student `0` first, then student `1`, and so on; once
student `n - 1` has gone, the round restarts at student `0`.

You are given a **0-indexed** integer array `chalk` and an integer `k`,
the number of chalk pieces in the box at the start. Solving a problem
costs student `i` exactly `chalk[i]` pieces, and if fewer than
`chalk[i]` pieces remain when student `i`'s turn begins, that student
is sent to restock the box instead.

Return the index of the student sent to restock.

### Example 1

```text
Input: chalk = [3,2,4], k = 12
Output: 1
Explanation: Student 0 spends 3 (9 left), student 1 spends 2 (7 left),
and student 2 spends 4 (3 left) to end the first round. Student 0 then
spends the remaining 3 exactly, leaving an empty box. Student 1 finds
nothing left and goes to restock.
```

### Example 2

```text
Input: chalk = [8,4,6,2], k = 23
Output: 0
Explanation: A full round costs 8 + 4 + 6 + 2 = 20, so only 3 pieces
survive into the second round. That is not enough for student 0, who
needs 8.
```

### Example 3

```text
Input: chalk = [6,1,2], k = 9
Output: 0
Explanation: The stock of 9 exactly covers one full round (6 + 1 + 2),
so the box is empty when student 0 starts the next round.
```

### Constraints

- `chalk.length == n`
- `1 <= n <= 10⁵`
- `1 <= chalk[i] <= 10⁵`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Every complete round consumes exactly `sum(chalk)` pieces, so that
amount can be removed from `k` in one modulo instead of round by
round.

### Hint 2

With the remainder in hand, walk the array once: the first student
whose usage exceeds what is left is the answer.
