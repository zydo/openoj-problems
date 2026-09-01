# Reading the Binary Ruler

## Description

Picture a ruler whose marks are the binary forms of the counting
numbers: order `n` is built by writing `1`, `10`, `11`, and so on up to
the binary form of `n`, each appended after the previous one. Reading
that whole bit string back as a single binary number gives one large
integer.

Given `n`, return the value of the order-`n` ruler modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 2
Output: 6
Explanation: The marks are "1" and "10", which join into "110" — the
value 6.
```

### Example 2

```text
Input: n = 4
Output: 220
Explanation: Writing "1", "10", "11", "100" end to end forms "11011100",
which reads as 220.
```

### Example 3

```text
Input: n = 30
Output: 754521863
Explanation: The ruler of order 30 spans 124 bits, so its value vastly
exceeds 32-bit range; the reported figure is the value modulo 10⁹ + 7.
```

### Constraints

- `1 <= n <= 10⁵`

## Hints

### Hint 1

Appending an `L`-bit mark to a running value `v` produces
`v * 2^L + mark` — the ruler never has to exist as a string.

### Hint 2

An integer's binary length only grows when it is a power of two, which
is exactly the `i & (i - 1) == 0` test.
