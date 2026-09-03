# Flip The Digits

## Description

Take a signed 32-bit integer and flip the order of its decimal digits: the
units digit moves to the front, the leading digit drops to the end, and the
sign stays where it is. A flip whose result would fall outside the signed
32-bit range `[-2³¹, 2³¹ - 1]` has no representable value, and the answer for
such an input is `0`.

Treat the machine as one that has no integers wider than 32 bits, signed or
unsigned: there is no room to compute first and discover the overflow after
the fact, so an oversized flip has to be recognized before it is completed.

### Example 1

```text
Input: x = 5089
Output: 9805
```

### Example 2

```text
Input: x = -4470
Output: -744
```

Read backwards, the digits of 4470 give 0744 — that is 744 — and the negative
sign rides along.

### Example 3

```text
Input: x = 1534236469
Output: 0
```

Flipped, the digits read 9646324351, which is beyond `2³¹ - 1`, so the result
is clamped to 0.

### Example 4

```text
Input: x = 1463847412
Output: 2147483641
```

This flip just fits: 2147483641 is still inside the range, so it is returned
as is.

### Constraints

- `-2³¹ <= x <= 2³¹ - 1`
