# Additive Pair Reachability

## Description

Begin with the positive integer pair `(startA, startB)`. One operation may
replace the pair `(a, b)` with either `(a + b, b)` or `(a, a + b)`.

Return whether some sequence of operations reaches `(goalA, goalB)`.

### Example 1

```text
Input: startA = 2, startB = 3, goalA = 13, goalB = 8
Output: true
Explanation: (2,3) -> (5,3) -> (5,8) -> (13,8).
```

### Example 2

```text
Input: startA = 2, startB = 3, goalA = 10, goalB = 8
Output: false
```

### Example 3

```text
Input: startA = 4, startB = 7, goalA = 4, goalB = 7
Output: true
Explanation: No operations are needed when the pairs already match.
```

### Constraints

- `1 <= startA, startB, goalA, goalB <= 10^9`

## Hints

### Hint 1

Reverse the process from the goal. The larger coordinate must have been
formed by adding the smaller coordinate.

### Hint 2

Use modulo to combine repeated subtractions, as in the Euclidean algorithm.

### Hint 3

When one goal coordinate reaches its start value, test whether the other
coordinate differs from its start by a nonnegative multiple of it.
