# 5-Smooth Number Check

## Description

Call a positive integer 5-smooth if every prime in its factorization is
one of 2, 3, or 5 — equivalently, if it can be written as `2^a * 3^b *
5^c` for some non-negative integers `a`, `b`, `c`.

Given an integer `n`, return `true` if `n` is a 5-smooth number and
`false` otherwise.

### Example 1

```text
Input: n = 45
Output: true
Explanation: 45 = 3² × 5, using only the primes 3 and 5.
```

### Example 2

```text
Input: n = 1
Output: true
Explanation: 1 has an empty factorization, so it trivially satisfies
the condition.
```

### Example 3

```text
Input: n = 22
Output: false
Explanation: 22 = 2 × 11, and 11 is a prime factor outside {2, 3, 5}.
```

### Constraints

- `-2³¹ <= n <= 2³¹ - 1`
