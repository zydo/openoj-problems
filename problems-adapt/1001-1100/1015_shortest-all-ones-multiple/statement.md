# Shortest All-Ones Multiple

## Description

An all-ones number is a positive integer whose decimal digits are every
one of them 1: 1, 11, 111, 1111, and so on, each term appending another
digit. Given a positive integer `k`, return the digit count of the
shortest all-ones number that `k` divides evenly, or `-1` if `k` divides
no all-ones number at all.

Do not try to build the numbers themselves — even for moderate `k`, the
first one that works can run to far more digits than any machine
integer holds.

### Example 1

```text
Input: k = 21
Output: 6
Explanation: 111111 = 21 * 5291, and no shorter all-ones number is
divisible by 21.
```

### Example 2

```text
Input: k = 23
Output: 22
Explanation: The first all-ones number that 23 divides has 22 digits.
```

### Example 3

```text
Input: k = 81
Output: 81
Explanation: Every all-ones number with at most 80 digits leaves a
nonzero remainder when divided by 81; the 81-digit one finally works.
```

### Constraints

- `1 <= k <= 10^5`

## Hints

### Hint 1

Appending one more digit 1 to a number `n` produces `10n + 1`, so the
value modulo `k` can be carried forward one digit at a time without the
number itself ever being formed.

### Hint 2

Only `k` distinct remainders mod `k` exist. If the walk reaches a
remainder it has already seen, it is stuck in a cycle that never
contains 0 — so there is an exact bound on how long anyone should keep
walking.
