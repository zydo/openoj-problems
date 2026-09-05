# Digit-Product Root

## Description

You are given a positive integer `num`. Find the smallest positive integer
`x` such that multiplying together every decimal digit of `x` produces
exactly `num`. If no such `x` exists, or the smallest one overflows a
32-bit signed integer, return `0` instead.

### Example 1

```text
Input: num = 36
Output: 49
```

### Example 2

```text
Input: num = 84
Output: 267
```

### Example 3

```text
Input: num = 23
Output: 0
```

### Constraints

- `1 <= num <= 2³¹ - 1`

## Hints

### Hint 1

A candidate with fewer digits always beats one with more, so hunt for the
factorization of `num` into single decimal digits (`2`-`9`) that uses the
fewest digits possible.

### Hint 2

Peeling off the largest digits first (starting from 9 and working down to 2) is what minimizes the digit count — a 9 absorbs two 3s in one digit, an
8 absorbs three 2s, and so on.

### Hint 3

If a factor of 11 or larger is still left over once you've tried every
digit from 9 down to 2, no digit factorization exists at all.
