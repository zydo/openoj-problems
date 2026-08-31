# Palindromic Prime Search

## Description

Given an integer `n`, find the smallest integer at least `n` that is both
prime and a decimal palindrome.

A prime has no positive divisors other than `1` and itself; in particular,
`1` is not prime. A decimal palindrome has the same digits in either reading
direction, such as `101` or `12321`.

The test data guarantees that an answer exists and falls within
`[2, 2 * 10⁸]`.

### Example 1

```text
Input: n = 31
Output: 101
Explanation: 101 is prime and reads identically from either end. No smaller
palindromic prime is at least 31.
```

### Example 2

```text
Input: n = 150
Output: 151
Explanation: 151 is the first qualifying number at or above 150.
```

### Constraints

- `1 <= n <= 10⁸`
