# Sum of Two Squares

## Description

Given a non-negative integer `c`, determine whether it can be written as
the sum of the squares of two integers `a` and `b`, i.e. whether
`a² + b² = c` for some non-negative integers `a` and `b`.

### Example 1

```text
Input: c = 10
Output: true
Explanation: 1 * 1 + 3 * 3 = 10
```

### Example 2

```text
Input: c = 14
Output: false
```

### Example 3

```text
Input: c = 0
Output: true
Explanation: 0 * 0 + 0 * 0 = 0
```

### Constraints

- `0 <= c <= 2³¹ - 1`

## Hints

### Hint 1

Both `a` and `b` must be at most the integer square root of `c` — a
larger value squared would already exceed `c` on its own.

### Hint 2

Walk `a` up from `0` and `b` down from `sqrt(c)` at the same time: the
sum `a² + b²` only grows as `a` increases and only shrinks as `b`
decreases, so you can steer the sum toward `c` from both ends at once.

### Hint 3

Stop as soon as the two pointers cross — if no exact match turned up by
then, no witness pair exists.
