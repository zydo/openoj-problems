# Nine-Free Index

## Description

Take the positive integers in order starting at 1, and cross out every one
whose decimal digits include a 9 — so `9`, `19`, `29`, `90`, `91`, and so on
all disappear. What survives, still in increasing order, is the sequence
`[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, ...]`.

Given an integer `n`, return the value sitting at the nth position (1-indexed)
of this surviving sequence.

### Example 1

```text
Input: n = 17
Output: 18
```

### Example 2

```text
Input: n = 50
Output: 55
```

### Constraints

- `1 <= n <= 8 × 10⁸`
