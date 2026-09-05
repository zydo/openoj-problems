# Distinct Powers of Three

## Description

Decide whether a positive integer `n` can be written as a sum in which every
term is a power of three and no term repeats. A power of three is a number of
the form `3ˣ` for some non-negative integer `x`.

Return `true` if such a sum exists and `false` otherwise.

### Example 1

```text
Input: n = 13
Output: true
Explanation: 13 = 3² + 3¹ + 3⁰ = 9 + 3 + 1, with each power used once.
```

### Example 2

```text
Input: n = 15
Output: false
Explanation: 9 + 3 + 1 = 13 falls short, and the next power up is 27 — no
selection of distinct powers reaches 15.
```

### Example 3

```text
Input: n = 1093
Output: true
Explanation: 1093 = 3⁶ + 3⁵ + 3⁴ + 3³ + 3² + 3¹ + 3⁰, one copy of every
power up to 3⁶.
```

### Constraints

- `1 <= n <= 10⁷`

## Hints

### Hint 1

Powers of three grow quickly: with `n <= 10⁷`, only `3⁰` through `3¹⁴` can
ever appear in a sum.

### Hint 2

Each term of the sum is a take-it-or-leave-it choice for one power, and
writing `n` in base 3 records exactly those choices as digits. A digit of 2
would mean using the same power twice, so `n` qualifies precisely when its
ternary form contains no `2`.
