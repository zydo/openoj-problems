# Evaluate The Postfix Expression

## Description

An arithmetic expression arrives as an array of string `tokens` written
in postfix notation: every operator appears after the two values it
combines, so no parentheses are ever needed and each operator's
operands are simply the two most recent unfinished values. Work through
the tokens and report the single integer the expression reduces to.

The four operators `+`, `-`, `*` and `/` may each combine two plain
integers or two already-evaluated subexpressions. Division drops any
fractional remainder by truncating toward zero — `-4`, never `-5`, for a
quotient of `-4.5` — and no token sequence ever divides by zero. The
input is always a well-formed expression, and both the final answer and
every intermediate value fit in a 32-bit integer.

### Example 1

```text
Input: tokens = ["3","7","+"]
Output: 10
Explanation: The `+` combines the two literals: 3 + 7 = 10.
```

### Example 2

```text
Input: tokens = ["9","-2","/"]
Output: -4
Explanation: 9 / -2 is -4.5, and truncation toward zero keeps -4 —
flooring would wrongly give -5.
```

### Example 3

```text
Input: tokens = ["6","2","8","*","3","/","+"]
Output: 11
Explanation: 2 * 8 = 16, then 16 / 3 truncates to 5, and 6 + 5 = 11.
```

### Constraints

- `1 <= tokens.length <= 10⁴`
- Each token is one of the operators `"+", "-", "*", "/"`, or an
  integer in the range `[-200, 200]`.
