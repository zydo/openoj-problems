# Long Division by Hand

## Description

Work out `dividend ÷ divisor` using only addition, subtraction, and
comparison — multiplication, division, and remainder operators may
not touch the computation at any point.

Throw away the fractional part of the true quotient by truncating
toward zero: `44 ÷ 5` becomes `8`, and `-38 ÷ 6` becomes `-6`, not
`-7`.

Reason about the numbers as 32-bit signed values bounded by
`[-2³¹, 2³¹ - 1]`. If the true quotient falls outside that window,
clamp it to the nearest bound: a quotient above `2³¹ - 1` is reported
as `2³¹ - 1`, and one below `-2³¹` is reported as `-2³¹`.

### Example 1

```text
Input: dividend = 44, divisor = 5
Output: 8
Explanation: 44 ÷ 5 = 8.8, and the 0.8 is discarded.
```

### Example 2

```text
Input: dividend = -38, divisor = 6
Output: -6
Explanation: The quotient is -6.333..., which truncates toward zero
to -6.
```

### Example 3

```text
Input: dividend = -2147483648, divisor = -1
Output: 2147483647
Explanation: The true quotient 2³¹ does not fit in the 32-bit signed
window, so it is clamped to the maximum representable value.
```

### Constraints

- `-2³¹ <= dividend, divisor <= 2³¹ - 1`
- `divisor != 0`
