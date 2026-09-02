# Largest Range Start With Zero AND

## Description

Given an integer `n`, find the largest integer `x` with `x <= n` such that
the bitwise AND of every number in the inclusive range `[x, n]` equals `0`.

Return that largest `x`.

### Example 1

```text
Input: n = 5
Output: 3
Explanation:
The bitwise AND of [4, 5] is 4.
The bitwise AND of [3, 4, 5] is 0.
```

### Example 2

```text
Input: n = 8
Output: 7
Explanation:
The bitwise AND of [7, 8] is 0.
```

### Example 3

```text
Input: n = 1
Output: 0
Explanation:
The bitwise AND of [0, 1] is 0.
```

### Constraints

- `1 <= n <= 10¹⁵`

## Hints

### Hint 1

Look at the highest set bit of `n`.

### Hint 2

Any range that starts above `2^m` (with `2^m` the largest power of two not
exceeding `n`) keeps that bit set in every member, so its AND cannot reach
zero.

### Hint 3

Starting exactly at `2^m - 1` works, because the range then contains both
`2^m - 1` and `2^m`, whose AND is zero — so the answer is `2^m - 1`.
