# Fewest Power-of-Two Steps to Zero

## Description

Start from a positive integer `n`. One move adds or subtracts any power
of two — a value `2ⁱ` with `i >= 0` — and every move costs one
operation. (A number `x` is a power of two when `x == 2ⁱ` for some
`i >= 0`.)

Return the fewest operations that bring `n` down to exactly `0`.

### Example 1

```text
Input: n = 23
Output: 3
Explanation:
- Add 2⁰ = 1, so n becomes 24.
- Add 2³ = 8, so n becomes 32.
- Subtract 2⁵ = 32, so n becomes 0.
No route uses fewer than 3 moves.
```

### Example 2

```text
Input: n = 8
Output: 1
Explanation: A single subtraction of 2³ = 8 lands on 0.
```

### Example 3

```text
Input: n = 100000
Output: 6
Explanation: Subtract 2⁵, subtract 2⁷, add 2⁹, subtract 2¹¹, add 2¹⁵,
and finally subtract 2¹⁷ — six moves land exactly on 0, and no shorter
route does.
```

### Constraints

- `1 <= n <= 10⁵`

## Hints

### Hint 1

Work in binary: every move writes one signed digit into `n`'s
representation, so the question is which signed-digit spelling of `n`
has the fewest nonzero digits.

### Hint 2

A run of adjacent 1-bits is cheapest cleared by adding 1 at its bottom —
the carry wipes the whole run and leaves a single bit one place above
it — two operations regardless of the run's length.

### Hint 3

Bonus: the same reasoning answers much larger inputs unchanged — `n` up
to `10¹⁸` costs only a few more loop iterations.
