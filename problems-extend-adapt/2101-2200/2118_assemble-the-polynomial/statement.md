# Assemble the Polynomial

## Description

Table: `Monomials`

| Column Name | Type |
| ----------- | ---- |
| exponent    | int  |
| coefficient | int  |

`exponent` is the column with unique values for this table.
Each row of this table describes one term that belongs to the polynomial.
`exponent` is an integer between `0` and `100`.
`coefficient` is an integer between `-100` and `100` and is never zero.

A checker on your side accepts polynomials written in one exact text shape:

- Every term sits on the left-hand side; the right-hand side is just `0`.
- Each term is rendered as `"<sign><coef>X^<exp>"` where:
    - `<sign>` is `"+"` for a positive coefficient and `"-"` otherwise.
    - `<coef>` is the coefficient's absolute value.
    - `<exp>` is the term's exponent.
- An exponent of `1` drops the `"^<exp>"` suffix.
    - For instance, exponent `1` with coefficient `3` renders as `"+3X"`.
- An exponent of `0` drops the variable entirely — no `"X"` and no
  `"^<exp>"`.
    - For instance, exponent `0` with coefficient `-3` renders as `"-3"`.
- Terms appear ordered from the largest exponent down to the smallest.

Write a solution to assemble that text.

Each testcase supplies its own `dataset`, whose statements insert all rows
into `Monomials` before the query runs. The result format is in the
following examples.

### Example 1

```text
Input:
Monomials table:
exponent | coefficient
3        | 2
1        | -5
0        | 4
Output:
expression
+2X^3-5X+4=0
```

### Example 2

```text
Input:
Monomials table:
exponent | coefficient
5        | -7
2        | 6
1        | 1
0        | -9
Output:
expression
-7X^5+6X^2+1X-9=0
```

Write your solution as a single `SELECT` query returning the column
`expression`.

### Follow up

How would your query need to change if `exponent` were no longer the primary
key, yet each exponent value still had to appear at most once in the result?
