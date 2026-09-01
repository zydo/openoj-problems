# Cheapest x-Power Sum

## Description

You are given a positive integer `x`. Consider expressions built by writing
copies of `x` separated by binary operators, each one `+`, `-`, `*`, or `/` —
for example, with `x = 3` the expression `3 * 3 / 3 + 3 - 3` evaluates to `3`.
Every such expression obeys these rules:

- `/` is rational division, so it need not produce an integer.
- Parentheses may not appear anywhere in the expression.
- Multiplication and division bind tighter than addition and subtraction,
  following the usual order of operations.
- Unary negation is not an available operator: `x - x` is fine because it
  only subtracts, but `-x + x` is not, because of the leading negation.

Given an integer `target`, find an expression of this form whose value is
`target` and that uses as few operators as possible. Return that smallest
operator count.

### Example 1

```text
Input: x = 3, target = 28
Output: 4
Explanation: 3 * 3 * 3 + 3 / 3 equals 28 and uses 4 operators.
```

### Example 2

```text
Input: x = 5, target = 123
Output: 6
Explanation: 5 * 5 * 5 - 5 / 5 - 5 / 5 equals 123 and uses 6 operators.
```

### Example 3

```text
Input: x = 10, target = 1000000
Output: 5
Explanation: 10 * 10 * 10 * 10 * 10 * 10 equals 1000000 and uses 5 operators.
```

### Constraints

- `2 <= x <= 100`
- `1 <= target <= 2 * 10⁸`
