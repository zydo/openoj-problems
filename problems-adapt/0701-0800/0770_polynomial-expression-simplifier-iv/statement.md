# Polynomial Expression Simplifier IV

## Description

You are given an arithmetic `expression` such as `"x + 3 - y + 10"`,
together with a substitution map given as parallel arrays `evalvars` and
`evalints` (so `evalvars = ["x"]` and `evalints = [5]` means `x` stands
for `5`). Substitute every named variable by its number, fully simplify,
and return the result as a list of canonical tokens, such as
`["-1*y","18"]`.

The expression alternates chunks and operator symbols, each separated by
a single space.

- A chunk is a parenthesized sub-expression, a variable, or a
  non-negative integer.
- A variable is one or more lowercase letters and never carries a
  leading coefficient or sign (no `"3x"` and no `"-x"`).

Evaluation follows the usual precedence: parentheses first, then
multiplication, then addition and subtraction. For instance,
`expression = "1 + 2 * 3"` reduces to `["7"]`.

Format the output as follows:

- Every surviving term's free variables are written in sorted
  lexicographic order — a term is always printed `"a*b*c"`, never
  `"b*a*c"`.
- A term's degree counts its variables with multiplicity, so
  `"a*a*b*c"` has degree 4. Terms are ordered by degree descending, and
  terms sharing a degree are ordered lexicographically by their variable
  part (ignoring the coefficient).
- Each term is written as its coefficient, then — if it has any
  variables — an asterisk and the variables, e.g. `"-2*a*a*a"`,
  `"5*c"`, `"-6"`. A coefficient of exactly `1` is still written out.
- Terms whose coefficient reduces to `0` (constants included) are
  dropped entirely; an expression that cancels completely returns `[]`.

The input expression is guaranteed valid, and every intermediate value
stays within `[-2³¹, 2³¹ - 1]`.

### Example 1

```text
Input: expression = "x + 3 - y + 10", evalvars = ["x"], evalints = [5]
Output: ["-1*y","18"]
```

### Example 2

```text
Input: expression = "x - 4 + weight - height", evalvars = ["x", "weight"], evalints = [5, 20]
Output: ["-1*height","21"]
```

### Example 3

```text
Input: expression = "(x + 3) * (x - 3)", evalvars = [], evalints = []
Output: ["1*x*x","-9"]
```

### Constraints

- `1 <= expression.length <= 250`
- `expression` consists of lowercase English letters, digits, `'+'`,
  `'-'`, `'*'`, `'('`, `')'`, and `' '`.
- `expression` has no leading or trailing spaces.
- Every token in `expression` is separated by exactly one space.
- `0 <= evalvars.length <= 100`
- `1 <= evalvars[i].length <= 20`
- `evalvars[i]` consists of lowercase English letters.
- `evalints.length == evalvars.length`
- `-100 <= evalints[i] <= 100`

## Hints

### Hint 1

Model every sub-expression as a small polynomial: a map from a product of
free variables to its coefficient, supporting addition, subtraction, and
multiplication of two such maps, plus substitution of a known variable by
its constant. Scanning the expression once, build a one-term polynomial
for each operand and combine polynomials across the two sides of every
operator, then render the final map in the canonical order.
