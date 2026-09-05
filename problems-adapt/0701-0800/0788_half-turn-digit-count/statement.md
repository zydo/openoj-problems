# Half-Turn Digit Count

## Description

Rotating a digit 180 degrees turns it into another digit, or into
something that is not a digit at all:

- `0`, `1`, and `8` rotate into themselves,
- `2` and `5` rotate into each other,
- `6` and `9` rotate into each other, and
- `3`, `4`, and `7` do not rotate into any digit.

An integer is _half-turn good_ if rotating every one of its digits (each
digit must be rotated — none may be skipped) produces a valid number that
differs from the original.

Given an integer `n`, count how many half-turn good integers lie in
`[1, n]`.

### Example 1

```text
Input: n = 5
Output: 2
Explanation: Among 1 through 5, only 2 and 5 are half-turn good: 2 becomes
5 and 5 becomes 2, each a valid, different number. 1 rotates to itself, so
it does not count, and 3 and 4 do not rotate into digits at all.
```

### Example 2

```text
Input: n = 1
Output: 0
Explanation: 1 rotates into itself, so it is not half-turn good, and there
is no other integer to check.
```

### Example 3

```text
Input: n = 3
Output: 1
Explanation: Only 2 is half-turn good (it becomes 5); 1 rotates into
itself and 3 has no valid rotation.
```

### Constraints

- `1 <= n <= 10⁴`
