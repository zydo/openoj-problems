# Digit-Step Numbers

## Description

Call an integer a digit-step number when, read left to right, every
neighboring pair of digits sits exactly `k` apart — each digit is the one
before it, raised or lowered by `k`.

Given integers `n` and `k`, return every `n`-digit integer that is a
digit-step number.

A written integer may not begin with `0`: something like `07` does not count
as an `n`-digit integer here. Every returned number therefore starts with a
digit from `1` through `9`, while later digits may be `0`.

The judge compares result arrays exactly, so one order is pinned: return the
integers in ascending numeric order, as the examples below do.

### Example 1

```text
Input: n = 2, k = 7
Output: [18,29,70,81,92]
Explanation: Each second digit steps 7 away from the first, up or down. In
70 the step runs downward from 7 to 0 — a trailing 0 is fine; only a
leading 0 is forbidden.
```

### Example 2

```text
Input: n = 4, k = 0
Output: [1111,2222,3333,4444,5555,6666,7777,8888,9999]
Explanation: A step of 0 keeps every digit identical, so the four-digit
repdigits are the entire family.
```

### Example 3

```text
Input: n = 4, k = 5
Output: [1616,2727,3838,4949,5050,6161,7272,8383,9494]
Explanation: Each number alternates between a digit and that digit plus 5,
stepping up and then back down.
```

### Constraints

- `2 <= n <= 9`
- `0 <= k <= 9`
