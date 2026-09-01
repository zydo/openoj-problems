# Collatz Chain Rankings

## Description

Start with a positive integer `x` and apply one rule repeatedly: halve `x`
while it is even, and replace it with `3x + 1` while it is odd, stopping the
moment it reaches `1`. The chain length of `x` is the number of rule
applications that takes.

For instance, `x = 3` walks `3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1`,
so its chain length is `7`.

Given bounds `lo`, `hi` and an index `k`, line up every integer in the range
`[lo, hi]` from shortest chain to longest, breaking ties by smaller value
first. Return the integer standing at position `k` in that line-up.

Every value in the range is guaranteed to reach `1`, and every chain length
fits a 32-bit signed integer.

### Example 1

```text
Input: lo = 5, hi = 8, k = 1
Output: 8
Explanation: The chain lengths of 5, 6, 7, 8 are 5, 8, 16, 3, so the
line-up reads [8, 5, 6, 7] and its first entry is 8.
```

### Example 2

```text
Input: lo = 10, hi = 13, k = 4
Output: 11
Explanation: The chain lengths of 10, 11, 12, 13 are 6, 14, 9, 9, giving
the line-up [10, 12, 13, 11]; the fourth entry is 11.
```

### Constraints

- `1 <= lo <= hi <= 1000`
- `1 <= k <= hi - lo + 1`

## Hints

### Hint 1

Measure the chains with memoization — a later value often walks into
territory an earlier chain already charted.

### Hint 2

Order the whole range by chain length, ties by value, and read off the
entry at index `k`.
