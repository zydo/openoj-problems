# Conditional Expression Evaluator

## Description

Evaluate a valid ternary expression given as a string. The expression uses the
single-character values `T` (true) and `F` (false), one-digit numbers, the
conditional operator `?`, and the separator `:`. Ternary expressions nest, and
nesting associates from the right, matching the usual convention of
programming languages.

The result of a complete expression is always a single character: a digit,
`T`, or `F`.

### Example 1

```text
Input: expression = "F?5:T?6:7"
Output: "6"
Explanation: The expression reads as `F ? 5 : (T ? 6 : 7)`. The inner
conditional evaluates to 6, and the outer one, being false, selects it.
```

### Example 2

```text
Input: expression = "T?T:F?8:9"
Output: "T"
Explanation: The expression reads as `T ? T : (F ? 8 : 9)`, so the true branch
`T` is chosen and the inner conditional is never needed.
```

### Example 3

```text
Input: expression = "T?1:2"
Output: "1"
```

### Constraints

- `expression` has length between `5` and `10⁴`.
- The string is built from digits, `T`, `F`, `?`, and `:`.
- `expression` is guaranteed valid, and every number in it is a single digit.
