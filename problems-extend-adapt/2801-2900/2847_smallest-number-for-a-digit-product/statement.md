# Smallest Number For A Digit Product

## Description

You are given a positive integer `n`. Return the smallest positive integer
whose digits multiply together to give exactly `n`, as a string. If no
product of digits can ever equal `n`, return `"-1"`.

### Example 1

```text
Input: n = 24
Output: "38"
Explanation: 3 * 8 = 24, and no arrangement of digits with product 24
forms a smaller number than 38.
```

### Example 2

```text
Input: n = 128
Output: "288"
Explanation: 2 * 8 * 8 = 128, so "288" is the smallest integer whose
digits multiply to 128.
```

### Example 3

```text
Input: n = 13
Output: "-1"
Explanation: 13 is prime and larger than 9, so no single digit — and no
product of digits — can equal it.
```

### Constraints

- `1 <= n <= 10¹⁸`

## Hints

### Hint 1

Every digit of the answer must lie between 2 and 9 (aside from the
trivial case `n = 1`), so each prime factor of `n` has to be at most 7.

### Hint 2

If `n` is divisible by a prime greater than 7, that factor can never be
produced by multiplying digits, and the answer is `"-1"`.

### Hint 3

A factor of 5 (or 7) cannot be multiplied by anything above 1 and still
fit in one digit, so every 5 becomes a lone `"5"` and every 7 a lone
`"7"`.

### Hint 4

For the remaining 2s and 3s, pack them into the largest digits first —
three 2s make an `"8"`, two 3s make a `"9"` — because fewer digits always
means a smaller number; whatever spills out fills the leading low digits.
