# Top Product Under An XOR Mask

## Description

Pick a mask `x` with `0 <= x < 2^n` and XOR it into both `a` and `b`.
Over every mask in that range, maximize the product

`(a XOR x) * (b XOR x)`

and return the best product modulo `10^9 + 7`.

XOR here is the usual bitwise exclusive-or: a mask bit flips the
corresponding bit of whichever number it is applied to, and mask bits at
or above position `n` simply do not exist.

### Example 1

```text
Input: a = 3, b = 4, n = 2
Output: 12
Explanation: The mask may touch only the two lowest bits. Trying all
four masks, x = 0 keeps a = 3 and b = 4 and yields 3 * 4 = 12, and no
other mask beats it (x = 2 gives 1 * 6 = 6, x = 3 collapses a to 0).
```

### Example 2

```text
Input: a = 8, b = 5, n = 3
Output: 70
Explanation: With x = 2 the factors become 8 XOR 2 = 10 and
5 XOR 2 = 7, and 10 * 7 = 70. Every other mask in 0..7 lands lower.
```

### Example 3

```text
Input: a = 6, b = 4, n = 3
Output: 35
Explanation: x = 1 turns the pair into 7 and 5, whose product 35 is
the best on offer; x = 3 ties it at 5 * 7 = 35.
```

### Example 4

```text
Input: a = 562949953421312, b = 562949953421311, n = 50
Output: 544612161
Explanation: The two values already split the top bits as evenly as
any 50-bit mask can manage — 2^49 and 2^50 - 1 — so the best mask is 0
and the answer is their enormous product reduced modulo 10^9 + 7.
```

### Constraints

- `0 <= a, b < 2^50`
- `0 <= n <= 50`

## Hints

### Hint 1

Decide the mask one bit at a time, starting from the most significant
bit and working down; bits the mask cannot reach stay put.

### Hint 2

Where `a` and `b` share a bit value, the mask can set that bit in both
flipped results at once — always worth taking, since the product grows
by `bit * (a^x + b^x) + bit^2` however the lower bits land.

### Hint 3

Where they differ, only one of the two results can carry the bit;
hand it to whichever result is currently smaller, because all higher
bits are already final.
