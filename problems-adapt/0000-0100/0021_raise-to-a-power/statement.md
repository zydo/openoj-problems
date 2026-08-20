# Raise To A Power

## Description

Given a real number `x` and an integer exponent `n`, return the value of `x`
raised to the power `n`.

Multiplying `x` into itself `|n|` times is one way to do it, but it costs one
multiplication per step of the exponent; your method should finish in
`O(log n)` multiplications. A negative exponent asks for the reciprocal of the
positive power.

### Example 1

```text
Input: x = 3.00000, n = 5
Output: 243.00000
Explanation: 3 · 3 · 3 · 3 · 3 = 243.
```

### Example 2

```text
Input: x = 1.50000, n = 4
Output: 5.06250
Explanation: 1.5² = 2.25, 2.25² = 5.0625 — two squarings rather than four
multiplications.
```

### Example 3

```text
Input: x = 2.00000, n = -3
Output: 0.12500
Explanation: 2³ = 8, and a negative exponent reciprocates it: 1/8.
```

### Constraints

- `-100.0 < x < 100.0`
- `-2³¹ <= n <= 2³¹ - 1`
- `n` is an integer.
- Either `x` is nonzero, or `n` is positive.
- `-10⁴ <= x^n <= 10⁴`

## Hints

### Hint 1

Half of the work describes the whole: `x^8` is `(x^4)²`, and `x^4` is `(x^2)²`.
Write the identity down for an even exponent, then for an odd one.

### Hint 2

Those identities halve the exponent each step, so the recursion is only as
deep as the number of bits in `n`. Equivalently, the answer is a product of
`x^(2^k)` over exactly the set bits `k` of the exponent.

### Hint 3

A negative exponent is the positive case turned upside down: compute the
positive power and reciprocate. Note that `n = -2³¹` cannot be negated inside
a 32-bit signed integer — widen it first.
