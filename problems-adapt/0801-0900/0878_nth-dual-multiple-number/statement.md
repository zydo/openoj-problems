# Nth Dual-Multiple Number

## Description

Call a positive integer a dual-multiple when it is divisible by `a`, by `b`,
or by both. Given `n`, `a`, and `b`, find the `n`th dual-multiple in increasing
numeric order.

The result can exceed ordinary 32-bit limits. Return it reduced modulo
`10⁹ + 7`.

### Example 1

```text
Input: n = 5, a = 2, b = 4
Output: 10
```

### Example 2

```text
Input: n = 7, a = 3, b = 5
Output: 15
```

### Example 3

```text
Input: n = 10, a = 6, b = 4
Output: 30
```

### Constraints

- `1 <= n <= 10⁹`
- `2 <= a, b <= 4 * 10⁴`
