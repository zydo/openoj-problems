# Distinct Zero-Stripped Values

## Description

Take a positive integer `n`. For each `x` from `1` through `n`, write down
the number that remains after every `0` digit is deleted from `x`'s
decimal representation. How many different numbers end up written down?

### Example 1

```text
Input: n = 25
Output: 23
Explanation: The single digits 1 through 9 survive unchanged. The values
11 through 19 contain no zero and stay themselves. Stripping 10 and 20
just yields 1 and 2, which are already on the paper, while 21 through 25
are zero-free and each appear for the first time. That makes
9 + 9 + 5 = 23 distinct written values.
```

### Example 2

```text
Input: n = 100
Output: 90
Explanation: Every one-digit value (9 of them) and every two-digit value
without a zero (9 × 9 = 81 of them) is at most 100 and gets written by
itself. Both 10 and 100 collapse to 1, contributing nothing new, so the
total is 90.
```

### Example 3

```text
Input: n = 7
Output: 7
Explanation: None of 1 through 7 contains a zero, so each writes itself
and all 7 values are distinct.
```

### Constraints

- `1 <= n <= 10¹⁵`

## Hints

### Hint 1

Deleting zeros can only ever produce a number whose own digits are all
nonzero, and any zero-free number in range is produced by writing itself.
So the distinct written values are exactly the zero-free numbers up to
`n` — count those.

### Hint 2

Count by position: there are `9^k` zero-free numbers with exactly `k`
digits, and the numbers sharing `n`'s most significant digits can be
counted with one tight pass over `n`'s digits, bailing out at the first
zero.
