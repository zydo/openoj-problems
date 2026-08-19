# Evaluate a Boolean Formula

## Description

A **boolean formula** is a string built from these five shapes:

- `'t'`, the constant true.
- `'f'`, the constant false.
- `'!(x)'`, the negation of the formula `x`.
- `'&(x1, x2, ..., xn)'`, the conjunction of the formulas `x1` through `xn`,
  with `n >= 1`.
- `'|(x1, x2, ..., xn)'`, the disjunction of the formulas `x1` through `xn`,
  with `n >= 1`.

Given a string `formula` of this shape, evaluate it and return the
resulting boolean.

The input is guaranteed to be a well-formed formula.

### Example 1

```text
Input: formula = "&(!(f),|(t,f))"
Output: true
Explanation: !(f) is true and |(t,f) is true, so the conjunction is true.
```

### Example 2

```text
Input: formula = "|(f,!(&(t,t)))"
Output: false
Explanation: &(t,t) is true, negating it gives false, and every operand of
the outer disjunction is false.
```

### Example 3

```text
Input: formula = "!(|(f,f,&(f,t)))"
Output: true
Explanation: The innermost &(f,t) is false, so the disjunction is false,
and negating a false formula yields true.
```

### Constraints

- `1 <= formula.length <= 2 * 10⁴`
- `formula[i]` is one of `'('`, `')'`, `'&'`, `'|'`, `'!'`, `'t'`, `'f'`, `','`.

## Hints

### Hint 1

Read the formula left to right with a position cursor; every construct
starts with either an atom or an operator character, so one character tells
you which case you are in.

### Hint 2

After an operator, expect `'('`, then operands separated by commas until
the matching `')'` — each operand may itself be a whole formula, so the
same routine calls itself and resumes where the child stopped.

### Hint 3

Combine each collected operand list with its operator — invert the one
operand of `!`, require all for `&`, accept any for `|`. A stack of pending
operators works equally well in place of the recursion.
