# Least Edits to Invert an Expression

## Description

You are given a valid boolean expression in the string `expression`,
built from the characters `'0'`, `'1'`, `'&'` (AND), `'|'` (OR), `'('`,
and `')'`. For example, `"1"`, `"(((1))|(0))"`, and `"1|(0&(1))"` are
valid, while `"()1|1"` is not.

Evaluation is left-to-right with no operator precedence: resolve
parenthesized groups first, then apply the operators as they appear from
left to right. So `1|0&1` groups as `(1|0)&1`.

You may edit the expression one character at a time, each edit costing
one, and the legal edits are:

- `'0'` into `'1'`, or `'1'` into `'0'`;
- `'&'` into `'|'`, or `'|'` into `'&'`.

Return the least number of edits that makes the expression evaluate to
the opposite of its current value.

### Example 1

```text
Input: expression = "1|(0&0)"
Output: 1
Explanation: The expression evaluates to 1. Replacing the '|' with '&'
gives "1&(0&0)", which evaluates to 0.
```

### Example 2

```text
Input: expression = "0&0&0"
Output: 2
Explanation: The expression evaluates to 0. Flip the final '0' to '1' and
turn the second '&' into '|': "0&0|1" evaluates as (0&0)|1 = 1.
```

### Example 3

```text
Input: expression = "(0&0&0)&(0&0)"
Output: 3
Explanation: Two edits turn the first group into "0&0|1" (value 1), and a
third swaps the joining '&' for '|': "(0&0|1)|(0&0)" = 1|0 = 1.
```

### Constraints

- `1 <= expression.length <= 10^5`
- `expression` contains only `'1'`, `'0'`, `'&'`, `'|'`, `'('`, and `')'`.
- Parentheses are properly matched, and no pair is empty — `"()"` never
  appears.

## Hints

### Hint 1

How much state does a subexpression really carry? Two numbers turn out
to be enough.

### Hint 2

Summarize every subexpression as its current value plus the least number
of edits needed to flip that value.

### Hint 3

Evaluate with a stack — innermost parentheses collapse first — and fold
the operands left to right, exactly as the expression is evaluated.
