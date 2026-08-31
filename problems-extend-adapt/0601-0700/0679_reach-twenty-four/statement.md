# Reach Twenty-Four

## Description

You are dealt four cards, given as an integer array `cards` of length 4,
each holding a value from `1` to `9`. Decide whether the four values can
be combined with `+`, `-`, `*`, `/`, and parentheses into a single
expression that evaluates to exactly `24`.

The expression must follow these rules:

- `/` is real (fractional) division, not integer division. For
  instance, `4 / (1 - 2 / 3) = 4 / (1 / 3) = 12`.
- Every operator combines exactly two numbers — `-` may never be used
  as a unary sign. With `cards = [1, 1, 1, 1]`, the expression
  `"-1 - 1 - 1 - 1"` is not a legal reading.
- The four card values may not be concatenated into a longer number.
  With `cards = [1, 2, 1, 2]`, the expression `"12 + 12"` is invalid.

Return `true` if some legal expression over all four cards evaluates to
`24`, and `false` if none does.

### Example 1

```text
Input: cards = [3,3,8,8]
Output: true
Explanation: 8 / (3 - 8 / 3) = 24.
```

### Example 2

```text
Input: cards = [9,9,9,9]
Output: false
```

### Constraints

- `cards.length == 4`
- `1 <= cards[i] <= 9`
