# Huge Exponent Remainder

## Description

Compute `aᵇ mod 1337`. The base `a` is a positive integer, while the
exponent `b` is supplied as an array of decimal digits because it may be far
too large to fit in an ordinary numeric type.

Treat the digit array as one base-10 integer and return the remainder after
raising `a` to that exponent. Do not convert the entire digit array into a
single integer.

### Example 1

```text
Input: a = 7, b = [2,0]
Output: 574
Explanation: The exponent is 20, and 7²⁰ leaves remainder 574 when divided
by 1337.
```

### Example 2

```text
Input: a = 5, b = [1,2,3]
Output: 1105
Explanation: The digit sequence represents exponent 123; 5¹²³ mod 1337 is
1105.
```

### Constraints

- `1 <= a <= 2³¹ - 1`
- `1 <= b.length <= 2000`
- `0 <= b[i] <= 9`
- `b` has no leading zero.
