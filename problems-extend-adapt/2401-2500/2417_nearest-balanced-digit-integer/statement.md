# Nearest Balanced-Digit Integer

## Description

Call a positive integer _balanced-digit_ when its decimal representation
contains the same number of even digits as odd digits.

You are given a positive integer `n`. Return the smallest balanced-digit
integer that is greater than or equal to `n`.

### Example 1

```text
Input: n = 8
Output: 10
Explanation: The single digit 8 is odd, so it is not balanced. The next
integer 9 is also a lone odd digit, and 10 is the first balanced value:
one odd digit (1) and one even digit (0).
```

### Example 2

```text
Input: n = 47
Output: 47
Explanation: The digits are 4 (even) and 7 (odd), one of each, so 47 is
already balanced and equals the answer.
```

### Example 3

```text
Input: n = 5000
Output: 5001
Explanation: 5000 has three even digits (0, 0, 0) and a single odd digit
(5). Moving up, 5001 has digits 5, 0, 0, 1 — two odd and two even — so it
is the nearest balanced value.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

A balanced integer must have an even total number of digits, because the
even and odd digit counts are equal.

### Hint 2

When `n` has an odd digit count, no balanced integer with the same number
of digits exists, so the answer has one more digit. When the digit count is
even, scanning upward from `n` finds the answer quickly.

### Hint 3

For an even digit count `d`, the smallest balanced integer with `d` digits
is a leading `1`, then `d/2` zeros and `d/2 - 1` ones — this shape is
balanced by construction and is as small as any balanced number of that
length can be.
