# Reachable Reverse Sum

## Description

Given a non-negative integer `num`, decide whether `num` can be written as
`x + reverse(x)` for some non-negative integer `x`, where `reverse(x)` is
the decimal digits of `x` read back to front.

Return `true` if such an `x` exists and `false` otherwise.

### Example 1

```text
Input: num = 33
Output: true
Explanation: 12 + 21 = 33, so such an x exists.
```

### Example 2

```text
Input: num = 7
Output: false
Explanation: No non-negative x satisfies x + reverse(x) = 7.
```

### Example 3

```text
Input: num = 101
Output: true
Explanation: 100 + 001 = 101. When a number is reversed, leading zeros are
dropped, so reverse(100) is simply 1.
```

### Constraints

- `0 <= num <= 10⁵`

## Hints

### Hint 1

The search space is small — any candidate `x` must lie between `0` and
`num`, so checking every value in that range settles the question.

### Hint 2

To reverse a number, peel off its digits from the right and rebuild the
value from the left, or convert to a string and read it back to front.
