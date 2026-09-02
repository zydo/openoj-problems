# Wrap the Sum, Shrink the Value

## Description

You are given a string `expression` of the form `"<num1>+<num2>"`, where
`<num1>` and `<num2>` are positive integers written in decimal.

Insert exactly one pair of parentheses so the string remains a valid
arithmetic expression and evaluates as small as possible. The opening
parenthesis must sit somewhere left of the `+`, the closing parenthesis
somewhere right of it; the digits they enclose — together with the `+` —
form a summed group, and any digits left outside multiply that group.

Return the resulting string. If several placements reach the same smallest
value, any of them is accepted.

The input guarantees that the original value of `expression`, and its value
after any legal placement of the parentheses, fits in a signed 32-bit
integer.

### Example 1

```text
Input: expression = "43+9"
Output: "4(3+9)"
Explanation: The value is 4 * (3 + 9) = 48. A placement like "4(3)+9" is
not legal here — the closing parenthesis must fall right of the `+`.
```

### Example 2

```text
Input: expression = "55+55"
Output: "(55+55)"
Explanation: The value is 55 + 55 = 110; enclosing the whole sum beats any
placement that carves a multiplier out of one of the numbers.
```

### Example 3

```text
Input: expression = "19+4"
Output: "1(9+4)"
Explanation: The value is 1 * (9 + 4) = 13 — the leading 1 turns into a
multiplicative factor outside the group.
```

### Constraints

- `3 <= expression.length <= 10`
- `expression` consists of the digits `'1'` through `'9'` and exactly one
  `'+'`.
- `expression` starts and ends with a digit.
- The original value of `expression`, and its value under any legal
  placement of the parentheses, fits in a signed 32-bit integer.

## Hints

### Hint 1

The length cap is tiny — every legal placement of the pair can simply be
tried.

### Hint 2

Read each placement as `a * (b + c) * d`, where `a` and `d` are the digit
runs left outside on either side; a missing side contributes a factor of 1.
