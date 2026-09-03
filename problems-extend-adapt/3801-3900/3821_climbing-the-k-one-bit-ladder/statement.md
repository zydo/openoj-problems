# Climbing The K One-Bit Ladder

## Description

You are given two positive integers `n` and `k`.

Consider all positive integers whose binary representation contains
exactly `k` one bits, arranged in increasing order. Return the one sitting
at position `n` in that order. You may assume the answer is strictly less
than `2⁵⁰`.

### Example 1

```text
Input: n = 6, k = 2
Output: 12
Explanation: The integers with exactly 2 one bits, in increasing order,
begin 3 = 11₂, 5 = 101₂, 6 = 110₂, 9 = 1001₂, 10 = 1010₂, and
12 = 1100₂. The sixth of them is 12.
```

### Example 2

```text
Input: n = 20, k = 3
Output: 56
Explanation: Exactly C(5, 3) = 10 integers below 2⁵ carry three one bits,
and ten more live between 2⁵ and 2⁶, so the 20th is the largest six-bit
one: 56 = 111000₂.
```

### Example 3

```text
Input: n = 1000000000000, k = 25
Output: 13754565610074
Explanation: With n this large, enumeration is hopeless; the position has
to be resolved by counting how many candidates each bit length and each
prefix contributes, then placing the one bits one position at a time.
```

### Constraints

- `1 <= n <= 2⁵⁰`
- `1 <= k <= 50`
- The answer is strictly less than `2⁵⁰`.

## Hints

### Hint 1

An integer with bit length exactly `L` and exactly `k` one bits is a
leading 1 plus `k - 1` further ones scattered over the remaining `L - 1`
slots, so binomial coefficients count how many candidates each length
holds.

### Hint 2

Accumulate those counts over increasing lengths until the block that
contains rank `n` appears; that fixes the highest set bit and leaves a
smaller residual rank inside the block.

### Hint 3

Walk the remaining bit positions from high to low: leaving a position at
0 keeps `C(p, need)` completions available, so set the bit exactly when
the residual rank outruns that many smaller candidates.
