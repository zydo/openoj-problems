# Counting The Ordinary Numbers

## Description

You are given two positive integers `l` and `r`. For any number `x`, the
proper divisors of `x` are all of its positive divisors other than `x`
itself.

Call a number exceptional when it has exactly two proper divisors, and
ordinary otherwise. For instance, `4` is exceptional — its proper divisors
are exactly `1` and `2` — while `6` is ordinary, carrying the three proper
divisors `1`, `2`, and `3`.

Count how many numbers in the inclusive range `[l, r]` are ordinary.

### Example 1

```text
Input: l = 1, r = 10
Output: 8
Explanation: Only 4 and 9 are exceptional, so the remaining eight numbers
in the range are ordinary.
```

### Example 2

```text
Input: l = 4, r = 4
Output: 0
Explanation: The lone number 4 is itself exceptional.
```

### Example 3

```text
Input: l = 30, r = 50
Output: 20
Explanation: The only exceptional number in the range is 49 = 7².
```

### Constraints

- `1 <= l <= r <= 10⁹`

## Hints

### Hint 1

Ask which numbers can own exactly two proper divisors. Totaling all
divisors instead of proper ones may make the pattern easier to spot.

### Hint 2

Exactly two proper divisors means three divisors in all, and that
factorization forces the number to be the square of a prime.

### Hint 3

Sieve the primes up to the square root of the upper bound, then count how
many of them have a square landing inside `[l, r]`.
