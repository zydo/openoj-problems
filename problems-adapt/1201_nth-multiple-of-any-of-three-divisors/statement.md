# Nth Multiple of Any of Three Divisors

## Description

You are given four integers `n`, `a`, `b`, and `c`. Consider the positive
integers divisible by at least one of `a`, `b`, `c`, in increasing order.

Return the `n`-th of them.

### Example 1

```text
Input: n = 6, a = 2, b = 5, c = 3
Output: 8
Explanation: The multiples are 2, 3, 4, 5, 6, 8, 9, 10 ... The 6th is 8;
7 divides none of the three.
```

### Example 2

```text
Input: n = 7, a = 3, b = 6, c = 9
Output: 21
Explanation: Every multiple of 6 or 9 is already a multiple of 3, so the list
is 3, 6, 9, 12, 15, 18, 21 ... and the 7th is 21.
```

### Example 3

```text
Input: n = 4, a = 7, b = 11, c = 13
Output: 14
Explanation: The multiples are 7, 11, 13, 14 ... The 4th is 14.
```

### Constraints

- `1 <= n, a, b, c <= 10⁹`
- `1 <= a · b · c <= 10¹⁸`
- the answer is guaranteed to lie in `[1, 2 · 10⁹]`

### Follow-up

How few times must you evaluate a constant-time counting helper before the
answer is pinned down — can a logarithmic number of evaluations suffice?

## Hints

### Hint 1

Counting how many of the multiples land at or below a value `x` is the
workhorse; that count never drops as `x` grows.

### Hint 2

The smallest `x` whose count reaches `n` is itself a multiple — if it were
not, the count at `x - 1` would be the same and something smaller would
qualify. A range that never decreases invites halving.

### Hint 3

The count itself is inclusion–exclusion: the multiples of each divisor,
minus the multiples of each pairwise least common multiple (counted twice),
plus the multiples of the least common multiple of all three.

### Hint 4

Those least common multiples can tower far past 32-bit range even when `a`,
`b`, `c` individually do not — build each one through a gcd, dividing before
multiplying, in wide arithmetic.
