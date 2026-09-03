# Total of All Digit Strings

## Description

You are given three integers `l`, `r`, and `k`.

Consider every string of exactly `k` digits in which each digit is taken
from the inclusive range `[l, r]`. Digits may repeat, every such string
counts exactly once, and a leading zero is allowed — the string is simply
read as the number it spells.

Return the sum of all these numbers modulo `10⁹ + 7`.

### Example 1

```text
Input: l = 2, r = 5, k = 1
Output: 14
Explanation: A one-digit string over [2, 5] is just the digit itself, so
the strings are 2, 3, 4, 5 and their sum is 14.
```

### Example 2

```text
Input: l = 3, r = 4, k = 2
Output: 154
Explanation: The four strings over [3, 4] are 33, 34, 43, 44, and
33 + 34 + 43 + 44 = 154.
```

### Example 3

```text
Input: l = 7, r = 7, k = 12
Output: 777772338
Explanation: Only one string qualifies, 777777777777, so the answer is
777777777777 % (10⁹ + 7) = 777772338.
```

### Constraints

- `0 <= l <= r <= 9`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

There are far too many strings to enumerate. Ask instead how often a single
digit occupies a single position across the whole collection.

### Hint 2

If `m` digits are allowed, every fixed position holds any particular digit
in exactly `m^(k-1)` strings, so the position whose place value is `10^p`
contributes `10^p` times the sum of the digits times `m^(k-1)`.

### Hint 3

The place weights `10^0 + 10^1 + ... + 10^(k-1)` form the repunit
`(10^k - 1) / 9`, which reduces modulo `10⁹ + 7` through the modular
inverse of `9`.
