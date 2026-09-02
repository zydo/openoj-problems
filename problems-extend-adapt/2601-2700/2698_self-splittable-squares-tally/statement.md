# The Self-Splittable Squares Tally

## Description

For a positive integer `n`, its **self-splittable squares total** is
defined as follows. Consider every integer `i` with `1 <= i <= n`. Call
`i` splittable when the decimal representation of `i * i` can be cut into
contiguous pieces whose integer values add up to exactly `i`. The total is
the sum of `i * i` over all splittable `i`.

Return the self-splittable squares total of `n`.

### Example 1

```text
Input: n = 1
Output: 1
Explanation: The only candidate is i = 1. Its square is 1, whose one
piece sums to 1, so the total is 1 * 1 = 1.
```

### Example 2

```text
Input: n = 45
Output: 3503
Explanation: Five integers qualify:
- 1, since 1 * 1 = 1.
- 9, since 81 splits as 8 + 1.
- 10, since 100 splits as 10 + 0.
- 36, since 1296 splits as 1 + 29 + 6.
- 45, since 2025 splits as 20 + 25.
The total is 1 + 81 + 100 + 1296 + 2025 = 3503.
```

### Example 3

```text
Input: n = 91
Output: 21533
Explanation: Eight integers qualify:
- 1 (1 * 1 = 1), 9 (8 + 1), 10 (10 + 0), 36 (1 + 29 + 6), and
  45 (20 + 25),
- 55, since 3025 splits as 30 + 25,
- 82, since 6724 splits as 6 + 72 + 4,
- 91, since 8281 splits as 8 + 2 + 81.
The total is 1 + 81 + 100 + 1296 + 2025 + 3025 + 6724 + 8281 = 21533.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

A square's digit string is short — try every way of placing cuts between
its digits.

### Hint 2

A recursion that consumes the digits left to right, attempting each
possible piece length at every step, enumerates all partitions of one
square; add up the squares of every integer whose square admits a
successful partition.
