# The Whole Square Root

## Description

For a non-negative integer `x`, report the largest whole number whose
square does not exceed `x` — the square root of `x` with everything
after the decimal point discarded.

Built-in power functions and operators are off limits: no `pow(x, 0.5)`
and no `x ** 0.5` or equivalent.

### Example 1

```text
Input: x = 65
Output: 8
Explanation: 8 * 8 = 64 fits, while 9 * 9 = 81 overshoots, so 8 is the
answer.
```

### Example 2

```text
Input: x = 12345
Output: 111
Explanation: The true root is 111.11..., and the fraction is dropped.
```

### Example 3

```text
Input: x = 2147000000
Output: 46335
```

Near the input ceiling the answer still fits comfortably in 32 bits,
but squaring the candidates does not — care is needed there.

### Constraints

- `0 <= x <= 2³¹ - 1`

### Hints

- Scanning candidates in order works; think about what makes a candidate
  the final answer.
- The candidates that satisfy the condition form a prefix of the number
  line, so a halving search can land on its last element.
