# Prime Square Test

## Description

An integer `m` counts as a divisor of `n` whenever `n` can be written as
`k * m` for some integer `k`. You are given one positive integer `n`:
report `true` if `n` has exactly three positive divisors, and `false`
otherwise.

### Example 1

```text
Input: n = 9
Output: true
Explanation: 9 is divisible by 1, 3, and 9 — exactly three divisors.
```

### Example 2

```text
Input: n = 12
Output: false
Explanation: 1, 2, 3, 4, 6, and 12 all divide 12, so the count is six.
```

### Example 3

```text
Input: n = 1
Output: false
Explanation: The only divisor of 1 is 1 itself.
```

### Constraints

- `1 <= n <= 10⁴`

## Hints

### Hint 1

Divisors of `n` come in pairs `d` and `n / d`; the pair collapses only at
`d = n / d`, so an odd divisor count means `n` is a perfect square.

### Hint 2

A perfect square `n = x²` whose only divisors are `1`, `x`, and `n` needs
an `x` with no divisor between `1` and `x` — in other words, a prime `x`.
