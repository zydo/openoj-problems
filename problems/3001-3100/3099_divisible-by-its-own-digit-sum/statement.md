# Divisible By Its Own Digit Sum

## Description

Add up the digits of an integer and test whether that sum divides it
evenly — integers that pass are known as Harshad numbers. You are given an
integer `x`. Return its digit sum when `x` passes the test, and -1 when it
does not.

### Example 1

```text
Input: x = 36
Output: 9
Explanation: The digits 3 and 6 add up to 9, and 36 is a multiple of 9
(36 = 4 * 9). The test passes, so the answer is the digit sum itself, 9.
```

### Example 2

```text
Input: x = 47
Output: -1
Explanation: The digits 4 and 7 add up to 11. Because 47 = 4 * 11 + 3,
that sum leaves a remainder and does not divide x, so the answer is -1.
```

### Example 3

```text
Input: x = 100
Output: 1
Explanation: The digits 1, 0, and 0 add up to 1, and every integer is
divisible by 1. The test passes, so the answer is 1.
```

### Constraints

- `1 <= x <= 100`

## Hints

### Hint 1

Peel the digits off with repeated division by ten: each pass takes the
current remainder as the next digit and then drops it from the number.

### Hint 2

With the digit sum in hand, the Harshad check collapses to a single modulo
test against `x`.
