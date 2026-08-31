# Count Shared Divisors

## Description

You are given two positive integers `a` and `b`.

A positive integer `x` is a _shared divisor_ of `a` and `b` when it divides
both of them without a remainder.

Return the number of shared divisors of `a` and `b`.

### Example 1

```text
Input: a = 10, b = 15
Output: 2
Explanation: The shared divisors of 10 and 15 are 1 and 5.
```

### Example 2

```text
Input: a = 100, b = 75
Output: 3
Explanation: The shared divisors of 100 and 75 are 1, 5, and 25.
```

### Example 3

```text
Input: a = 16, b = 24
Output: 4
Explanation: The shared divisors of 16 and 24 are 1, 2, 4, and 8.
```

### Constraints

- `1 <= a, b <= 1000`

## Hints

### Hint 1

An integer divides both `a` and `b` exactly when it divides their greatest
common divisor. The shared divisors are therefore precisely the divisors
of `gcd(a, b)`.

### Hint 2

Count the divisors of `g = gcd(a, b)` by trial division up to `sqrt(g)`:
each divisor `d` pairs with a cofactor `g / d`, and a perfect square
counts its root once.
