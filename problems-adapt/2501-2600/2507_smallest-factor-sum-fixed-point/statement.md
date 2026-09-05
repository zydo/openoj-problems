# Smallest Factor-Sum Fixed Point

## Description

Start with a positive integer `n` and keep applying one replacement rule:
rewrite `n` as the sum of its prime factors, where a prime that divides `n`
several times contributes to the sum once per occurrence.

Every starting value eventually settles on a number the rule maps back to
itself. Return that settled value — it is also the smallest number `n`
becomes along the way.

### Example 1

```text
Input: n = 12
Output: 7
Explanation: 12 = 2 * 2 * 3, so n becomes 2 + 2 + 3 = 7. Then 7 is prime,
so its factor sum is just 7 — the value never changes again.
```

### Example 2

```text
Input: n = 4
Output: 4
Explanation: 4 = 2 * 2 maps to 2 + 2 = 4. The number replaces itself, so
the answer is 4 — the one composite that is its own factor sum.
```

### Example 3

```text
Input: n = 9
Output: 5
Explanation: 9 = 3 * 3 becomes 6; then 6 = 2 * 3 becomes 5; and the prime
5 is where the process stops.
```

### Constraints

- `2 <= n <= 10⁵`

## Hints

### Hint 1

A prime `p` has exactly one prime factor, `p` itself, so the rule leaves it
untouched; `4` is the only composite with that property.

### Hint 2

Every replacement on a non-fixed composite makes the number smaller, so
the whole walk is short — just simulate it.

### Hint 3

Collect factors by trying divisors from 2 up to the square root, dividing
each out completely before moving on.
