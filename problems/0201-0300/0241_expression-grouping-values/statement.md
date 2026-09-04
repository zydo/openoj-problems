# Expression Grouping Values

## Description

You are given a string `expression` built from non-negative integers and
the operators `+`, `-`, and `*`, with no explicit parentheses. Consider
every way to fully parenthesize the expression — every way to choose,
at each level, which operator's two operands get combined first. Each
choice of parenthesization evaluates to some integer, and you must
return **every value that arises this way**, one entry per
parenthesization (not per distinct value).

Order the result ascending, and do not collapse repeats: if two
different parenthesizations happen to land on the same value, that value
appears twice.

Inputs are chosen so every resulting value fits in a 32-bit signed
integer, and the number of distinct parenthesizations never exceeds
`10⁴`.

### Example 1

```text
Input: expression = "3-2-1"
Output: [0,2]
Explanation:
((3-2)-1) = 0
(3-(2-1)) = 2
```

### Example 2

```text
Input: expression = "2*3+4*5"
Output: [26,46,50,70,70]
Explanation:
((2*3)+(4*5)) = 26
(2*(3+(4*5))) = 46
(((2*3)+4)*5) = 50
((2*(3+4))*5) = 70
(2*((3+4)*5)) = 70
```

### Constraints

- `1 <= expression.length <= 20`
- `expression` consists only of digits and the operators `+`, `-`, `*`.
- Every integer literal in `expression` lies in `[0, 99]` and carries no
  leading sign.
