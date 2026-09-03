# The Digit-Reflection Gap

## Description

You are given a positive integer `n`.

Read its decimal digits backwards to form a second integer — the
reflection of `n`. Leading zeros produced this way simply disappear, so
the reflection of `1200` is `21`.

Return the absolute difference between `n` and its reflection.

### Example 1

```text
Input: n = 421
Output: 297
Explanation: Reading 421 backwards gives 124, and 421 - 124 = 297.
```

### Example 2

```text
Input: n = 1200
Output: 1179
Explanation: Reading 1200 backwards gives 0021, which is 21, and
1200 - 21 = 1179.
```

### Example 3

```text
Input: n = 858
Output: 0
Explanation: 858 reads the same backwards as forwards, so the gap is 0.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

No search is needed — build the reversed number directly by peeling
digits off `n` one at a time.

### Hint 2

Folding each peeled digit in as `10 * reversed + digit` naturally drops
trailing zeros, since they never get emitted as leading zeros.
