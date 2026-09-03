# Counting Same-Bit Numbers

## Description

You are given an integer `n`.

Call a non-negative integer same-bit when every digit of its binary
representation is the same digit.

Return how many same-bit integers fall in the range `[0, n]`.

### Example 1

```text
Input: n = 6
Output: 3
Explanation: The integers 0 through 6 are 0, 1, 10, 11, 100, 101, and 110
in binary. Only 0 ("0"), 1 ("1"), and 3 ("11") repeat a single digit, so
the count is 3.
```

### Example 2

```text
Input: n = 10
Output: 4
Explanation: 0, 1 ("1"), 3 ("11"), and 7 ("111") all qualify; 15 ("1111")
is already past 10. Nothing else in the range is written with one repeated
digit.
```

### Example 3

```text
Input: n = 100
Output: 7
Explanation: The qualifying values are 0 and the all-ones numbers
1, 3, 7, 15, 31, 63 — seven of them, since the next all-ones value 127
exceeds 100.
```

### Constraints

- `0 <= n <= 1000`

## Hints

### Hint 1

A positive integer's binary form starts with 1. If all of its digits are
identical they must all be 1s, so the only candidates are 0 and the
all-ones values 1, 3, 7, 15, ...

### Hint 2

Each all-ones value is one bit longer than the last: from `rep`, the next
is `2 * rep + 1`. Walk upward from 1 while the value stays within `n`, and
count the starting zero too.
