# Least Common Even Multiple

## Description

Given a positive integer `n`, return the smallest positive integer that is a
multiple of both `2` and `n`.

### Example 1

```text
Input: n = 3
Output: 6
Explanation: The multiples of 3 are 3, 6, 9, ...; the first of these that
is even is 6.
```

### Example 2

```text
Input: n = 8
Output: 8
Explanation: 8 is already even, so it is a multiple of both 8 and 2 by
itself.
```

### Example 3

```text
Input: n = 1
Output: 2
Explanation: The smallest multiple of 2 is 2, and every integer is a
multiple of 1.
```

### Constraints

- `1 <= n <= 150`

## Hints

### Hint 1

The answer is the least common multiple of `2` and `n`.

### Hint 2

Since 2 is prime, the lcm shrinks to a single parity check: double an odd
`n`, and leave an even `n` unchanged.
